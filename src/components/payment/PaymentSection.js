import React from 'react'
import { H2Ref, H3, P } from '../text'
import { Ribbon, Card } from '../elements'
import Link from '../navigation/Link'
import Checkout from './checkout/'
import formatPrice from '../utils/currency'
import { DEFAULT_VAT_RATE } from '../../config'

class PaymentSection extends React.Component {
  state = {
    quantity: 1,
    maxSeats: 30,
    vatRate: DEFAULT_VAT_RATE,
  }

  removeCourse = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1 <= 0 ? 1 : prevState.quantity - 1,
    }))
  }

  addCourse = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1 > 30 ? 30 : prevState.quantity + 1,
    }))
  }

  updateVatRate = vatRate => {
    this.setState({ vatRate })
  }

  render() {
    const {
      trainingInstanceId,
      price,
      discountPrice,
      nextDiscountPrice,
      currency = 'gbp',
      priceGoesUpOn,
      ticketName,
    } =
      this.props.data || {}
    const { quantity, vatRate } = this.state
    const pricePerQuantity = price * quantity
    const discountPricePerQuantity = discountPrice && discountPrice * quantity

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
                pricePerQuantity - discountPricePerQuantity,
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
            pricePerQuantity={pricePerQuantity}
            discountPricePerQuantity={discountPricePerQuantity}
          />
        </Card>
      </React.Fragment>
    ) : null
  }
}

export default PaymentSection
