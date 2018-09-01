import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

import PAY from './pay.graphql'
import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import { DEFAULT_VAT_RATE } from '../../../config'
import createLogger from '../../utils/createLogger'
import { STRIPE_PUBLIC_KEY } from '../../../config/apps'
import CheckoutForm from './CheckoutForm'
import {
  getMonthFromCardDate,
  getYearFromCardDate,
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from '../../utils/card'

import trackUserBehaviour, {
  CHECKOUT_PAYMENT_REQUEST,
  VOUCHER_VALIDATE,
} from '../../utils/trackUserBehaviour'

// const VALIDATE_VOUCHER = gql`
//   query validateVoucher(
//     $trainingInstanceId: ID!
//     $quantity: Int!
//     $voucherCode: String!
//   ) {
//     voucherGetNetPriceWithDiscount(
//       trainingInstanceId: $trainingInstanceId
//       quantity: $quantity
//       voucherCode: $voucherCode
//     ) {
//       amount
//     }
//   }
// `

export class CheckoutContainer extends React.Component {
  state = {
    isPaymentInProgress: false,
    paymentErrorMessage: null,
    vouchedPricePerQuantity: null,
    isVoucherValid: null,
    discountVoucher: 0,
    isVoucherValidationInProgress: false,
    voucher: '',
    isViesValidationInProgress: false,
    isViesValid: null,
  }

  onVoucherChange = e => {
    this.resetVoucher(e.target.value)
  }

  setVoucherInProgress = isVoucherValidationInProgress => {
    this.setState({ isVoucherValidationInProgress })
  }

  resetVoucher = (voucher = '') => {
    this.setState({
      discountVoucher: 0,
      vouchedPricePerQuantity: null,
      isVoucherValid: null,
      voucher,
    })
  }

  resetVatRate = () => {
    if (this.state.isViesValid || this.props.vatRate !== DEFAULT_VAT_RATE) {
      this.props.updateVatRate(DEFAULT_VAT_RATE)
      this.setState({ isViesValid: false })
    }
  }

  addCourse = e => {
    this.resetVoucher()
    return this.props.addCourse(e)
  }

  removeCourse = e => {
    this.resetVoucher()
    return this.props.removeCourse(e)
  }

  validateVies = fullVatNumber => {
    if (!fullVatNumber || !fullVatNumber.length > 3) {
      return
    }

    const vatNumber = fullVatNumber.substring(2, fullVatNumber.length)
    const countryCode = fullVatNumber.substring(0, 2)

    if (!vatNumber || !countryCode || this.state.isViesValidationInProgress) {
      return
    }

    this.setState({ isViesValidationInProgress: true })
    this.props.client
      .query({
        query: gql`
          query isVatNumberValid($countryCode: String!, $vatNumber: String!) {
            isVatNumberValid(countryCode: $countryCode, vatNumber: $vatNumber)
          }
        `,
        variables: { countryCode, vatNumber },
      })
      .then(({ data = {} }) => {
        const { isVatNumberValid } = data
        this.setState({
          isViesValid: isVatNumberValid,
          isViesValidationInProgress: false,
        })
        if (isVatNumberValid && countryCode.toLowerCase() !== 'gb') {
          this.props.updateVatRate(0)
        }
      })
      .catch(() => {
        this.setState({ isViesValidationInProgress: false })
      })
  }

  validateVoucher = voucher => {
    const {
      quantity,
      discountPricePerQuantity,
      pricePerQuantity,
      client,
      trainingInstanceId,
      trackUserBehaviour,
    } = this.props
    const { isVoucherValidationInProgress } = this.state
    const price = discountPricePerQuantity || pricePerQuantity

    if (!voucher || isVoucherValidationInProgress) {
      return
    }

    this.setVoucherInProgress(true)
    trackUserBehaviour({
      event: VOUCHER_VALIDATE,
      payload: { voucher },
    })
    client
      .query({
        query: VALIDATE_VOUCHER,
        variables: {
          voucherCode: voucher,
          trainingInstanceId,
          quantity,
        },
      })
      .then(({ data = {} }) => {
        const { amount } = data.voucherGetNetPriceWithDiscount || {}
        this.setVoucherInProgress(false)
        if (amount && amount < price) {
          const discountVoucher = price - amount
          this.setState({
            vouchedPricePerQuantity: amount,
            isVoucherValid: true,
            discountVoucher,
          })
        } else {
          this.setState({ isVoucherValid: false })
        }
      })
      .catch(error => {
        this.setVoucherInProgress(false)
      })
  }

  processPaymentError = error => {
    this.setState({ paymentErrorMessage: true, isPaymentInProgress: false })
    createLogger().error(error)
  }

  pay = values => {
    if (this.state.isPaymentInProgress) {
      return
    }
    this.setState({ paymentErrorMessage: false, isPaymentInProgress: true })

    const {
      CCnumber,
      CCexpiry,
      CCcvc,
      email,
      name,
      companyName,
      companyVat,
    } = values
    const {
      quantity,
      trackUserBehaviour,
      vatRate,
      pay,
      trainingInstanceId,
      paymentApi = Stripe,
    } = this.props
    const number = formatCreditCardNumber(CCnumber)
    const cvc = formatCVC(CCcvc)
    const formatedCCexpiry = formatExpirationDate(CCexpiry)
    const exp_month = getMonthFromCardDate(formatedCCexpiry)
    const exp_year = getYearFromCardDate(formatedCCexpiry)

    trackUserBehaviour({
      event: CHECKOUT_PAYMENT_REQUEST,
      payload: { email, trainingInstanceId },
    })

    paymentApi.setPublishableKey(STRIPE_PUBLIC_KEY)
    return paymentApi.card.createToken({ number, cvc, exp_month, exp_year })
      .then(result =>
        pay({
          variables: {
            voucherCode: this.state.voucher,
            quantity,
            trainingInstanceId,
            email,
            name,
            token: result.id,
            vatRate,
            companyName,
            companyVat,
          },
        })
          .then(({ data }) => {
            if (!data.errors) {
              this.props.history.push('/payment-confirmation', {
                email,
                makePayment: data.makePayment,
                trainingInstanceId,
              })

              return data
            } else {
              this.processPaymentError(errors)
            }
          })
          .catch(error => {
            this.processPaymentError(error)
          })
      )
  }

  render() {
    const {
      quantity,
      pricePerQuantity,
      discountPricePerQuantity,
      currency,
      vatRate,
    } = this.props
    const {
      isViesValidationInProgress,
      isViesValid,
      paymentErrorMessage,
      isPaymentInProgress,
      discountVoucher,
      isVoucherValid,
      isVoucherValidationInProgress,
      voucher,
      vouchedPricePerQuantity,
    } = this.state
    const companyVat = {
      isViesValid,
      isViesValidationInProgress,
      validateVies: this.validateVies,
      resetVatRate: this.resetVatRate,
    }

    return (
      <CheckoutForm
        quantity={quantity}
        removeCourse={this.removeCourse}
        addCourse={this.addCourse}
        currency={currency}
        pricePerQuantity={pricePerQuantity}
        discountPricePerQuantity={discountPricePerQuantity}
        vatRate={vatRate}
        discountVoucher={discountVoucher}
        isPaymentInProgress={isPaymentInProgress}
        paymentErrorMessage={paymentErrorMessage}
        pay={this.pay}
        validateVoucher={this.validateVoucher}
        isVoucherValid={isVoucherValid}
        isVoucherValidationInProgress={isVoucherValidationInProgress}
        voucher={voucher}
        onVoucherChange={this.onVoucherChange}
        vouchedPricePerQuantity={vouchedPricePerQuantity}
        companyVat={companyVat}
      />
    )
  }
}

CheckoutContainer.defaultProps = {
  trackUserBehaviour
}

CheckoutContainer.propTypes = {
  pay: PropTypes.func.isRequired,
  vatRate: PropTypes.number.isRequired,
  addCourse: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  updateVatRate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  discountPricePerQuantity: PropTypes.number,
  pricePerQuantity: PropTypes.number.isRequired,
  trainingInstanceId: PropTypes.string.isRequired,
  trackUserBehaviour: PropTypes.func.isRequired,
}

// const PAY = gql`
//   mutation pay(
//     $trainingInstanceId: ID!
//     $quantity: Int!
//     $voucherCode: String
//     $email: String!
//     $token: String!
//     $companyName: String
//     $vatCountry: String
//     $vatNumber: String
//   ) {
//     makePayment(
//       payment: {
//         trainingInstanceId: $trainingInstanceId
//         quantity: $quantity
//         voucherCode: $voucherCode
//         email: $email
//         token: $token
//         companyName: $companyName
//         vatCountry: $vatCountry
//         vatNumber: $vatNumber
//       }
//     ) {
//       id
//       currency
//       amount
//       metadata
//     }
//   }
// `

const withPay = graphql(PAY, {
  name: 'pay',
})

export default withRouter(withPay(withApollo(CheckoutContainer)))