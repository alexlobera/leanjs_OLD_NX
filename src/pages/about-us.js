import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { H1, H2, H3 } from '../components/text'
import AttendeeQuote from '../components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import {
  HideSingleComponentUsingCss,
  DisplaySingleComponentUsingCss,
} from '../components/utils'
import ContactForm from '../components/form/Contact'
import Video from '../components/elements/Video'

const AboutUs = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <Row>
          <Col style={{ textAlign: 'center' }} mdOffset={3} md={6}>
            <H1>About us</H1>
            <Ul inline>
              <Li>
                <a href="#pricing">Trainer profile</a>
              </Li>
              <Li>|</Li>
              <Li>
                <a href="#curriculum">Corporate training</a>
              </Li>
            </Ul>
            <H2>
              Our trainers are expert, every day developers who will mentor you
              throughout your ReactJS Academy journey
            </H2>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid style={{ textAlign: 'center' }}>
        <H2>Our core trainers - professional developers who love to teach</H2>
        <H3>
          Our core trainers are the builders behind{' '}
          <Link to="https://leanjs.com">LeanJS</Link> - working developers who
          are React ecoysystem
        </H3>
      </Grid>
    </Section>
  </div>
)

export default AboutUs
