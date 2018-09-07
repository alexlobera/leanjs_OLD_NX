import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'

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

    }
  }

  validateVoucher = voucher => {
    const {
      client,
      data = {},
      trackUserBehaviour,
    } = this.props
    const {
      isVoucherValidationInProgress,
      quantity,
    } = this.state
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
        // if (amount) {
        //   this.setState({
        //     isVoucherValid: true,
        //     voucherPriceXQuantity: amount,
        //   })
        //   //this.updateVoucherPriceXQuantity(amount)
        // } else {
        //   this.setState({
        //     isVoucherValid: false,
        //     voucherPriceXQuantity: null,
        //   })
        //   //this.updateVoucherPriceXQuantity(null)
        // }
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
    //this.updateVoucherPriceXQuantity(null)
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

  // updateVoucherPriceXQuantity = voucherPriceXQuantity => {
  //   this.setState({ voucherPriceXQuantity })
  // }

  render() {
    const {
      trainingInstanceId,
      price,
      discountPrice,
      nextDiscountPrice,
      currency = 'gbp',
      priceGoesUpOn,
      ticketName,
    } = this.props.data || {}
    const {
      quantity,
      vatRate,
      voucherPriceXQuantity,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
    } = this.state
    const priceXQuantity = price * quantity
    const currentPriceXQuantity = voucherPriceXQuantity !== null ?
      voucherPriceXQuantity :
      discountPrice && discountPrice * quantity

    return price ? (
      <React.Fragment>
        <H2Ref>
          Prices{' '}
          <Link to="#pricing" name="pricing">
            #
          </Link>
        </H2Ref>
        <P>
          Please be aware that the ticket only covers the cost of the training,
          it does not include travel expenses.
        </P>
        <Card small style={{ position: 'relative' }}>
          <H3>
            <strong>{ticketName || 'Regular ticket'}</strong>
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
          {priceGoesUpOn && nextDiscountPrice ? (
            <P>
              Ticket price goes up to{' '}
              {formatPrice(currency, nextDiscountPrice, DEFAULT_VAT_RATE)} on{' '}
              {priceGoesUpOn}
            </P>
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
          />
        </Card>
      </React.Fragment>
    ) : null
  }
}

PaymentSection.defaultProps = {
  trackUserBehaviour
}

PaymentSection.propTypes = {
  data: PropTypes.shape({
    trainingInstanceId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    nextDiscountPrice: PropTypes.number,
    priceGoesUpOn: PropTypes.string,
    ticketName: PropTypes.string,
    currency: PropTypes.string,
  }),
}

export default withApollo(PaymentSection)
