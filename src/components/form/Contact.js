import React, { Component } from 'react'
import styled from 'styled-components'

import DefaultLink from '../navigation/Link'
import { Button } from '../buttons'
import {
  H3 as DefaultH3,
  P as DefaultP,
} from '../text'
import { FieldInput, Form } from '../form'
import { Col, Row } from '../layout/Grid'
import { WHITE } from '../../config/styles'
import { getComponentAliaser } from '../utils/aliasComponent'
import { composeValidators, required, mustBeEmail } from '../form/validations'

const aliasInput = getComponentAliaser(FieldInput)
const EmailInput = aliasInput()

const H3 = styled(DefaultH3)`
  color: ${WHITE};
`

const P = styled(DefaultP)`
  color: ${WHITE};
`
const Link = styled(DefaultLink)`
  color: ${WHITE};
`

const Unsubscribe = styled(P)`
  padding-top: 25px;
`

const ThanksTitle = styled(H3)`
  margin: 1em 0;
` //TODO: animate this later

class ContactForm extends Component {
  state = {
    email: '',
    formSubmited: false,
    emailValid: false,
  }
  handleFormSubmit = ({ email }) => {
    this.setState({ formSubmited: true })
    window &&
      window.Autopilot &&
      window.Autopilot.run('associate', {
        _simpleAssociate: true,
        Email: email,
        custom: {
          'string--From--Path': window.location.pathname,
        },
      })
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('event', 'conversion', {
      send_to: 'AW-877316317/d5TtCOmF_IoBEN2Rq6ID',
    })
  }

  render() {
    const { addContactUsLink, simplified } = this.props

    return (
      <React.Fragment>
        {!simplified && (
          <React.Fragment>
            <H3>
              {addContactUsLink ? <a name="contact-us" /> : null}
              Contact us
            </H3>
            <P>
              The best way to contact us is by emailing us at{' '}
              <Link to="mailto:hello@reactjs.academy">
                hello@reactjs.academy
              </Link>
              .{' '}
            </P>
            <P>
              Otherwise, you can contact us socially on{' '}
              <Link to="https://twitter.com/reactjsacademy">Twitter</Link>,{' '}
              <Link to="https://www.instagram.com/reactjsacademy/">
                Instagram
              </Link>{' '}
              and{' '}
              <Link to="https://www.facebook.com/reactjsacademy/">
                Facebook
              </Link>{' '}
              or visit our <Link to="/about-us">About Us page</Link> and
              directly contact one of our coaches.{' '}
            </P>
          </React.Fragment>
        )}
        <a name="newsletter" />
        <H3>Signup to our newsletter</H3>
        <P>
          Enter your email below and we'll email you with our{' '}
          <strong>latest training and free learning resources</strong>. And no,
          we don't spam you with anything else, as per our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </P>
        <Row>
          <Col>
            <Form
              onSubmit={this.handleFormSubmit}
              render={({
                handleSubmit,
                valid,
              }) => {
                return (
                  <form
                    onSubmit={handleSubmit}
                    style={this.state.formSubmited ? { display: 'none' } : {}}
                  >
                    <EmailInput
                      validate={composeValidators(required, mustBeEmail)}
                      label="Your email address:"
                      name="email"
                      placeholder="eg. steve@jobs.com"
                    />
                    <Button
                      cta
                      type="submit"
                      disabled={!valid}
                    >Submit email</Button>
                  </form>
                )
              }}
            />
          </Col>
        </Row>
        {this.state.formSubmited ? (
          <Row>
            <Col>
              <ThanksTitle>thanks for submitting!</ThanksTitle>
            </Col>
          </Row>
        ) : null}
        <Unsubscribe>
          Looking to unsubscribe? go to the{' '}
          <Link to="/unsubscribe/">unsubscribe page</Link>
        </Unsubscribe>
      </React.Fragment>
    )
  }
}

export default ContactForm
