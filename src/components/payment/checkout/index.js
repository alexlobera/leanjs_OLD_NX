import React, { Fragment } from 'react'

import styled from 'styled-components'
import { Button } from '../../buttons'
import { Span, P } from '../../text'
import { Price } from '../'
import formatPrice from '../../utils/currency'
import { aliasComponent } from '../../utils/aliasComponent'
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
  align-items: flex-start;
  flex-direction: column;
`

export const BuyButton = aliasComponent(Button)

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
      eventId,
      price,
      discountPrice,
      currency,
      quantity,
      removeCourse,
      addCourse,
      priceQuantity,
      currentPriceQuantity,
      vatRate,
      updateVatRate,
      resetVoucher,
      validateVoucher,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
      paymentApi,
      navigate,
      showSubscribeToNewsletter,
      city,
    } = this.props

    const { isOpen } = this.state
    // The class `gtm-purchase-box` is needed for Tracking purposes,
    // please DON'T DELETE IT!!

    return (
      <Fragment>
        {!isOpen ? (
          <PurchaseWrapper className="gtm-purchase-box">
            <Fragment>
              {currentPriceQuantity ? (
                <PriceAndDiscount>
                  <Price width={1} textAlign="center" pt={1} pb={1}>
                    {formatPrice(currency, currentPriceQuantity, vatRate)}
                  </Price>
                  <P>
                    {' '}
                    {priceQuantity !== currentPriceQuantity ? (
                      <Span lineThrough>
                        (Full prices:{' '}
                        {formatPrice(currency, priceQuantity, vatRate)})
                      </Span>
                    ) : null}
                  </P>
                </PriceAndDiscount>
              ) : (
                <Price>{formatPrice(currency, priceQuantity, vatRate)}</Price>
              )}
              <BuyButton
                onClick={this.toggleIsOpen}
                ml="auto"
                children="Buy now"
                variant="primary"
                className={
                  showSubscribeToNewsletter
                    ? `meetup-details-cta`
                    : `pricing-clicks`
                }
              />
            </Fragment>
          </PurchaseWrapper>
        ) : (
          <CheckoutContainer
            city={city}
            navigate={navigate}
            trainingInstanceId={trainingInstanceId}
            eventId={eventId}
            vatRate={vatRate}
            updateVatRate={updateVatRate}
            currency={currency}
            price={price}
            discountPrice={discountPrice}
            quantity={quantity}
            priceQuantity={priceQuantity}
            currentPriceQuantity={currentPriceQuantity}
            removeCourse={removeCourse}
            addCourse={addCourse}
            resetVoucher={resetVoucher}
            validateVoucher={validateVoucher}
            voucher={voucher}
            isVoucherValid={isVoucherValid}
            isVoucherValidationInProgress={isVoucherValidationInProgress}
            paymentApi={paymentApi}
            showSubscribeToNewsletter={showSubscribeToNewsletter}
            {...this.props}
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

export default Checkout
