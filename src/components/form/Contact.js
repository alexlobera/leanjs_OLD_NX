import React, { useState } from 'react'
import { navigate } from 'gatsby'

import { WHITE } from '../../config/styles'
import Link from '../navigation/Link'
import { Button } from '../buttons'
import { H3, P } from '../text'
import { InputField, Form } from '.'
import { Col, Row } from '../layout/Grid'
import { getComponentAliaser } from '../utils/aliasComponent'
import { composeValidators, required, mustBeEmail } from './validations'
import { triggerSubscribe } from '../../api/rest'
import { Newsletter } from '../elements'

const aliasInput = getComponentAliaser(InputField)
const aliasH3 = getComponentAliaser(H3)

export const EmailInput = aliasInput()
export const ThanksTitle = aliasH3()

export const THANKS_MESSAGE = 'Thanks for submitting!'

const ContactForm = ({
  triggerSubscribe,
  addContactUsLink,
  simplified,
  variant = 'primary',
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = ({ email }) => {
    setFormSubmitted(prevState => !prevState)
    triggerSubscribe({ email })
    navigate('/thanks-for-signing-up')
  }

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
            <Link
              to="mailto:hello@reactgraphql.academy?subject=Course%20Query&body=Hi%20RGA%20team!"
              className="footer-contact-us-mailto"
            >
              hello@reactgraphql.academy
            </Link>
            .{' '}
          </P>
          <P>You can call us during working hours on: +44 20 8123 8184</P>
          <P>
            Otherwise, you can contact us socially on{' '}
            <Link
              to="https://twitter.com/reactgqlacademy"
              className="footer-contact-us-links"
            >
              Twitter
            </Link>
            ,{' '}
            <Link
              to="https://www.instagram.com/reactgraphqlacademy/"
              className="footer-contact-us-links"
            >
              Instagram
            </Link>{' '}
            and{' '}
            <Link
              to="https://www.facebook.com/reactgraphqlacademy/"
              className="footer-contact-us-links"
            >
              Facebook
            </Link>{' '}
            or visit our{' '}
            <Link to="/about-us" className="footer-contact-us-links">
              About Us page
            </Link>{' '}
            and directly contact one of our coaches.{' '}
          </P>
        </React.Fragment>
      )}
      <Newsletter showCTA={false} />
      <P>
        Signup and learn about cutting-edge React and GraphQL plus the latest
        news on our courses...{' '}
      </P>
      <Row>
        <Col>
          <Form
            onSubmit={handleFormSubmit}
            render={({ handleSubmit, valid, formSubmitted }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  style={formSubmitted ? { display: 'none' } : {}}
                >
                  <EmailInput
                    validate={composeValidators(required, mustBeEmail)}
                    label="Your email address:"
                    name="email"
                    placeholder="eg. steve@jobs.com"
                    color={WHITE}
                  />
                  <Button
                    variant={variant || 'primary'}
                    type="submit"
                    disabled={!valid}
                    className="newsletter-submit-button"
                  >
                    Submit email
                  </Button>
                </form>
              )
            }}
          />
          <P>
            We won't spam you as per our{' '}
            <Link className="footer-privacy-policy" to="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </P>
        </Col>
      </Row>
      {formSubmitted ? (
        <Row>
          <Col>
            <ThanksTitle my={3}>{THANKS_MESSAGE}</ThanksTitle>
          </Col>
        </Row>
      ) : null}

      <P pt={3}>
        Looking to{' '}
        <Link to="/unsubscribe/" className="footer-unsubscribe">
          unsubscribe?
        </Link>
      </P>
    </React.Fragment>
  )
}

ContactForm.defaultProps = {
  triggerSubscribe,
}

export default ContactForm
