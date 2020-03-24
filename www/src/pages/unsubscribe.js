import React from 'react'

import { BOOTCAMP } from '../../images/imageNames'
import { triggerUnsubscribe } from '../api/rest'
import Section from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H3, P } from '../components/text'
import { RootHeader as Header } from '../components/layout/Header'
import { InputField, Form } from '../components/form'
import { Button } from '../components/buttons'
import { getComponentAliaser } from '../components/utils/aliasComponent'
import {
  composeValidators,
  required,
  mustBeEmail,
} from '../components/form/validations'

const aliasInput = getComponentAliaser(InputField)
export const EmailInput = aliasInput()

// export const ThanksTitle = styled(H3)`
//   margin: 1em 0;
// ` //TODO: animate this later

export const THANKS_MESSAGE = 'To finish the process, check your Email.'

export class Unsubscribe extends React.Component {
  state = {
    formSubmited: false,
  }

  handleFormSubmit = ({ email }) => {
    this.setState({ formSubmited: true })
    this.props.triggerUnsubscribe({ email })
  }

  render() {
    const { formSubmited } = this.state
    return (
      <React.Fragment>
        <Header
          fullHeight={false}
          titleLines={['Unsubscribe']}
          subtitle=""
          bgImageName={BOOTCAMP}
        />
        <Section>
          <Row>
            <Col md={6}>
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
                      style={this.state.formSubmited ? { display: 'none' } : {}}
                    >
                      <EmailInput
                        validate={composeValidators(mustBeEmail, required)}
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
            </Col>
          </Row>
          {formSubmited ? (
            <Row>
              <Col>
                <H3 sx={{ my: 2 }}>{THANKS_MESSAGE}</H3>
              </Col>
            </Row>
          ) : null}
        </Section>
      </React.Fragment>
    )
  }
}

Unsubscribe.defaultProps = {
  triggerUnsubscribe,
}

// const UnsubscribePage = () => <Unsubscribe />

export default Unsubscribe //UnsubscribePage
