import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import Link from 'src/components/navigation/Link'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H4, H5 } from 'src/components/text'
import { UpcomingTrainingSection } from 'src/components/training'
import Header from 'src/components/layout/Header'
import { Card, Newsletter } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'

const PROVISIONAL_WORKSHOP_PRICE = '£360 Inc VAT'

const workshops = [
  {
    title: 'Styling in React using design systems',
    description:
      'See how React can look gorgeous and encourage design consistency',
    to: '/react/training/workshops/design-system-styling-in-react',
  },
  {
    title: 'React Fundamentals & Modern JavaScript',
    description:
      'Learn the basics of React and jumpstart your way into a new coding ecosystem',
  },
  {
    title: 'React Hooks & Suspense',
    description: 'Learn 2 of the newest and most exciting features in React',
  },
  {
    title: 'Adv React Patterns, FP, and performance',
    description:
      'Advanced React Patterns and Functional Programming for performant React apps',
  },
  {
    title: 'Testing in React',
    description: 'Ensure consistent, reliable code across the React ecosystem',
  },
  {
    title: 'React Native',
    description: 'Build upon your React knowledge and create great native apps',
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
            subtitle="Intense, 1-day workshops that focusses on one specific part of React - all delivered by industry experts"
          />
          <TopSection marginTop={`-250`}>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col md={10} mdOffset={1}>
                    <H2>Which 1-day React training are you looking for?</H2>
                    <Row>
                      {workshops.map(workshop => {
                        let to, text, variant
                        if (workshop.to) {
                          to = workshop.to
                          text = 'Find out more'
                          variant = 'primary'
                        } else {
                          to = '/react/training/workshops/interest-form'
                          text = 'Join Waitlist'
                          variant = 'secondary'
                        }

                        return (
                          <Col xs={12} sm={6} md={4}>
                            <Card small border="black" bottom={32}>
                              <Link underline={false} to={to}>
                                <H4 borderLeft>{workshop.title}</H4>
                              </Link>
                              <H5>{PROVISIONAL_WORKSHOP_PRICE}</H5>
                              <P>{workshop.description}</P>
                              <LinkButton variant={variant} to={to}>
                                {text}
                              </LinkButton>
                            </Card>
                          </Col>
                        )
                      })}
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
