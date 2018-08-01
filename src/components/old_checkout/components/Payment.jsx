import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  FormControl,
  DropdownButton,
  MenuItem,
  Modal as BootstrapModal,
  InputGroup,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import Helmet from 'react-helmet'
import PaymentLib from 'payment'
import CardReactFormContainer from 'card-react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import { getMonthFromCardDate, getYearFromCardDate } from '../utils/cardDate'
import isPhone from '../utils/phone'
import style from '../styles'
import { VAT_RATE, vatCountries } from '../config'
import Spinner from './Spinner'
import trackUserBehaviour, {
  CHECKOUT_OPENED_MODAL,
  VOUCHER_VALIDATE,
  CHECKOUT_PAYMENT_VALIDATE_ERROR,
} from '../../utils/trackUserBehaviour'
import getCurrencySymbol from '../utils/currency'

class Payment extends React.Component {
  constructor(props) {
    super(props)
    this.voucher = null
    this.cardNumber = null
    this.email = null
    this.cvc = null
    this.expirationDate = null
    this.voucher = null
    this.cardholderName = null
    this.companyName = { value: null }

    this.state = {
      numberIsValid: true,
      cvcIsValid: true,
      expirationDateIsValid: true,
      emailIsValid: true,
      companyNameIsValid: true,
      companyVATIsValid: true,
      vatRate: VAT_RATE,
      vatCountry: null,
      vatNumber: null,
      displayCompanyDetails: false,
    }
  }

  componentDidMount() {
    trackUserBehaviour({
      event: CHECKOUT_OPENED_MODAL,
    })

    if (this.voucher.value) {
      this.props.validateVoucher(this.voucher.value)
    }
    if (this.state.displayCompanyDetails) {
      this.validateCompanyVAT(this.state.vatCountry, this.state.vatNumber)
    }
  }

  validateEmail = email => {
    const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailIsValid = reEmail.test(email)
    this.setState({ emailIsValid })
    return emailIsValid
  }

  validateCardNumber = number => {
    const numberIsValid = PaymentLib.fns.validateCardNumber(number)
    this.setState({ numberIsValid })
    if (isPhone()) {
      this.cardNumber.value = PaymentLib.fns.formatCardNumber(number)
    }
    return numberIsValid
  }

  validateCvc = cvc => {
    const cvcIsValid = PaymentLib.fns.validateCardCVC(cvc)
    this.setState({ cvcIsValid })
    return cvcIsValid
  }

  validateExpirationDate = expirationDate => {
    const expirationDateIsValid = PaymentLib.fns.validateCardExpiry(
      getMonthFromCardDate(expirationDate),
      getYearFromCardDate(expirationDate)
    )
    this.setState({ expirationDateIsValid })
    return expirationDateIsValid
  }

  validateCompanyName = name => {
    const companyNameIsValid = name !== ''
    this.setState({ companyNameIsValid })
    return companyNameIsValid
  }

  validateCompanyVAT = (vatCountry, vatNumber) => {
    this.setState({ vatNumber, vatCountry })
    if (vatCountry !== '--' && vatNumber && vatNumber.length > 4) {
      return this.props.client
        .query({
          query: gql`
            query isVatNumberValid($countryCode: String!, $vatNumber: String!) {
              isVatNumberValid(countryCode: $countryCode, vatNumber: $vatNumber)
            }
          `,
          variables: { countryCode: vatCountry, vatNumber },
        })
        .then(({ data = {} }) => {
          const { isVatNumberValid } = data

          this.vatRate(vatCountry, isVatNumberValid)
          this.setState({ companyVATIsValid: isVatNumberValid })

          return isVatNumberValid
        })
    }
    this.vatRate(vatCountry, false)
    this.setState({ companyVATIsValid: false })
    return Promise.resolve(false)
  }

  vatRate = (country, isValid) => {
    this.setState({
      vatRate: isValid && country.toUpperCase() !== 'GB' ? 0 : 20,
    })
  }

  pay = () => {
    const paymentData = {
      voucher: this.voucher.value,
      cardholderName: this.cardholderName.value,
      companyName: this.state.displayCompanyDetails
        ? this.companyName.value
        : '',
      vatNumber: this.state.vatNumber,
      vatCountry: this.state.vatCountry,
      cardNumber: this.cardNumber.value,
      expirationDate: this.expirationDate.value,
      cvc: this.cvc.value,
      email: this.email.value,
    }
    const isEmailValid = this.validateEmail(paymentData.email)
    const isNumberValid = this.validateCardNumber(paymentData.cardNumber)
    const isCvcValid = this.validateCvc(paymentData.cvc)
    const isExpirationDateValid = this.validateExpirationDate(
      paymentData.expirationDate
    )
    const isCompanyNameValid = this.state.displayCompanyDetails
      ? this.validateCompanyName(paymentData.companyName)
      : true
    const isCompanyVATValidPromise = this.state.displayCompanyDetails
      ? this.validateCompanyVAT(paymentData.vatCountry, paymentData.vatNumber)
      : Promise.resolve(true)

    isCompanyVATValidPromise.then(isCompanyVATValid => {
      if (
        isEmailValid &&
        isNumberValid &&
        isCvcValid &&
        isExpirationDateValid &&
        isCompanyNameValid &&
        isCompanyVATValid
      ) {
        this.props.pay(paymentData)
      } else {
        trackUserBehaviour({
          event: CHECKOUT_PAYMENT_VALIDATE_ERROR,
          payload: {
            isEmailValid,
            isNumberValid,
            isCvcValid,
            isExpirationDateValid,
            isCompanyNameValid,
            isCompanyVATValid,
          },
        })
        this.context.modal.shake()
      }
    })
  }

