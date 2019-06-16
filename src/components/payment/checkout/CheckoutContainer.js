/* eslint no-undef: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo } from 'react-apollo'

import PAY from './Pay.graphql'
import VALIDATE_VIES from './ValidateVies.graphql'
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
} from '../../utils/trackUserBehaviour'

import { triggerSubscribe } from '../../../api'

export class CheckoutContainer extends React.Component {
  state = {
    isPaymentInProgress: false,
    paymentErrorMessage: null,
    isViesValidationInProgress: false,
    isViesValid: null,
  }

  resetVatRate = () => {
    if (this.state.isViesValid || this.props.vatRate !== DEFAULT_VAT_RATE) {
      this.props.updateVatRate(DEFAULT_VAT_RATE)
      this.setState({ isViesValid: false })
    }
  }

  addCourse = e => {
    return this.props.addCourse(e)
  }

  removeCourse = e => {
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
        query: VALIDATE_VIES,
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

  processPaymentError = error => {
    this.setState({ paymentErrorMessage: true, isPaymentInProgress: false })
    createLogger().error(error)
  }

  pay = values => {
    if (this.state.isPaymentInProgress) {
      return
    }
    const {
      quantity,
      trackUserBehaviour,
      pay,
      trainingInstanceId,
      paymentApi = Stripe,
      voucher,
      navigate,
      city,
    } = this.props

    this.setState({ paymentErrorMessage: false, isPaymentInProgress: true })
    const {
      CCnumber,
      CCexpiry,
      CCcvc,
      email,
      name,
      companyName,
      companyVat,
      meetupSubscribe,
    } = values

    if (meetupSubscribe) {
      this.props.triggerSubscribe({ email, pathname: 'checkout', city })
    }

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
    paymentApi.card.createToken(
      { number, cvc, exp_month, exp_year },
      (status, response) => {
        let vatNumber = null,
          vatCountry = null
        if (companyVat && companyVat.length > 2) {
          vatNumber = companyVat.substring(2, companyVat.length)
          vatCountry = companyVat.substring(0, 2)
        }
        const variables = {
          voucherCode: voucher,
          quantity,
          trainingInstanceId,
          email,
          name,
          token: response.id,
          companyName,
          vatNumber,
          vatCountry,
        }

        return pay({
          variables,
        })
          .then(({ data }) => {
            if (!data.errors) {
              navigate('/payment-confirmation', {
                email,
                makePayment: data.makePayment,
                trainingInstanceId,
              })
            } else {
              this.processPaymentError(errors)
            }
          })
          .catch(error => {
            this.processPaymentError(error)
          })
      }
    )
  }

  render() {
    const {
      quantity,
      priceQuantity,
      currentPriceQuantity,
      currency,
      vatRate,
      resetVoucher,
      validateVoucher,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
      showSubscribeToNewsletter,
    } = this.props
    const {
      isViesValidationInProgress,
      isViesValid,
      paymentErrorMessage,
      isPaymentInProgress,
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
        priceQuantity={priceQuantity}
        currentPriceQuantity={currentPriceQuantity}
        vatRate={vatRate}
        isPaymentInProgress={isPaymentInProgress}
        paymentErrorMessage={paymentErrorMessage}
        pay={this.pay}
        validateVoucher={validateVoucher}
        isVoucherValid={isVoucherValid}
        isVoucherValidationInProgress={isVoucherValidationInProgress}
        voucher={voucher}
        resetVoucher={resetVoucher}
        companyVat={companyVat}
        showSubscribeToNewsletter={showSubscribeToNewsletter}
      />
    )
  }
}

CheckoutContainer.defaultProps = {
  trackUserBehaviour,
  triggerSubscribe,
}

CheckoutContainer.propTypes = {
  pay: PropTypes.func.isRequired,
  vatRate: PropTypes.number.isRequired,
  addCourse: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  updateVatRate: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  currentPriceQuantity: PropTypes.number.isRequired,
  priceQuantity: PropTypes.number.isRequired,
  trainingInstanceId: PropTypes.string.isRequired,
  trackUserBehaviour: PropTypes.func.isRequired,
  resetVoucher: PropTypes.func.isRequired,
  validateVoucher: PropTypes.func.isRequired,
  voucher: PropTypes.string.isRequired,
  isVoucherValid: PropTypes.bool,
  isVoucherValidationInProgress: PropTypes.bool.isRequired,
  paymentApi: PropTypes.object,
  navigate: PropTypes.func.isRequired,
}

const withPay = graphql(PAY, {
  name: 'pay',
})

export default withPay(withApollo(CheckoutContainer))
