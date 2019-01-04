import React from 'react'
import styled from 'styled-components'
import { validate } from 'email-validator'

import Section, { TopSection } from '../components/layout/Section'
import { InputButton } from '../components/buttons/Button'
import DefaultInput, { ErrorMessage } from '../components/form/Input'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H3, P } from '../components/text'
import Header from '../components/layout/Header'
import { WHITE, FONT_FAMILY } from '../config/styles'

import { Label as DefaultLabel } from '../components/text'

const Input = styled(DefaultInput)`
  background-color: ${WHITE};
`

const Label = styled(DefaultLabel)``

const ThanksTitle = styled(H3)`
  margin: 1em 0;
` //TODO: animate this later

class Unsubscribe extends React.Component {
  state = {
    email: '',
    formSubmited: false,
    emailValid: false,
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.setState({ formSubmited: true })
    this.triggerUnsubscribe()
  }

  triggerUnsubscribe = () => {
    console.log('email', this.state.email)
    fetch(
      `https://us-central1-reactjsacademy-react.cloudfunctions.net/helloWorld`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
        }),
      }
    )
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value }, this.validateEmail)
  }

  validateEmail = () => {
    let emailValid = validate(this.state.email)
    this.setState({ emailValid })
  }

  render() {
    const { email, emailValid } = this.state
    const isValid = emailValid && email.length > 0
    return (
      <React.Fragment>
        <Header
          fullHeight={false}
          titleLines={['Unsubscribe']}
          subtitle=""
          bgImg="training-event"
        />
        <Section>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <P>
                  Fill the form to receive an email to unsubscribe from our
                  mailing list.
                </P>
                <form onSubmit={this.handleFormSubmit}>
                  <Label htmlFor="email">
                    <P>Your email address:</P>
                  </Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={this.handleEmailChange}
                    name="email"
                    placeholder="name@email.com"
                  />
                  {email.length > 0 ? (
                    emailValid ? null : (
                      <ErrorMessage>must enter a valid email</ErrorMessage>
                    )
                  ) : null}

                  <InputButton cta value="Submit email" disabled={!isValid} />
                </form>
              </Col>
            </Row>
            {this.state.formSubmited ? (
              <Row>
                <Col>
                  <ThanksTitle>
                    To finish the process, check your Email.
                  </ThanksTitle>
                </Col>
              </Row>
            ) : null}
          </Grid>
        </Section>
      </React.Fragment>
    )
  }
}

export default Unsubscribe
