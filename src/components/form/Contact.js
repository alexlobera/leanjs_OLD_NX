import React, { Component } from 'react'
import styled from 'styled-components'

import DefaultLink from '../navigation/Link'
import Button from '../buttons/Button'
import {
  H3 as DefaultH3,
  Label as DefaultLabel,
  P as DefaultP,
  H4 as DefaultH4,
} from '../text'
import DefaultInput from './Input'
import { Col, Row } from '../layout/Grid'
import { WHITE } from '../../styles'
import { TickBadgeIcon } from '../icons'

const H3 = styled(DefaultH3)`
  color: ${WHITE};
`

const P = styled(DefaultP)`
  color: ${WHITE};
`
const Label = styled(DefaultLabel)`
  color: ${WHITE};
`
const Link = styled(DefaultLink)`
  color: ${WHITE};
`
const Input = styled(DefaultInput)`
  background-color: ${WHITE};
`

const Unsubscribe = styled(P)`
  padding-top: 25px;
`

const ColField = styled(Col)`
  padding-top: 5px;
  padding-bottom: 5px;
`

const ThanksTitle = styled(H3)`
  margin: 1em 0;
` //TODO: animate this later

class ContactForm extends Component {
  state = {
    formSubmited: false,
  }
  handleFormSubmit = e => {
    e.preventDefault()
    this.setState({ formSubmited: true })
  }
  render() {
    return (
      <div>
        <H3>I would like more info and some pre-training learning resources</H3>
        <P>
          Enter your email below and we'll email you with our latest training
          and free learning resources. And no, we don't spam you with anything
          else, as per our <Link to="/privacy-policy">Privacy Policy</Link>.
        </P>
        {!this.state.formSubmited ? (
          <form id="subscribe-form" onSubmit={this.handleFormSubmit}>
            <Row>
              <ColField md={7}>
                <Label for="email">Your email address:</Label>
              </ColField>
            </Row>
            <Row>
              <ColField md={7}>
                <Input name="email" placeholder="name@email.com" />
              </ColField>
              <ColField md={5}>
                <Button children="Submit email" />
              </ColField>
            </Row>
          </form>
        ) : (
          <Row>
            <Col>
              <ThanksTitle>thanks for submitting!</ThanksTitle>
            </Col>
          </Row>
        )}

        <Unsubscribe>
          Looking to unsubscribe? contact us at{' '}
          <Link to="mailto:unsubscribe@reactjs.academy">
            unsubscribe@reactjs.academy
          </Link>
        </Unsubscribe>
      </div>
    )
  }
}

export default ContactForm
