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

const WorkshopCard = styled.div`
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 2rem;
  h4 {
    border-left: 0.4rem solid ${GREY2};
    padding-left: 1rem;
  }
`
const PROVISIONAL_WORKSHOP_PRICE = '£300+VAT'

const Workshops = ({ trainings }) => (
  <React.Fragment>
    <Header
      titleLines={['1-day React Workshops']}
      subtitle="Intense, 1-day workshops that focusses on one specific part of React - all based on our proven Bootcamp curriculum"
      bgImg="about-us"
    />
    <TopSection>
      <Grid>
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>Which 1-day React training are you looking for?</H2>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>React Fundamentals & ModernJS</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>
                      Learn the basics of React and jumpstart your way into a
                      new coding ecosystem
                    </P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>Styling in React and Design Systems</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>
                      See how React can look gorgeous and encourage design
                      consistency
                    </P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>React Hooks & Suspense</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>
                      Learn 2 of the newest and most exciting features in React
                    </P>

                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>Performance & FP in React</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>Discover best practice for permonant React apps</P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>React with GraphQL client</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>Consume GraphQL APIs in any React application</P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>Testing in React</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>
                      Ensure consistent, reliable code across the React
                      ecosystem
                    </P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <WorkshopCard>
                    <H4>React Native</H4>
                    <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                    <P>Learn how to take your React skills into native apps</P>
                    <LinkButton variant="secondary" to="/interest-form">
                      Join Waitlist
                    </LinkButton>
                  </WorkshopCard>
                </Col>
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