  render() {
    let voucherGroupCssClass = ''
    if (this.props.isVoucherValidated === true) {
      voucherGroupCssClass = 'has-success has-feedback'
    } else if (this.props.isVoucherValidated === false) {
      voucherGroupCssClass = 'has-error'
    }

    let totalPrice =
      this.props.priceWithDiscount || this.props.price * this.props.quantity
    totalPrice *= 1 + this.state.vatRate / 100

    const div = props => <div>{props.children}</div>

    return (
      <div className="checkout-reactjsacademy">
        <Helmet
          script={[
            {
              type: 'text/javascript',
              src: 'https://js.stripe.com/v2/',
              async: true,
            },
          ]}
        />
        <BootstrapModal.Header closeButton>
          <p
            style={{
              textAlign: 'center',
              margin: 0,
              color: style.defaultGreyColor,
              fontSize: '14px',
            }}
          >
            {this.props.title}
          </p>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <CardReactFormContainer
            container="card-wrapper"
            width={275}
            formInputsNames={{
              number: 'CCnumber',
              expiry: 'CCexpiry',
              cvc: 'CCcvc',
              name: 'CCname',
            }}
            classes={{
              valid: 'valid-input',
              invalid: 'invalid-input',
            }}
          >
            <form>
              <FormGroup className={voucherGroupCssClass}>
                <InputGroup>
                  <FormControl
                    disabled={this.props.isVoucherValidated}
                    type="text"
                    placeholder="Voucher (optional)"
                    inputRef={node => {
                      this.voucher = node
                    }}
                  />
                  {this.props.isVoucherValidated === true ? (
                    <span className="input-group-addon">valid</span>
                  ) : (
                    <InputGroup.Button>
                      <Button
                        onClick={() => {
                          trackUserBehaviour({
                            event: VOUCHER_VALIDATE,
                            payload: { voucher: this.voucher.value },
                          })
                          this.props.validateVoucher(this.voucher.value)
                        }}
                        bsStyle="info"
                        disabled={this.props.isVoucherInProgress}
                      >
                        {this.props.isVoucherInProgress ? (
                          <Spinner />
                        ) : (
                          <span>Validate</span>
                        )}
                      </Button>
                    </InputGroup.Button>
                  )}
                </InputGroup>
              </FormGroup>
              <FormGroup className={this.state.emailIsValid ? '' : 'has-error'}>
                <FormControl
                  type="email"
                  onChange={e => {
                    this.validateEmail(e.target.value)
                  }}
                  placeholder="Enter your email"
                  inputRef={node => {
                    this.email = node
                  }}
                />
              </FormGroup>
              {!this.state.displayCompanyDetails ? (
                <Row className="companyDetRow">
                  <Col sm={12} style={style.bootstrap.col}>
                    <small>
                      <button
                        type="button"
                        className="company-details"
                        onClick={() => {
                          this.setState({ displayCompanyDetails: true })
                        }}
                      >
                        Add Company Details
                      </button>
                    </small>
                  </Col>
                </Row>
              ) : (
                [
                  <FormGroup
                    key="companyNameGroup"
                    className={this.state.companyNameIsValid ? '' : 'has-error'}
                  >
                    <FormControl
                      type="text"
                      placeholder="Company name"
                      name="CompanyName"
                      value={this.companyName.value}
                      inputRef={node => {
                        this.companyName = node
                      }}
                      onChange={e => {
                        this.validateCompanyName(e.target.value)
                      }}
                    />
                  </FormGroup>,
                  <Row style={style.bootstrap.row} key="companyVATGroup">
                    <Col xs={4} style={style.bootstrap.col}>
                      <FormGroup
                        className={
                          this.state.companyVATIsValid ? '' : 'has-error'
                        }
                      >
                        <DropdownButton
                          className={
                            this.state.companyVATIsValid ? '' : 'has-error'
                          }
                          title={this.state.vatCountry}
                          key="countryVatData"
                          id="countryVatData"
                          onSelect={value => {
                            this.validateCompanyVAT(value, this.state.vatNumber)
                          }}
                        >
                          {vatCountries.map(country => (
                            <MenuItem
                              key={country.code}
                              eventKey={country.code}
                            >
                              {`${country.code} - ${country.name}`}
                            </MenuItem>
                          ))}
                        </DropdownButton>
                      </FormGroup>
                    </Col>
                    <Col xs={8} style={style.bootstrap.col}>
                      <FormGroup
                        className={
                          this.state.companyVATIsValid ? '' : 'has-error'
                        }
                      >
                        <FormControl
                          type="text"
                          placeholder="VAT number"
                          name="VatNumber"
                          value={this.state.vatNumber}
                          onChange={e => {
                            this.validateCompanyVAT(
                              this.state.vatCountry,
                              e.target.value
                            )
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>,
                ]
              )}
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Cardholder’s name"
                  name="CCname"
                  inputRef={node => {
                    this.cardholderName = node
                  }}
                />
              </FormGroup>
              <FormGroup
                id="cardNumber"
                className={this.state.numberIsValid ? '' : 'has-error'}
              >
                <FormControl
                  type="tel"
                  placeholder="Card number"
                  name="CCnumber"
                  inputMode="numeric"
                  onChange={e => {
                    this.validateCardNumber(e.target.value)
                  }}
                  onKeyPress={e => {
                    this.validateCardNumber(e.target.value)
                  }}
                  autoComplete="cc-number"
                  autoCorrect="no"
                  autoCapitalize="no"
                  spellCheck="no"
                  inputRef={node => {
                    this.cardNumber = node
                  }}
                />
              </FormGroup>

              <Row style={style.bootstrap.row}>
                <Col xs={7} style={style.bootstrap.col} />
                <Col xs={5} style={style.bootstrap.col}>
                  <InputGroup>
                    <FormControl
                      className={
                        this.state.expirationDateIsValid ? '' : 'has-error'
                      }
                      style={{ width: '50%' }}
                      name="CCexpiry"
                      maxLength="9"
                      type="text"
                      placeholder="MM / YY"
                      onChange={e => {
                        this.validateExpirationDate(e.target.value)
                      }}
                      inputRef={node => {
                        this.expirationDate = node
                      }}
                    />
                    <FormControl
                      className={this.state.cvcIsValid ? '' : 'has-error'}
                      name="CCcvc"
                      type="text"
                      placeholder="CVC"
                      style={{ width: '50%' }}
                      onChange={e => {
                        this.validateCvc(e.target.value)
                      }}
                      inputRef={node => {
                        this.cvc = node
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <p
                style={{
                  color: style.defaultGreyColor,
                  paddingTop: '20px',
                  fontSize: '14px',
                }}
              >
                {`${
                  this.props.quantity > 1 ? `${this.props.quantity} x ` : ''
                } ${getCurrencySymbol(
                  this.props.currency,
                  this.props.price
                )}`}{' '}
                {this.props.discount
                  ? ` - ${getCurrencySymbol(
                      this.props.currency,
                      this.props.discount
                    )} `
                  : ' '}
                + {this.state.vatRate}% VAT ={' '}
                {getCurrencySymbol(this.props.currency, totalPrice)}
              </p>
              {this.props.errorMessage ? (
                <div
                  className="alert alert-danger"
                  style={{ fontSize: '15px' }}
                >
                  We could not process your credit card. If the problem persists
                  please contact{' '}
                  <a href="mailto:hello@reactjs.academy">
                    hello@reactjs.academy
                  </a>
                </div>
              ) : (
                ''
              )}
              <FormGroup>
                <Button
                  onClick={this.pay}
                  disabled={this.props.isPaymentInProgress}
                  bsStyle="info"
                  bsSize="large"
                  block
                >
                  {this.props.isPaymentInProgress ? (
                    <Spinner />
                  ) : (
                    <span>
                      Pay {getCurrencySymbol(this.props.currency, totalPrice)}
                    </span>
                  )}
                </Button>
              </FormGroup>
            </form>
          </CardReactFormContainer>
          <div
            id="card-wrapper"
            style={{
              ...style.cardWrapper,
              display: isPhone() ? 'none' : 'block',
            }}
          />
        </BootstrapModal.Body>
      </div>
    )
  }
}

Payment.propTypes = {
  urlParams: PropTypes.object,
  pay: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  validateVoucher: PropTypes.func.isRequired,
  isVoucherInProgress: PropTypes.bool,
  isPaymentInProgress: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isVoucherValidated: PropTypes.bool,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceWithDiscount: PropTypes.number,
  discount: PropTypes.number,
  errorMessage: PropTypes.bool,
}

Payment.defaultProps = {
  urlParams: {},
  isVoucherInProgress: false,
  isPaymentInProgress: false,
  isVoucherValidated: false,
  priceWithDiscount: 0,
  discount: 0,
  errorMessage: false,
}

Payment.contextTypes = {
  modal: PropTypes.object,
}

export default withApollo(Payment)
