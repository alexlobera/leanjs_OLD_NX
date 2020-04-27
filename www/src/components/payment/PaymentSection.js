import React from 'react'
import { navigate } from 'gatsby'

import { graphql, withStatelessClient } from '../../api/graphql/client'
import memoize from '../../api/graphql/memoize'
import { H2, H3, P } from '../text'
import { Ribbon } from '../elements'
import Card from '../elements/Card'
import Link from '../navigation/Link'
import Checkout from './checkout/'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'
import { getVoucherByPathname } from '../utils/store'
import trackUserBehaviour, {
  VOUCHER_VALIDATE,
} from '../utils/trackUserBehaviour'
import { MEETUP } from '../../config/data'
import Countdown from './Countdown'

function getAutomaticVoucherFromData(data) {
  let discount
  const item =
    data && data.trainingInstance
      ? data.trainingInstance
      : data && data.event
      ? data.event
      : null
  if (
    item &&
    item.upcomingAutomaticDiscounts &&
    item.upcomingAutomaticDiscounts.edges
  ) {
    const { edges } = item.upcomingAutomaticDiscounts
    if (edges.length) {
      discount = edges[0].node
    }
  }

  return discount
}

export const VALIDATE_VOUCHER_QUERY = `
  query validateVoucher(
    $itemId: ID!
    $shoppingItemEnum: ShoppingItemEnum!
    $voucherCode: String!
    $quantity: Int!
  ) {
    redeemVoucher(
      itemId: $itemId
      shoppingItemEnum: $shoppingItemEnum
      quantity: $quantity
      voucherCode: $voucherCode
    ) {
      discountPrice
    }
  }
`
class PaymentSection extends React.Component {
  state = {
    quantity: 1,
    isVoucherValid: null,
    isVoucherValidationInProgress: false,
    voucher: '',
    discountCodePrice: null,
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
      item: { id: itemId, shoppingItemEnum },
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
          itemId,
          shoppingItemEnum,
          quantity,
        },
      })
      .then(({ data = {} }) => {
        const { discountPrice } = data.redeemVoucher || {}
        this.setVoucherInProgress(false)
        this.setState({
          isVoucherValid: !!discountPrice,
          discountCodePrice: discountPrice,
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
      discountCodePrice: null,
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
      item = {},
      navigate,
      data,
      errors,
      loading,
      isOnline,
      city,
      triggerSubscribe,
      trialTraingInstance,
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
    } else if (!item || !item.id) {
      title = 'There is no event scheduled'
    } else if (new Date(item.endDate) < new Date()) {
      title = 'The event has ended'
    } else {
      title = 'Standard price ticket'
      trainingType = item.type
      let ticketsLeft
      if (item.shoppingItemEnum === 'event') {
        eventId = item.id
        ticketsLeft = item.ticketsLeft
      }

      notSoldOut = !(
        ticketsLeft !== undefined &&
        ticketsLeft !== null &&
        parseInt(ticketsLeft) <= 0
      )
      price = item.price
      currency = item.currency || 'gbp'

      let discount = getAutomaticVoucherFromData(data)

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
      discountCodePrice,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
    } = this.state
    const priceQuantity = price * quantity
    const currentPriceQuantity = discountCodePrice
      ? discountCodePrice
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
              <P>
                <strong>Why do we charge a nominal fee?</strong>
              </P>
              <P>
                We charge a nominal fee for community events in order to confirm
                attendance to ensure we have an accurate RSVP list. Our meetups
                are always over-subscribed so when people don't show it stops
                somone else attending.
              </P>
              <P>
                <strong>What do we do with the fee?</strong>
              </P>
              <P>
                By paying for the nominal fee you're supporting minorities in
                tech. You can read more about it in this{' '}
                <Link to="/blog/join-our-meetups-and-support-minorities-in-tech#why_we_charge_a_nominal_fee">
                  link
                </Link>
                .
              </P>
              <P>The payment confirmation email is your ticket.</P>
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
                    trialTraingInstance={trialTraingInstance}
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
          {trainingType !== MEETUP && !isOnline && (
            <P sx={{ pt: 4 }}>
              Please be aware that the ticket only covers the cost of the
              {trainingInstanceId ? 'training' : 'event'}, it does not include
              travel expenses.
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

export const QUERY_UPCOMING_TRAINING_VOUCHERS = `
query upcomingAutomaticDiscounts($trainingInstanceId: ID!) {
  trainingInstance(id: $trainingInstanceId) {
    ticketsLeft
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

export const QUERY_UPCOMING_EVENT_VOUCHERS = `
query upcomingAutomaticDiscounts($eventId: ID!) {
  event(id: $eventId) {
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

const memoizedTrainingOptions = memoize(item => ({
  variables: { trainingInstanceId: item.id },
}))

const withUpcomingTrainingVouchers = graphql(QUERY_UPCOMING_TRAINING_VOUCHERS, {
  options: ({ item }) => memoizedTrainingOptions(item),
  skip: ({ item }) => !item || item.shoppingItemEnum !== 'training',
})

const memoizedEventOptions = memoize(item => ({
  variables: { eventId: item.id },
}))

const withUpcomingEventVouchers = graphql(QUERY_UPCOMING_EVENT_VOUCHERS, {
  options: ({ item }) => memoizedEventOptions(item),
  skip: ({ item }) => !item || item.shoppingItemEnum !== 'event',
})

export default withUpcomingTrainingVouchers(
  withUpcomingEventVouchers(withStatelessClient(PaymentSection))
)
