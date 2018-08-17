import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../buttons'

import trackUserBehaviour, {
    BUY_BUTTON_CLICK,
} from '../utils/trackUserBehaviour'

class CheckoutButton extends React.Component {
    showCheckout = () => {
        trackUserBehaviour({
            event: BUY_BUTTON_CLICK,
        })
        const { course } = this.props
    }

    render() {
        return (
            <Button
                {...this.props}
                children="Buy now"
                cta
                onClick={this.showCheckout}
            />
        )
    }
}

CheckoutButton.propTypes = {
    course: PropTypes.object.isRequired,
}

export default CheckoutButton
