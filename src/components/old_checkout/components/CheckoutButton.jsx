import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'

import PaymentContainer from '../containers/PaymentContainer'

import trackUserBehaviour, {
  BUY_BUTTON_CLICK,
} from '../../utils/trackUserBehaviour'

class CheckoutButton extends React.Component {
  showModalCourse = () => {
    const { course, quantity } = this.props
    const { modal } = this.context

    modal.showModal(<PaymentContainer quantity={quantity} course={course} />)
  }

  render() {
    return (
      <Button
        children={this.props.label || 'Buy now'}
        cta
        onClick={() => {
          this.showModalCourse()
          trackUserBehaviour({
            event: BUY_BUTTON_CLICK,
          })
        }}
        buttonStyle={this.props.buttonStyle}
      />
    )
  }
}

CheckoutButton.propTypes = {
  course: PropTypes.object.isRequired,
  checkoutBtnText: PropTypes.string,
}

CheckoutButton.contextTypes = {
  modal: PropTypes.object,
}

export default CheckoutButton
