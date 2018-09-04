import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Form } from 'react-final-form'
import Helmet from 'react-helmet'

import { Span, P, H4 } from '../../text'
import { Button, LinkButton } from '../../buttons'
import { FormGroup, FieldInput, Input } from '../../form'
import {
  composeValidators,
  mustBeEuVat,
  required,
  mustBeCvc,
  mustBeEmail,
  mustBeCardNumber,
  mustBeCardDate,
} from '../../form/validations'
import { Row, Col } from '../../layout/Grid'
import formatPrice from '../../utils/currency'
import { Price } from '../'
import { SCREEN_XS_MAX, SCREEN_SM_MIN } from '../../utils'
import { WHITE, BROWN, GREY, FONT_FAMILY } from '../../../config/styles'
import { Link } from '../../navigation'
import { Ribbon, Alert } from '../../elements'
import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from '../../utils/card'

// These aliases enable the relevant elements to be selected by Enzyme for testing
// Have caution when updating these names as you will then need to update the tests as well.
export const ShowVoucherButton = props => <Link {...props} />
export const ValidateVoucherButton = props => <LinkButton {...props} />
export const TotalPayablePrice = props => <Price {...props} />
export const VoucherInput = props => <Input {...props} />
export const NameInput = props => <FieldInput {...props} />
export const EmailInput = props => <FieldInput {...props} />
export const CCNameInput = props => <FieldInput {...props} />
export const CCNumberInput = props => <FieldInput {...props} />
export const CCExpiryInput = props => <FieldInput {...props} />
export const CCCVCInput = props => <FieldInput {...props} />
export const SubmitPaymentFormButton = props => <Button {...props} />

const QuantityActions = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 8px 0;
`
const QuantityButton = styled(Button)`
  font-size: 20px !important;
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-right: 18px !important;
    padding-left: 18px !important;
  }
`

const Quantity = styled.span`
  ${FONT_FAMILY} align-self: center;
  text-align: center;
  font-size: 22px;
  display: inline-block;
  border-bottom: 1px solid ${BROWN};
  border-top: 1px solid ${BROWN};
  padding-top: 11px;
  padding-bottom: 12px;
  background-color: ${WHITE};
  @media (max-width: ${SCREEN_XS_MAX}) {
    width: 36px;
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    width: 48px;
  }
`

const TotalPrice = styled(Span)`
  display: inline-block;
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-bottom: 25px;
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding-bottom: 14px;
  }
`

const RowNumTickets = styled.div`
  display: flex;
`

const RowBuy = styled.div`
  padding: 36px 0 0;
`

const CheckoutH4 = styled(H4)`
  border-bottom: 1px solid ${GREY};
  padding-bottom: 6px;
  margin: 18px 0 9px;
`

const RibbonBottomContainer = styled.div`
  position:relative;
    > div {
        @media (min-width: ${SCREEN_SM_MIN}) {
            right: -35px !important;
        }
        @media (max-width: ${SCREEN_XS_MAX}) {
            right: -10px !important;
        }
    }
  }
