import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import DefaultLink from '../navigation/Link'
import { Button } from '../buttons'
import { H3 as DefaultH3, P as DefaultP } from '../text'
import { FieldInput, Form } from '../form'
import { Col, Row } from '../layout/Grid'
import { WHITE } from '../../config/styles'
import { getComponentAliaser } from '../utils/aliasComponent'
import { composeValidators, required, mustBeEmail } from '../form/validations'
import { triggerSubscribe } from '../../api'

const aliasInput = getComponentAliaser(FieldInput)
export const EmailInput = aliasInput()

export const THANKS_MESSAGE = 'thanks for submitting!'

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

export const ThanksTitle = styled(H3)`
  margin: 1em 0;
` //TODO: animate this later

class ContactForm extends Component {
  state = {
    formSubmited: false,
  }

  handleFormSubmit = ({ email }) => {
    this.setState({ formSubmited: true })
    this.props.triggerSubscribe({ email })
    this.props.history.push('/thanks-for-signing-up')
  }

  render() {
    const { addContactUsLink, simplified } = this.props
    const { formSubmited } = this.state
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
        <H3>Free learning resources</H3>
        <P>
          We share our learning resources{' '}
          <strong>
            directly from our{' '}
            <Link to="/curriculum">
              <strong>curriculum</strong>
            </Link>
          </strong>{' '}
          and we'd love for you to enjoy and learn from them!{' '}
        </P>
        <P>
          Signup and learn about cutting-edge React thinking plus the latest
          news on our courses...{' '}
        </P>
        <Row>
          <Col>
            <Form
              onSubmit={this.handleFormSubmit}
              render={({ handleSubmit, valid }) => {
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
                    <Button variant="primary" type="submit" disabled={!valid}>
                      Submit email
                    </Button>
                  </form>
                )
              }}
            />
            <P>
              We wont spam you as per our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </P>
          </Col>
        </Row>
        {formSubmited ? (
          <Row>
            <Col>
              <ThanksTitle>{THANKS_MESSAGE}</ThanksTitle>
            </Col>
          </Row>
        ) : null}

        <Unsubscribe>
          Looking to <Link to="/unsubscribe/">unsubscribe?</Link>
        </Unsubscribe>
      </React.Fragment>
    )
  }
}

ContactForm.defaultProps = {
  triggerSubscribe,
}

export default withRouter(ContactForm)
