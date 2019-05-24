import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { graphql, compose } from 'react-apollo'
import { navigate } from 'gatsby'

import PAYMENT_SECTION_QUERY from './PaymentSection.graphql'
import ContactForm from '../../components/form/Contact'
import { H2Ref, H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import Checkout from './checkout/'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'
import { getVoucherByPathname } from '../utils/store'
import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import trackUserBehaviour, {
  VOUCHER_VALIDATE,
} from '../utils/trackUserBehaviour'
import { MEETUP } from '../../config/data'
import Countdown from './Countdown'

class PaymentSection extends React.Component {
  state = {
    quantity: 1,
    isVoucherValid: null,
    isVoucherValidationInProgress: false,
    voucher: '',
    voucherPriceXQuantity: null,
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
      client,
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
    return client
      .query({
        query: VALIDATE_VOUCHER,
        variables: {
          voucherCode: voucher,
          trainingInstanceId,
          quantity,
        },
      })
      .then(({ data = {} }) => {
        const { amount = null } = data.voucherGetNetPriceWithDiscount || {}
        this.setVoucherInProgress(false)
        this.setState({
          isVoucherValid: !!amount,
          voucherPriceXQuantity: amount,
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
      voucherPriceXQuantity: null,
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
      trainingError,
      trainingLoading,
      training = {},
      navigate,
      data: autoVoucherData = {},
    } = this.props
    let trainingInstanceId,
      price = 0,
      currency,
      title,
      priceGoesUpOn,
      discountPrice,
      trainingType

    if (trainingError || autoVoucherData.error) {
      title = 'There was an error'
    } else if (trainingLoading || autoVoucherData.loading) {
      title = 'Loading ...'
    } else if (!training || !training.id) {
      title = 'There is no training scheduled'
    } else {
      title = 'Standard priced ticket'
      trainingInstanceId = training.id
      price = training.price
      currency = training.currency || 'gbp'
      trainingType = training.training.type

      const discount =
        autoVoucherData.trainingInstance &&
        autoVoucherData.trainingInstance.upcomingAutomaticDiscounts &&
        autoVoucherData.trainingInstance.upcomingAutomaticDiscounts.edges
          .length &&
        autoVoucherData.trainingInstance.upcomingAutomaticDiscounts.edges[0]
          .node

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
      voucherPriceXQuantity,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
    } = this.state
    const priceXQuantity = price * quantity
    const currentPriceXQuantity =
      voucherPriceXQuantity !== null
        ? voucherPriceXQuantity
        : discountPrice
        ? discountPrice * quantity
        : priceXQuantity

    const meetup = trainingType === MEETUP

    return (
      <React.Fragment>
        <React.Fragment>
          <H2Ref>
            Prices{' '}
            <Link to="#pricing" name="pricing">
              #
            </Link>
          </H2Ref>
          {meetup ? (
            <React.Fragment>
              <P>Why do we charge a nominal fee?</P>
              <P>
                We charge a nominal fee for community events in order to confirm
                attendance to ensure we have an accurate RSVP list. Our meetups
                are always over-subscribed so when people don't show it stops
                somone else attending. The payment confirmation email is your
                ticket. If you can't attend simply let us know and we'll be
                happy to refund you.
              </P>
            </React.Fragment>
          ) : (
            <P>
              Please be aware that the ticket only covers the cost of the
              training, it does not include travel expenses.
            </P>
          )}
          <Card small style={{ position: 'relative' }}>
            <H3>
              <strong>{title}</strong>
            </H3>
            {discountPrice ? (
              <Ribbon>
                <strong>
                  SAVE{' '}
                  {formatPrice(
                    currency,
                    priceXQuantity - currentPriceXQuantity,
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
                navigate={navigate}
                trainingInstanceId={trainingInstanceId}
                vatRate={vatRate}
                updateVatRate={this.updateVatRate}
                price={price}
                discountPrice={discountPrice}
                currency={currency}
                quantity={this.state.quantity}
                removeCourse={this.removeCourse}
                addCourse={this.addCourse}
                priceXQuantity={priceXQuantity}
                currentPriceXQuantity={currentPriceXQuantity}
                validateVoucher={this.validateVoucher}
                resetVoucher={this.resetVoucher}
                voucher={voucher}
                isVoucherValid={isVoucherValid}
                isVoucherValidationInProgress={isVoucherValidationInProgress}
                paymentApi={paymentApi}
              />
            )}
          </Card>
        </React.Fragment>
        <Card small bg="dark" top={20}>
          <ContactForm simplified />
        </Card>
      </React.Fragment>
    )
  }
}

PaymentSection.defaultProps = {
  trackUserBehaviour,
  navigate,
}

PaymentSection.propTypes = {
  trainingError: PropTypes.bool,
  trainingLoading: PropTypes.bool,
  training: PropTypes.object,
  data: PropTypes.object,
  paymentApi: PropTypes.object,
  navigate: PropTypes.func,
}

const withUpcomingVouchers = graphql(PAYMENT_SECTION_QUERY, {
  options: ({ training }) => ({
    variables: { trainingInstanceId: training.id },
  }),
  skip: ({ training }) => !training || !training.id,
})

export default compose(
  withUpcomingVouchers,
  withApollo
)(PaymentSection)