`

class CheckoutForm extends React.Component {
  state = {
    isVoucherDisplayed: false,
    isCompanyDetailsDisplayed: false,
  }

  toggleDisplayVoucherSection = () => {
    this.setState({ isVoucherDisplayed: !this.state.isVoucherDisplayed })
  }

  toggleDisplayCompanyDetails = () => {
    this.setState({
      isCompanyDetailsDisplayed: !this.state.isCompanyDetailsDisplayed,
    })
  }

  render() {
    const {
      quantity,
      removeCourse,
      addCourse,
      pricePerQuantity,
      discountPricePerQuantity,
      discountVoucher,
      currency,
      vatRate,
      pay,
      isVoucherValidationInProgress,
      validateVoucher,
      vouchedPricePerQuantity,
      voucher,
      onVoucherChange,
      isVoucherValid,
      companyVat,
      isPaymentInProgress,
      paymentErrorMessage,
    } = this.props
    const { isVoucherDisplayed, isCompanyDetailsDisplayed } = this.state
    const currentTicketPrice = discountPricePerQuantity || pricePerQuantity
    const ticketVat = !vatRate
      ? 0
      : vouchedPricePerQuantity
        ? vouchedPricePerQuantity - vouchedPricePerQuantity * vatRate
        : currentTicketPrice - currentTicketPrice * vatRate


    return (
      <Fragment>
        <Helmet
          script={[
            {
              type: 'text/javascript',
              src: 'https://js.stripe.com/v2/',
              async: true,
            },
          ]}
        />
        <Row>
          <Col xs={6}>
            <Span>Number of tickets:</Span>
            <RowNumTickets>
              <QuantityActions>
                <QuantityButton onClick={removeCourse} children="-" />
                <Quantity children={quantity} />
                <QuantityButton onClick={addCourse} children="+" />
              </QuantityActions>
            </RowNumTickets>
          </Col>
          <Col xs={6}>
            <TotalPrice>Total price:</TotalPrice>
            <P>
              <Price marginRight={8}>
                {formatPrice(currency, currentTicketPrice, vatRate)}
              </Price>
              {discountPricePerQuantity ? (
                <Span lineThrough>
                  {formatPrice(currency, pricePerQuantity, vatRate)}
                </Span>
              ) : null}
            </P>
          </Col>
        </Row>
        <Form
          onSubmit={pay}
          render={({
            handleSubmit,
            submitting,
            submitFailed,
            valid,
            values,
          }) => {
            return (
              <form noValidate onSubmit={handleSubmit}>
                <CheckoutH4>Personal details</CheckoutH4>
                <NameInput
                  validate={required}
                  label="Your name:"
                  name="name"
                  placeholder="eg. Steve Jobs"
                />
                <EmailInput
                  validate={composeValidators(required, mustBeEmail)}
                  label="Your email address:"
                  name="email"
                  placeholder="eg. steve@jobs.com"
                />
                {isCompanyDetailsDisplayed ? (
                  <Fragment>
                    <FormGroup>
                      <Link onClick={this.toggleDisplayCompanyDetails}>
                        - Hide company details
                      </Link>
                    </FormGroup>
                    <FieldInput
                      label="Company name:"
                      name="companyName"
                      placeholder="eg. Acme Inc"
                      validate={required}
                    />
                    <FieldInput
                      label="EU VAT number:"
                      name="companyVat"
                      placeholder="eg. GB256547555"
                      validate={composeValidators(required, mustBeEuVat)}
                      onChange={companyVat.resetVatRate}
                    />
                    <LinkButton
                      block
                      disabled={
                        companyVat.isViesValid ||
                        companyVat.isViesValidationInProgress
                      }
                      onClick={() => companyVat.validateVies(values.companyVat)}
                    >
                      {companyVat.isViesValidationInProgress
                        ? '...'
                        : companyVat.isViesValid
                          ? 'Validated'
                          : 'Validate EU VAT and update taxes'}
                    </LinkButton>
                  </Fragment>
                ) : (
                    <FormGroup>
                      <Link onClick={this.toggleDisplayCompanyDetails}>
                        + Add company details
                    </Link>
                    </FormGroup>
                  )}
                <CheckoutH4>Payment details</CheckoutH4>
                <CCNameInput
                  label="Name on card:"
                  name="CCname"
                  placeholder="eg. Steve Jobs"
                  validate={required}
                />
                <CCNumberInput
                  label="Card number:"
                  name="CCnumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  autoComplete="cc-number"
                  autoCorrect="no"
                  autoCapitalize="no"
                  spellCheck="no"
                  validate={composeValidators(required, mustBeCardNumber)}
                  format={formatCreditCardNumber}
                />
                <Row>
                  <Col xs={6}>
                    <CCExpiryInput
                      label="Expiry date:"
                      name="CCexpiry"
                      placeholder="MM / YY"
                      maxLength="9"
                      format={formatExpirationDate}
                      validate={composeValidators(required, mustBeCardDate)}
                    />
                  </Col>
                  <Col xs={6}>
                    <CCCVCInput
                      label="CVC:"
                      name="CCcvc"
                      placeholder="XXX"
                      maxLength="6"
                      format={formatCVC}
                      validate={composeValidators(required, mustBeCvc)}
                    />
                  </Col>
                </Row>
                {isVoucherDisplayed ? (
                  <Fragment>
                    <FormGroup>
                      <Link onClick={this.toggleDisplayVoucherSection}>
                        - Hide discount voucher
                      </Link>
                    </FormGroup>
                    <VoucherInput
                      label="Discount voucher:"
                      name="voucher"
                      placeholder="Type your code here"
                      onChange={onVoucherChange}
                      value={voucher}
                      meta={{
                        pristine: !(isVoucherValid === false),
                        invalid: !isVoucherValid,
                        error:
                          isVoucherValid === false
                            ? 'The voucher is not valid'
                            : null,
                      }}
                    />
                    <ValidateVoucherButton
                      block
                      disabled={isVoucherValid || isVoucherValidationInProgress}
                      onClick={() => validateVoucher(voucher)}
                    >
                      {isVoucherValidationInProgress
                        ? '...'
                        : isVoucherValid
                          ? 'Valid Voucher'
                          : 'Validate voucher'}
                    </ValidateVoucherButton>
                  </Fragment>
                ) : (
                    <FormGroup>
                      <ShowVoucherButton onClick={this.toggleDisplayVoucherSection}>
                        + Add discount voucher
                    </ShowVoucherButton>
                    </FormGroup>
                  )}
                <RibbonBottomContainer>
                  <CheckoutH4>Pricing</CheckoutH4>
                  {discountPricePerQuantity ? (
                    <Ribbon top={'-5'}>
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
                </RibbonBottomContainer>
                <Row>
                  <Col xs={5}>
                    <Span>Training cost:</Span>
                  </Col>
                  <Col xs={7}>
                    <Span>{formatPrice(currency, currentTicketPrice, 0)}</Span>
                  </Col>
                </Row>
                {discountVoucher ? (
                  <Row>
                    <Col xs={5}>
                      <P>Discount:</P>
                    </Col>
                    <Col xs={7}>
                      <Span>-{formatPrice(currency, discountVoucher, 0)}</Span>
                    </Col>
                  </Row>
                ) : null}
                <Row>
                  <Col xs={5}>
                    <Span>VAT:</Span>
                  </Col>
                  <Col xs={7}>
                    <Span>
                      +{formatPrice(currency, Math.abs(ticketVat), 0)}
                    </Span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={5} end>
                    <Span>Total payable:</Span>
                  </Col>
                  <Col xs={7}>
                    <TotalPayablePrice>
                      {formatPrice(
                        currency,
                        vouchedPricePerQuantity || currentTicketPrice,
                        vatRate
                      )}
                    </TotalPayablePrice>
                  </Col>
                </Row>
                <RowBuy>
                  <P sm>
                    By purchasing a training, you agree to our{' '}
                    <Link target="_blank" to="/terms-of-service">
                      Terms of Service
                    </Link>{' '}
                    &{' '}
                    <Link target="_blank" to="/code-of-conduct">
                      Code of conduct
                    </Link>
                  </P>
                  {submitFailed && !valid ? (
                    <Alert danger>Please fix the errors above</Alert>
                  ) : null}

                  {paymentErrorMessage ? (
                    <Alert danger>
                      There was an error processing your credit card. Please
                      check your credit card with your bank. If the problem
                      persists contact{' '}
                      <Link to="mailto:hello@reactjs.academy">
                        hello@reactjs.academy
                      </Link>
                    </Alert>
                  ) : null}
                  <SubmitPaymentFormButton
                    type="submit"
                    cta
                    block
                    disabled={submitting || isPaymentInProgress}
                  >
                    Buy now >>
                  </SubmitPaymentFormButton>
                </RowBuy>
              </form>
            )
          }}
        />
      </Fragment>
    )
  }
}

export default CheckoutForm
