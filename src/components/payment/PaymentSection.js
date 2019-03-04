import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'

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
    const { client, data = {}, trackUserBehaviour } = this.props
    const { isVoucherValidationInProgress, quantity } = this.state
    const { trainingInstanceId } = data

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
    const { paymentApi, data = {} } = this.props
    const {
      trainingInstanceId,
      price,
      discountPrice,
      currency = 'gbp',
      priceGoesUpOn,
    } = data
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

    return (
      <React.Fragment>
        {price ? (
          <React.Fragment>
            <H2Ref>
              Prices{' '}
              <Link to="#pricing" name="pricing">
                #
              </Link>
            </H2Ref>
            <P>
              Please be aware that the ticket only covers the cost of the
              training, it does not include travel expenses.
            </P>
            <Card small style={{ position: 'relative' }}>
              <H3>
                <strong>
                  {discountPrice ? 'Discount ticket' : 'Regular ticket'}
                </strong>
              </H3>
              {discountPrice ? (
                <Ribbon>
                  Save{' '}
                  {formatPrice(
                    currency,
                    priceXQuantity - currentPriceXQuantity,
                    vatRate
                  )}
                </Ribbon>
              ) : (
                ''
              )}
              {priceGoesUpOn > Date.now() ? (
                <React.Fragment>
                  <P>HURRY! This price is only available for...</P>
                  <P>
                    <Countdown date={priceGoesUpOn} />
                  </P>
                </React.Fragment>
              ) : (
                ''
              )}
              <Checkout
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
            </Card>
          </React.Fragment>
        ) : null}
        <Card small bg="dark" top={20}>
          <ContactForm simplified />
        </Card>
      </React.Fragment>
    )
  }
}

PaymentSection.defaultProps = {
  trackUserBehaviour,
}

PaymentSection.propTypes = {
  data: PropTypes.shape({
    trainingInstanceId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    priceGoesUpOn: PropTypes.object,
    currency: PropTypes.string,
    paymentApi: PropTypes.object,
  }),
  paymentApi: PropTypes.object,
}

export default withApollo(PaymentSection)
