import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button } from '../buttons'
import { Span } from '../text'
import { Price } from '../payment'
import formatPrice from '../utils/currency'
import trackUserBehaviour, {
    BUY_BUTTON_CLICK,
} from '../utils/trackUserBehaviour'
import CheckoutContainer from './CheckoutContainer'

const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`

const PriceAndDiscount = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom:5px;
`

class Checkout extends React.Component {
    state = {
        isOpen: false,
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
            pricePerQuantity,
            discountPricePerQuantity,
            vatRate,
            updateVatRate,
        } = this.props
        const { isOpen } = this.state
        // The class `gtm-purchase-box` is needed for Tracking purposes,
        // please DON'T DELETE IT!!
        return (
            <Fragment>
                {isOpen ? (
                    <PurchaseWrapper className="gtm-purchase-box">
                        <Fragment>
                            {discountPricePerQuantity ? (
                                <PriceAndDiscount>
                                    <Span lineThrough>{formatPrice(currency, pricePerQuantity, vatRate)}</Span>
                                    <Price>&nbsp;{formatPrice(currency, discountPricePerQuantity, vatRate)}</Price>
                                </PriceAndDiscount>
                            ) : (
                                    <Price>{formatPrice(currency, pricePerQuantity, vatRate)}</Price>
                                )}
                            <Button
                                right
                                children="Buy now"
                                cta
                                onClick={this.toggleIsOpen}
                            />
                        </Fragment>
                    </PurchaseWrapper>
                ) : <CheckoutContainer
                        trainingInstanceId={trainingInstanceId}
                        vatRate={vatRate}
                        updateVatRate={updateVatRate}
                        currency={currency}
                        price={price}
                        discountPrice={discountPrice}
                        quantity={quantity}
                        pricePerQuantity={pricePerQuantity}
                        discountPricePerQuantity={discountPricePerQuantity}
                        removeCourse={removeCourse}
                        addCourse={addCourse}
                    />}
            </Fragment>
        )
    }
}

Checkout.defaultProps = {
    quantity: 1,
    trackUserBehaviour,
}

export default Checkout
