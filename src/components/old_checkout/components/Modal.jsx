import React from 'react'
import PropTypes from 'prop-types'
import { Modal as BootstrapModal } from 'react-bootstrap'
import PaymentContainer from '../containers/PaymentContainer'
import style from '../styles'

class Modal extends React.Component {
  constructor () {
    super()

    this.state = {
      showModal: false,
      component: <PaymentContainer />,
      backdrop: true,
      shake: null
    }
  }

  getChildContext () {
    return {
      modal: {
        showModal: this.showModal,
        hideModal: this.hideModal,
        shake: this.shake
      }
    }
  }

  shake = () => {
    this.setState({ shake: 'shake-obj' })
    setTimeout(this.clearShake, 1500)
  };

  clearShake = () => {
    this.setState({ shake: null })
  };

  showModal = (component = <PaymentContainer />, backdrop = true) => {
    this.setState({ component, showModal: true, backdrop })
  };

  hideModal = () => {
    this.setState({ showModal: false })
  };

  render () {
    return (
      <div>
        <BootstrapModal
          backdrop={this.state.backdrop}
          show={this.state.showModal}
          onHide={this.hideModal}
          bsSize="small"
          className={this.state.shake}
        >
          {this.state.component}
        </BootstrapModal>
        {this.props.children}
        <div
          style={{
            ...style.stripe,
            display: this.state.showModal ? 'block' : 'none'
          }}
        >
          <img
            alt=""
            role="presentation"
            src="https://b.stripecdn.com/checkout/m/lib/../lib/images/badges/stripe@2x-c50df8e88c1a43f290497459c4f1779c.png"
            style={style.strypeBadgeImage}
          />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object
}

Modal.defaultProps = {
  children: {}
}

Modal.childContextTypes = {
  modal: PropTypes.object
}

export default Modal
