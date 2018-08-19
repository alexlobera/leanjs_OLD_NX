import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

import createLogger from '../utils/createLogger'
import { STRIPE_PUBLIC_KEY } from '../../config/apps'
import CheckoutForm from './CheckoutForm'
import { getMonthFromCardDate, getYearFromCardDate, formatCreditCardNumber, formatExpirationDate, formatCVC } from '../utils/card'

import trackUserBehaviour, {
    CHECKOUT_PAYMENT_SUCCESS,
    CHECKOUT_PAYMENT_REQUEST,
    VOUCHER_VALIDATE,
} from '../utils/trackUserBehaviour'

const VALIDATE_VOUCHER = gql`
  query validateVoucher(
    $trainingInstanceId: ID!,
    $quantity: Int!,
    $voucherCode: String!,
  ) {
    voucherGetNetPriceWithDiscount(
      trainingInstanceId: $trainingInstanceId,
      quantity: $quantity,
      voucherCode: $voucherCode)  {
        amount
    }
  }
`

class CheckoutContainer extends React.Component {
    state = {
        isPaymentInProgress: false,
        paymentErrorMessage: null,
        vouchedPricePerQuantity: null,
        isVoucherValid: null,
        discountVoucher: 0,
        isVoucherInProgress: false,
        voucher: '',
        isViesValidationInProgress: false,
        isViesValid: null,
    }

    onVoucherChange = e => {
        this.resetVoucher(e.target.value)
    }

    setVoucherInProgress = (isVoucherInProgress) => {
        this.setState({ isVoucherInProgress })
    };

    resetVoucher = (voucher = '') => {
        this.setState({
            discountVoucher: 0,
            vouchedPricePerQuantity: null,
            isVoucherValid: null,
            voucher,
        })
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
                this.setState({ isViesValid: isVatNumberValid, isViesValidationInProgress: false })
                if (isVatNumberValid && countryCode.toLowerCase() !== "gb") {
                    this.props.updateVatRate(0)
                }
            })
            .catch(() => {
                this.setState({ isViesValidationInProgress: false })
            })
    }

    validateVoucher = voucher => {
        const { quantity, discountPricePerQuantity, pricePerQuantity, client, trainingInstanceId, trackUserBehaviour } = this.props
        const { isVoucherInProgress } = this.state
        const price = discountPricePerQuantity || pricePerQuantity

        if (!voucher || isVoucherInProgress) {
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
                    quantity
                }
            })
            .then(({ data = {} }) => {
                const { amount } = data.voucherGetNetPriceWithDiscount || {}
                this.setVoucherInProgress(false)
                if (amount && amount < price) {
                    const discountVoucher = price - amount
                    this.setState({
                        vouchedPricePerQuantity: amount,
                        isVoucherValid: true,
                        discountVoucher
                    })
                } else {
                    this.setState({ isVoucherValid: false })
                }
            })
            .catch(error => {
                this.setVoucherInProgress(false)
            })
    };

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
        const { quantity, trackUserBehaviour, vatRate, pay } = this.props
        const { trainingInstanceId } = this.props.course
        const number = formatCreditCardNumber(CCnumber)
        const cvc = formatCVC(CCcvc)
        const formatedCCexpiry = formatExpirationDate(CCexpiry)
        const exp_month = getMonthFromCardDate(formatedCCexpiry)
        const exp_year = getYearFromCardDate(formatedCCexpiry)

        // console.log(values)
        // console.log(number, cvc, formatedCCexpiry, exp_month, exp_year)

        trackUserBehaviour({
            event: CHECKOUT_PAYMENT_REQUEST,
            payload: { email, trainingInstanceId },
        })

        Stripe.setPublishableKey(STRIPE_PUBLIC_KEY)
        Stripe.card.createToken(
            { number, cvc, exp_month, exp_year },
            (status, response) =>
                pay({
                    variables: {
                        voucherCode: this.state.voucher,
                        quantity,
                        trainingInstanceId,
                        email,
                        name,
                        token: response.id,
                        vatRate,
                        companyName,
                        companyVat,
                    }
                }).then(({ errors, makePayment }) => {
                    trackUserBehaviour({
                        event: CHECKOUT_PAYMENT_SUCCESS,
                        payload: {
                            email,
                            makePayment,
                            trainingInstanceId
                        }
                    })

                    if (!errors) {
                        this.props.history.push('/payment-confirmation')
                    } else {
                        this.processPaymentError(errors)
                    }
                }).catch(error => {
                    this.processPaymentError(error)
                })

        )
    };

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
            isVoucherInProgress,
            voucher,
            vouchedPricePerQuantity
        } = this.state
        const companyVat = {
            isViesValid,
            isViesValidationInProgress,
            validateVies: this.validateVies,
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
                isVoucherInProgress={isVoucherInProgress}
                voucher={voucher}
                onVoucherChange={this.onVoucherChange}
                vouchedPricePerQuantity={vouchedPricePerQuantity}
                companyVat={companyVat}
            />
        )
    }
}

CheckoutContainer.defaultProps = {
    trackUserBehaviour,
}

const PAY = gql`
  mutation pay(
    $trainingInstanceId: ID!,
    $quantity: Int!,
    $voucherCode: String,
    $email: String!,
    $token: String!,
    $companyName: String,
    $vatCountry: String,
    $vatNumber: String
  ){
    makePayment(payment:{
      trainingInstanceId: $trainingInstanceId,
      quantity: $quantity,
      voucherCode: $voucherCode,
      email: $email,
      token: $token,
      companyName: $companyName,
      vatCountry: $vatCountry,
      vatNumber: $vatNumber,
    }) {
      id
    }
  }
`

const withPay = graphql(PAY, {
    name: 'pay'
})

export default withRouter(withPay(withApollo(CheckoutContainer)))
