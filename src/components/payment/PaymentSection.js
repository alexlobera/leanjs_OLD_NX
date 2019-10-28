import React from 'react'
import { navigate } from 'gatsby'

import { graphql, withStatelessClient } from '../../api/graphql/client'
import { H2, H3, P } from '../text'
import { Ribbon } from '../elements'
import Card from '../elements/Card'
import Checkout from './checkout/'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'
import { getVoucherByPathname } from '../utils/store'
import trackUserBehaviour, {
  VOUCHER_VALIDATE,
} from '../utils/trackUserBehaviour'
import { MEETUP } from '../../config/data'
import Countdown from './Countdown'

export const VALIDATE_VOUCHER_QUERY = `
  query validateVoucher(
    $trainingInstanceId: ID!
    $quantity: Int!
    $voucherCode: String!
  ) {
    redeemVoucher(
      trainingInstanceId: $trainingInstanceId
      quantity: $quantity
      voucherCode: $voucherCode
    ) {
      netPrice
      totalDiscount
    }
  }
`
class PaymentSection extends React.Component {
  state = {
    quantity: 1,
    isVoucherValid: null,
    isVoucherValidationInProgress: false,
    voucher: '',
    netPrice: null,
    vatRate: DEFAULT_VAT_RATE,
  }

  componentDidMount() {
    const voucher = getVoucherByPathname()
    if (voucher) {
      this.setState({ voucher })
      this.validateVoucher(voucher)
    }
  }

  validateVoucher = voucher => {
    const {
      statelessClient,
      training: { id: trainingInstanceId },
      trackUserBehaviour,
    } = this.props
    const { isVoucherValidationInProgress, quantity } = this.state

    if (!voucher || isVoucherValidationInProgress) {
      return
    }

    this.setVoucherInProgress(true)
    trackUserBehaviour({
      event: VOUCHER_VALIDATE,
      payload: { voucher },
    })

    return statelessClient
      .query({
        query: VALIDATE_VOUCHER_QUERY,
        variables: {
          voucherCode: voucher,
          trainingInstanceId,
          quantity,
        },
      })
      .then(({ data = {} }) => {
        const { netPrice } = data.redeemVoucher || {}

        this.setVoucherInProgress(false)
        this.setState({
          isVoucherValid: !!netPrice,
          netPrice,
        })
      })
      .catch(error => {
        this.setVoucherInProgress(false)
      })
  }

  setVoucherInProgress = isVoucherValidationInProgress => {
    this.setState({ isVoucherValidationInProgress })
  }

  resetVoucher = (voucher = '') => {
    this.setState({
      isVoucherValid: null,
      voucher,
      netPrice: null,
    })
  }

