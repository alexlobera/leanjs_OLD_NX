import React from 'react'

import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H5, P } from 'src/components/text'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectTrainingById,
  selectUpcomingTrainings,
} from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP, LONDON } from 'src/config/data'

// TODO create this page programatically and get the id from file name
const TRAINING_ID = '5cf8b0ce0445b114d036fd4d'

const MeetUpPage = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const workshops = selectUpcomingTrainings({
        type: MEETUP,
        trainings,
        city: LONDON,
      })
      const training = selectTrainingById({
        trainings: workshops,
        id: TRAINING_ID,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/community', label: 'Community' },
              { to: '/community/meetups/', label: 'Meetups' },
              {
                to: `/community/meetups/${TRAINING_ID}`,
                label: 'Design Systems in the Real World with React',
              },
            ]}
          />
          <Header
            titleLines={['Design Systems in the Real World with React']}
            links={[
              { text: 'Meetup Details', to: '#curriculum' },
              { text: 'Buy tickets', to: '#target-audience' },
            ]}
            training={training}
            showInfoBox={true}
            type={MEETUP}
          />
          <TopSection xsBgDark>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col md={6} lg={4} lgOffset={1}>
                    <H2>Meetup details</H2>
                    <P>
                      We are bringing you something different this time. We have
                      two talks to talk about Design & React. Note this time is
                      not a workshop, so no need to bring your laptop.
                    </P>

                    <P>Agenda:</P>
                    <P>
                      18:30 - Doors open: time for networking, drinks, and
                      snacks
                    </P>
                    <P>
                      19:15 - 1st talk "Design-Thinking in the Real World" by{' '}
                      <Link to="/about-us/#paul-woodley">Paul Woodley</Link>
                    </P>
                    <P>
                      20:00 - 2nd Talk: "design systems in React" by{' '}
                      <Link to="/about-us/#alex-lobera">Alex Lobera</Link>
                    </P>
                    <P>20:30 - Networking and drinks</P>
                    <P>21:00 - Time to go home :)</P>
                    <H5>Meetup Group:</H5>
                    <Link to="https://www.meetup.com/JavaScript-London/">
                      JavaScript London
                    </Link>
                  </Col>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
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

export default MeetUpPage
