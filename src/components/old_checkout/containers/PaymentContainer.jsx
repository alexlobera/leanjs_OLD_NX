import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import { STRIPE_PUBLIC_KEY } from '../../../config/apps'
import Payment from '../components/Payment'
import PaymentConfirmation from '../components/PaymentConfirmation'
import { VAT_RATE } from '../config'
import { getMonthFromCardDate, getYearFromCardDate } from '../utils/cardDate'

import trackUserBehaviour, {
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_PAYMENT_REQUEST,
} from '../../utils/trackUserBehaviour'

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

class PaymentContainer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      urlParams: props.course.urlParams,
      quantity: props.quantity,
      price: props.course.price,
      currency: props.course.currency || 'gbp',
      isVoucherValidated: null,
      priceWithDiscount: props.course.price * props.quantity,
      discount: 0,
      isVoucherInProgress: false,
      isPaymentInProgress: false,
      errorMessage: false
    }
  }

  setVoucherInProgress = (isVoucherInProgress) => {
    this.setState({ isVoucherInProgress })
  };

  setPaymentInProgress = (isPaymentInProgress) => {
    this.setState({ isPaymentInProgress })
  };

  pay = (
    {
      voucher,
      cardNumber,
      expirationDate,
      cvc,
      email,
      companyName,
      vatNumber,
      vatCountry
    }
  ) => {
    const expirationMonth = getMonthFromCardDate(expirationDate)
    const expirationYear = getYearFromCardDate(expirationDate)
    const { quantity } = this.props
    const { trainingInstanceId, title } = this.props.course
    trackUserBehaviour({
      event: CHECKOUT_PAYMENT_REQUEST,
      payload: {
        email,
        trainingInstanceId
      }
    })

    this.setPaymentInProgress(true)
    this.setState({ errorMessage: false })

    Stripe.setPublishableKey(STRIPE_PUBLIC_KEY)
    Stripe.card.createToken(
      {
        number: cardNumber,
        cvc,
        exp_month: expirationMonth,
        exp_year: expirationYear
      },
      (status, response) => {
        this.props
          .pay({
            variables: {
              voucherCode: voucher,
              quantity,
              trainingInstanceId,
              email,
              token: response.id,
              vat_rate: VAT_RATE,
              companyName,
              vatCountry,
              vatNumber
            }
          })
          .then(({ errors, makePayment }) => {
            trackUserBehaviour({
              event: CHECKOUT_PAYMENT_SUCCESS,
              payload: {
                email,
                makePayment,
                trainingInstanceId
              }
            })

            this.setPaymentInProgress(false)
            if (!errors) {
              this.setState({ errorMessage: false })
              this.context.modal.showModal(
                <PaymentConfirmation title={title} email={email} />,
                true
              )
            } else {
              this.setState({ errorMessage: true })
              this.setPaymentInProgress(false)
              // TODO SEND TO SENTRY LOG
              // trackUserBehaviour(CHECKOUT_PAYMENT_ERROR_API, { email, errors })
            }
          })
          .catch((errors) => {
            this.setPaymentInProgress(false)
            this.setState({ errorMessage: true })
            // TODO SEND TO SENTRY LOG
            // trackUserBehaviour(CHECKOUT_PAYMENT_ERROR_STRIPE, { email, errors })
          })
      }
    )
  };

  validateVoucher = (voucher) => {
    const rawPrice = this.state.price * this.props.quantity

    if (voucher) {
      this.setVoucherInProgress(true)
      this.props.client
        .query({
          query: VALIDATE_VOUCHER,
          variables: {
            voucherCode: voucher,
            trainingInstanceId: this.props.course.trainingInstanceId,
            quantity: this.props.quantity
          }
        })
        .then(({ data = {} }) => {
          const { amount } = data.voucherGetNetPriceWithDiscount || {}
          this.setVoucherInProgress(false)
          if (amount && amount < rawPrice) {
            const discount = rawPrice - amount
            this.setState({
              priceWithDiscount: amount,
              isVoucherValidated: true,
              discount
            })
          } else {
            this.setState({ isVoucherValidated: false })
          }
        })
        .catch((error) => {
          this.setVoucherInProgress(false)
        })
    } else {
      this.setState({ isVoucherValidated: false })
    }
  };

  render() {
    return (
      <Payment
        urlParams={this.state.urlParams}
        quantity={this.props.quantity}
        price={this.state.price}
        title={this.props.title}
        currency={this.state.currency}
        isVoucherValidated={this.state.isVoucherValidated}
        priceWithDiscount={this.state.priceWithDiscount}
        discount={this.state.discount}
        isVoucherInProgress={this.state.isVoucherInProgress}
        isPaymentInProgress={this.state.isPaymentInProgress}
        errorMessage={this.state.errorMessage}
        validateVoucher={this.validateVoucher}
        pay={this.pay}
      />
    )
  }
}

PaymentContainer.contextTypes = {
  modal: PropTypes.object,
  trackUserBehaviour: PropTypes.func.isRequired
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

export default withPay(withApollo(PaymentContainer))
