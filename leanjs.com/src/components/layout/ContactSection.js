import React from "react"
import styled from "styled-components"

import Form, { required } from "../form/Form"
import InputField from "../form/InputField"
import Link, { styleChildLinkColor, MailtoLink } from "../navigation/Link"
import Grid, { Col, Row } from "../layout/Grid"
import Section from "../layout/Section"
import Button from "../buttons/Button"
import { Strong } from "../text"
import Spinner from "../elements/Spinner"
import { sendMessage } from "../../api"
import { WHITE, DARKGREY } from "../../config/styles"
import ContactUsBullet from "../bullets/ContactUsBullet"
import { H2, H4, P } from "../text"
import Ul, { Li } from "../layout/Ul"

const LinkList = styled(Ul)`
  padding-left: 0;
  list-style: none;
  margin-left: 0;
  ${styleChildLinkColor(WHITE)};
`

const ContactSection = () => (
  <Section dark>
    <Grid>
      <Row>
        <H2>
          <a name="contact" />
          We'd love to chat
        </H2>
      </Row>
      <Row>
        <Col md={5}>
          <P>Let's start a conversation right now! Here's how:</P>
          <LinkList>
            <Li>
              <a href="tel:+44 20 8123 8184">
                <ContactUsBullet image="phone" />
                Phone +44 20 8123 8184
              </a>
            </Li>
            <Li>
              <MailtoLink to="hello@leanjs.com">
                <ContactUsBullet image="email" />
                Email hello@leanjs.com
              </MailtoLink>
            </Li>
            <Li>
              <Link to="https://twitter.com/leanjscom">
                <ContactUsBullet image="twitter" />
                Tweet us @leanjs
              </Link>
            </Li>
            <Li>
              <ContactUsBullet image="office" />
              Visit us at WeWork Moorgate, 1 Fore St Ave, London, EC2Y 9DT -{" "}
              <Link to="https://goo.gl/maps/jsLZCb4Yi352">See on map</Link>
            </Li>
          </LinkList>
        </Col>
        <Col md={1} />
        <Col md={5}>
          <H4>Or fill out our contact form</H4>
          <Form onSubmit={sendMessage}>
            {({ submitting, submitSucceeded }) =>
              submitSucceeded ? (
                <Strong large color={WHITE}>
                  Thank you for your submission! We will be in touch shortly.
                </Strong>
              ) : (
                <React.Fragment>
                  <InputField
                    color={WHITE}
                    label="Name (required)"
                    name="name"
                    placeholder="eg. Steve Jobs"
                    validate={required}
                  />
                  <InputField
                    color={WHITE}
                    label="Email or phone number (required)"
                    name="email"
                    placeholder="eg. name@company.com"
                    validate={required}
                  />
                  <InputField
                    color={WHITE}
                    box="textarea"
                    label="Would you like to give more detail? Feel free!"
                    name="message"
                  />
                  <Button type="submit">
                    {submitting ? <Spinner color={DARKGREY} /> : "Submit"}
                  </Button>
                </React.Fragment>
              )
            }
          </Form>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default ContactSection
