import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button } from '../buttons'
import { Span } from '../text'
import { GREY2, FONT_FAMILY } from '../../config/styles'
import formatCurrencyPrice from '../utils/currency'
import trackUserBehaviour, {
    BUY_BUTTON_CLICK,
} from '../utils/trackUserBehaviour'
import CheckoutForm from './CheckoutForm'

const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`

const Price = styled.span`
  ${FONT_FAMILY} font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: ${GREY2};
  display: block;
`

// const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: auto;
//   float: left;
// `

const PriceAndDiscount = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom:5px;
`

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            quantity: 1,
            maxSeats: 30,
        }
    }

    addCourse = () => {
        this.setState({
            quantity: this.state.quantity + 1 > 30 ? 30 : this.state.quantity + 1,
        })
    }

    toggleIsOpen = () => {
        trackUserBehaviour({
            event: BUY_BUTTON_CLICK,
        })
        this.setState({ isOpen: !this.state.isOpen })
    }

    remCourse = () => {
        this.setState({
            quantity: this.state.quantity - 1 <= 0 ? 1 : this.state.quantity - 1,
        })
    }

    inputCourse = event => {
        let value = event.target.value

        if (!isNaN(value)) {
            value = parseInt(value, 10)

            if (value > 0 && value <= 30) {
                this.setState({ quantity: value })
            } else {
                this.setState({
                    quantity: value < 1 ? 1 : 30,
                })
            }
        }
    }

    render() {
        const { price, discountPrice, currency = 'gbp' } = this.props
        const { quantity, isOpen } = this.state
        const totalPrice = price * quantity * 1.2
        const totalDiscountPrice = discountPrice && discountPrice * quantity * 1.2
        // The class `gtm-purchase-box` is needed for Tracking purposes,
        // please DON'T DELETE IT!!
        return (
            <Fragment>
                {isOpen ? (
                    <PurchaseWrapper className="gtm-purchase-box">
                        <Fragment>
                            {totalDiscountPrice ? (
                                <PriceAndDiscount>
                                    <Span lineThrough>{formatCurrencyPrice(currency, totalPrice)}</Span>
                                    <Price>&nbsp;{formatCurrencyPrice(currency, totalDiscountPrice)}</Price>
                                </PriceAndDiscount>
                            ) : (
                                    <Price>{formatCurrencyPrice(currency, totalPrice)}</Price>
                                )}
                            <Button
                                right
                                children="Buy now"
                                cta
                                onClick={this.toggleIsOpen}
                            />
                        </Fragment>

                        {/* <ButtonWrapper> */}
                        {/* <CheckoutButton course={course} quantity={quantity}>
                        Buy now
          </CheckoutButton> */}
                        {/* <QuantityActions>
                        <QuantityButton onClick={this.remCourse} children="-" />
                        <Quantity>{this.state.quantity}</Quantity>
                        <QuantityButton onClick={this.addCourse} children="+" />
                    </QuantityActions> */}
                        {/* </ButtonWrapper>*/}
                    </PurchaseWrapper>
                ) : <CheckoutForm />}
            </Fragment>
        )
    }
}

Checkout.defaultProps = {
    quantity: 1,
}

export default Checkout
