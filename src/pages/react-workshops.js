import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../components/buttons'
import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P, H4, H5 } from '../components/text'
import {
  UpcomingTrainingSection,
  withUpcomingTrainings,
} from '../components/training'
import Header from '../components/layout/Header'
import { Card, Newsletter } from '../components/elements'
import { GREY2 } from '../config/styles'

const BorderLeftH4 = styled(H4)`
  border-left: 0.4rem solid ${GREY2};
  padding-left: 1rem;
`
const PROVISIONAL_WORKSHOP_PRICE = '£300+VAT'

const workshops = [
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
]

const Workshops = ({ trainings }) => (
  <React.Fragment>
    <Header
      titleLines={['1-day React Workshops']}
      subtitle="Intense, 1-day workshops that focusses on one specific part of React - all based on our proven Bootcamp curriculum"
      bgImg="about-us"
    />
    <TopSection marginTop={`-250`}>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>Which 1-day React training are you looking for?</H2>
              <Row>
                {workshops.map(workshop => (
                  <Col xs={12} sm={6} md={4}>
                    <Card small border="black" bottom={32}>
                      <BorderLeftH4>{workshop.title}</BorderLeftH4>
                      <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                      <P>{workshop.description}</P>
                      <LinkButton variant="secondary" to="/interest-form">
                        Join Waitlist
                      </LinkButton>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={10} mdOffset={1}>
              <Newsletter />
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>

    <UpcomingTrainingSection trainings={trainings} />
  </React.Fragment>
)

export default withUpcomingTrainings()(Workshops)
