import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../buttons'
import { Span } from '../../text'
import { Price } from '../'
import formatPrice from '../../utils/currency'
import trackUserBehaviour, {
  BUY_BUTTON_CLICK,
} from '../../utils/trackUserBehaviour'
import CheckoutContainer from './CheckoutContainer'

const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`

const PriceAndDiscount = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
`

export const BuyButton = props => (
  <Button {...props} right children="Buy now" cta />
)

class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen || false,
    }
  }

  toggleIsOpen = () => {
    this.props.trackUserBehaviour({
      event: BUY_BUTTON_CLICK,
    })
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      trainingInstanceId,
      price,
      discountPrice,
      currency,
      quantity,
      removeCourse,
      addCourse,
      priceXQuantity,
      currentPriceXQuantity,
      vatRate,
      updateVatRate,
      resetVoucher,
      validateVoucher,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
    } = this.props
    const { isOpen } = this.state
    // The class `gtm-purchase-box` is needed for Tracking purposes,
    // please DON'T DELETE IT!!
    return (
      <Fragment>
        {!isOpen ? (
          <PurchaseWrapper className="gtm-purchase-box">
            <Fragment>
              {currentPriceXQuantity ? (
                <PriceAndDiscount>
                  <Span lineThrough>
                    {formatPrice(currency, priceXQuantity, vatRate)}
                  </Span>
                  <Price>
                    &nbsp;
                    {formatPrice(currency, currentPriceXQuantity, vatRate)}
                  </Price>
                </PriceAndDiscount>
              ) : (
                  <Price>
                    {formatPrice(currency, priceXQuantity, vatRate)}
                  </Price>
                )}
              <BuyButton onClick={this.toggleIsOpen} />
            </Fragment>
          </PurchaseWrapper>
        ) : (
            <CheckoutContainer
              trainingInstanceId={trainingInstanceId}
              vatRate={vatRate}
              updateVatRate={updateVatRate}
              currency={currency}
              price={price}
              discountPrice={discountPrice}
              quantity={quantity}
              priceXQuantity={priceXQuantity}
              currentPriceXQuantity={currentPriceXQuantity}
              removeCourse={removeCourse}
              addCourse={addCourse}
              resetVoucher={resetVoucher}
              validateVoucher={validateVoucher}
              voucher={voucher}
              isVoucherValid={isVoucherValid}
              isVoucherValidationInProgress={isVoucherValidationInProgress}
            />
          )}
      </Fragment>
    )
  }
}

Checkout.defaultProps = {
  quantity: 1,
  trackUserBehaviour,
}

Checkout.propTypes = {
  trainingInstanceId: PropTypes.string.isRequired,
  vatRate: PropTypes.number.isRequired,
  updateVatRate: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  priceXQuantity: PropTypes.number,
  currentPriceXQuantity: PropTypes.number,
  removeCourse: PropTypes.func.isRequired,
  addCourse: PropTypes.func.isRequired,
  resetVoucher: PropTypes.func.isRequired,
  validateVoucher: PropTypes.func.isRequired,
  voucher: PropTypes.string.isRequired,
  isVoucherValid: PropTypes.bool.isRequired,
  isVoucherValidationInProgress: PropTypes.bool.isRequired,
}
export default Checkout
