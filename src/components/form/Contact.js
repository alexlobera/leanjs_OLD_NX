import React from 'react'
import Link from '../navigation/Link'
import Button from '../buttons/Button'
import P from '../layout/P'
import { H2, H3 } from '../text'
import Input from './Input'
import { Col, Row } from '../layout/Grid'

const ContactForm = () => (
  <div>
    <Row>
      <Col lg={6}>
        <H2>I would like more info and some pre-course learning resources</H2>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <p>
          Enter your email below and we'll email you with our latest training
          and free learning resources. And no, we don't spam you with anything
          else, as per our <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </Col>
      <Col lg={6}>
        <P>
          <Input placeholder="Email" />
        </P>
        <P>
          <Button children="Submit email" />
        </P>
      </Col>
    </Row>
  </div>
)

export default ContactForm
