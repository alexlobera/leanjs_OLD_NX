import React from 'react'
import PropTypes from 'prop-types'
import { Modal as BootstrapModal } from 'react-bootstrap'

import style from '../styles'

const PaymentConfirmation = ({ email }, { modal }) => (
  <div className="checkout-reactjsacademy">
    <BootstrapModal.Header closeButton>
      <h4 style={{ textAlign: 'center', color: style.defaultGreyColor, paddingTop: 0 }}>
        Payment Confirmation
      </h4>
    </BootstrapModal.Header>
    <BootstrapModal.Body>
      <h2 style={{ color: style.defaultGreyColor, paddingTop: 0 }}>
        The payment has been processed successfully.
      </h2>
      <p style={{ color: style.defaultGreyColor }}>
        We have sent you a confirmation email to
        {' '}
        {email}
        . Contact us at
        {' '}
        <a href="mailto:hello@reactjs.academy">hello@reactjs.academy</a>
        {' '}
        if you have any questions.
      </p>
      <p style={{ color: style.defaultGreyColor }}>
        Thanks for choosing us to upgrade your JavaScript skills.
      </p>
    </BootstrapModal.Body>
    <BootstrapModal.Footer>
      <button type="button" className="btn btn-default" onClick={modal.hideModal} name="closeInfo">
        Close
      </button>
    </BootstrapModal.Footer>
  </div>
)

PaymentConfirmation.contextTypes = {
  modal: PropTypes.object
}

PaymentConfirmation.propTypes = {
  email: PropTypes.string
}

PaymentConfirmation.defaultProps = {
  email: 'hello@reactjs.academy'
}

export default PaymentConfirmation
