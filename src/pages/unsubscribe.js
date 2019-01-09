import React from 'react'
import styled from 'styled-components'
import { triggerUnsubscribe } from '../api'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H3, P } from '../components/text'
import Header from '../components/layout/Header'
import { FieldInput, Form } from '../components/form'
import { Button } from '../components/buttons'
import { getComponentAliaser } from '../components/utils/aliasComponent'
import { composeValidators, required, mustBeEmail } from '../components/form/validations'

const aliasInput = getComponentAliaser(FieldInput)
export const EmailInput = aliasInput()

export const ThanksTitle = styled(H3)`
  margin: 1em 0;
` //TODO: animate this later

export const THANKS_MESSAGE = "To finish the process, check your Email."

class Unsubscribe extends React.Component {
  state = {
    formSubmited: false
  }

  handleFormSubmit = ({ email }) => {
    this.setState({ formSubmited: true })
    this.props.triggerUnsubscribe({email})
  }

  render() {
    const { formSubmited } = this.state
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
                <Form
                  onSubmit={this.handleFormSubmit}
                  render={({ handleSubmit, valid }) => {
                    return (
                      <form
                        onSubmit={handleSubmit}
                        style={
                          this.state.formSubmited ? { display: 'none' } : {}
                        }
                      >
                        <EmailInput
                          validate={composeValidators(required, mustBeEmail)}
                          label="Your email address:"
                          name="email"
                          placeholder="eg. steve@jobs.com"
                        />
                        <Button cta type="submit" disabled={!valid}>
                          Submit email
                        </Button>
                      </form>
                    )
                  }}
                />
              </Col>
            </Row>
            {formSubmited ? (
              <Row>
                <Col>
                  <ThanksTitle>
                    {THANKS_MESSAGE}
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

Unsubscribe.defaultProps = {
  triggerUnsubscribe
}

export default Unsubscribe