  removeCourse = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1 <= 0 ? 1 : prevState.quantity - 1,
    }))
    this.resetVoucher()
  }

  addCourse = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1 > 30 ? 30 : prevState.quantity + 1,
    }))
    this.resetVoucher()
  }

  updateVatRate = vatRate => {
    this.setState({ vatRate })
  }

  render() {
    const {
      paymentApi,
      training = {},
      navigate,
      data,
      errors,
      loading,
      city,
      triggerSubscribe,
    } = this.props
    let trainingInstanceId,
      eventId,
      price = 0,
      currency,
      title,
      priceGoesUpOn,
      discountPrice,
      trainingType,
      notSoldOut = true

    if (errors) {
      title = 'There was an error'
    } else if (loading) {
      title = 'Loading ...'
    } else if (!training || !training.id) {
      title = 'There is no training scheduled'
    } else {
      title = 'Standard priced ticket'
      trainingType = training.type

      if (trainingType === MEETUP) {
        eventId = training.id
        const { ticketsLeft } = training
        notSoldOut = !(ticketsLeft && parseInt(ticketsLeft) <= 0)
      } else {
        trainingInstanceId = training.id
      }
      price = training.price
      currency = training.currency || 'gbp'

      const discount =
        data &&
        data.trainingInstance &&
        data.trainingInstance.upcomingAutomaticDiscounts &&
        data.trainingInstance.upcomingAutomaticDiscounts.edges.length &&
        data.trainingInstance.upcomingAutomaticDiscounts.edges[0].node

      if (discount) {
        title = 'Discounted Ticket'
        const { expiresAt, discountAmount, discountPercentage } = discount
        priceGoesUpOn = new Date(expiresAt)
        discountPrice = discountPercentage
          ? price - price * (discountPercentage / 100)
          : price - discountAmount
      }
    }

    const {
      quantity,
      vatRate,
      netPrice,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
    } = this.state
    const priceQuantity = price * quantity
    const currentPriceQuantity = netPrice
      ? netPrice
      : discountPrice
      ? discountPrice * quantity
      : priceQuantity

    const showSubscribeToNewsletter = trainingType === MEETUP

    return (
      <React.Fragment>
        <React.Fragment>
          <H2>
            Prices <a to="#pricing" name="pricing" />
          </H2>
          {trainingType === MEETUP && (
            <React.Fragment>
              <P>Why do we charge a nominal fee?</P>
              <P>
                We charge a nominal fee for community events in order to confirm
                attendance to ensure we have an accurate RSVP list. Our meetups
                are always over-subscribed so when people don't show it stops
                somone else attending.
              </P>
              <P>
                The payment confirmation email is your ticket. If you can't
                attend simply let us know and we'll be happy to refund you.
              </P>
            </React.Fragment>
          )}
          <Card variant="secondary">
            <H3>
              <strong>{notSoldOut ? title : 'Sold out!'}</strong>
            </H3>
            {notSoldOut && (
              <React.Fragment>
                {discountPrice ? (
                  <Ribbon>
                    <strong>
                      SAVE{' '}
                      {formatPrice(
                        currency,
                        priceQuantity - currentPriceQuantity,
                        vatRate
                      )}
                    </strong>
                  </Ribbon>
                ) : null}
                {priceGoesUpOn > Date.now() ? (
                  <React.Fragment>
                    <P>This price is only available for...</P>
                    <Countdown date={priceGoesUpOn} />
                  </React.Fragment>
                ) : null}
                {parseInt(price, 10) > 0 && (
                  <Checkout
                    {...this.props}
                    city={city}
                    navigate={navigate}
                    trainingInstanceId={trainingInstanceId}
                    eventId={eventId}
                    vatRate={vatRate}
                    updateVatRate={this.updateVatRate}
                    price={price}
                    discountPrice={discountPrice}
                    currency={currency}
                    quantity={this.state.quantity}
                    removeCourse={this.removeCourse}
                    addCourse={this.addCourse}
                    priceQuantity={priceQuantity}
                    currentPriceQuantity={currentPriceQuantity}
                    validateVoucher={this.validateVoucher}
                    resetVoucher={this.resetVoucher}
                    voucher={voucher}
                    isVoucherValid={isVoucherValid}
                    triggerSubscribe={triggerSubscribe}
                    isVoucherValidationInProgress={
                      isVoucherValidationInProgress
                    }
                    paymentApi={paymentApi}
                    showSubscribeToNewsletter={showSubscribeToNewsletter}
                  />
                )}
              </React.Fragment>
            )}
          </Card>
          {trainingType !== MEETUP && (
            <P pt={4}>
              Please be aware that the ticket only covers the cost of the
              training, it does not include travel expenses.
            </P>
          )}
        </React.Fragment>
      </React.Fragment>
    )
  }
}

PaymentSection.defaultProps = {
  trackUserBehaviour,
  navigate,
}

export const QUERY_UPCOMING_VOUCHERS = `
query upcomingAutomaticDiscounts($trainingInstanceId: ID!) {
  trainingInstance(id: $trainingInstanceId) {
    upcomingAutomaticDiscounts {
      edges {
        node {
          code
          id
          discountPercentage
          startsAt
          expiresAt
        }
      }
    }
  }
}
`
const withUpcomingVouchers = graphql(QUERY_UPCOMING_VOUCHERS, {
  options: ({ training }) => ({
    variables: { trainingInstanceId: training.id },
  }),
  skip: ({ training }) => !training || !training.id || training.type === MEETUP,
})

export default withStatelessClient(withUpcomingVouchers(PaymentSection))
