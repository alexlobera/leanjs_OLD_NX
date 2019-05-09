import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H4, H5 } from 'src/components/text'
import { UpcomingTrainingSection } from 'src/components/training'
import Header from 'src/components/layout/Header'
import { Card, Newsletter } from 'src/components/elements'
import { GREY2 } from 'src/config/styles'
import { Breadcrumb } from 'src/components/navigation'

const BorderLeftH4 = styled(H4)`
  border-left: 0.4rem solid ${GREY2};
  padding-left: 1rem;
`
const PROVISIONAL_WORKSHOP_PRICE = '£360 Inc VAT'

const workshops = [
  {
    title: 'Styling in React and Design Systems',
    description:
      'See how React can look gorgeous and encourage design consistency',
    sell: true,
  },
  {
    title: 'React Fundamentals & ModernJS',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Hooks & Suspense',
    description: 'Learn 2 of the newest and most exciting features in React',
  },
  {
    title: 'Performance & FP in React',
    description: 'Discover best practice for permonant React apps',
  },
  {
    title: 'React with GraphQL client',
    description: 'Consume GraphQL APIs in any React application',
  },
  {
    title: 'Testing in React',
    description: 'Ensure consistent, reliable code across the React ecosystem',
  },
]

const Workshops = () => (
  <Layout>
    {({ trainings }) => {
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/react',
                label: 'React',
              },
              {
                to: '/react/training/',
                label: 'Training',
              },
              {
                to: '/react/training/workshops',
                label: 'Workshops',
              },
            ]}
          />
          <Header
            titleLines={['1-day React Workshops']}
            subtitle="Intense, 1-day workshops that focusses on one specific part of React - all based on our proven Bootcamp curriculum"
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
                            {workshop.sell ? (
                              <LinkButton
                                variant="primary"
                                to="/react/training/workshops/design-system-styling-in-react"
                              >
                                Get ticket!
                              </LinkButton>
                            ) : (
                              <LinkButton
                                variant="secondary"
                                to="/react/training/workshops/interest-form"
                              >
                                Join Waitlist
                              </LinkButton>
                            )}
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
    }}
  </Layout>
)

export default Workshops
