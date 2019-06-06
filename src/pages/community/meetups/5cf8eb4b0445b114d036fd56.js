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
import { MEETUP, BARCELONA } from 'src/config/data'

// TODO create this page programatically and get the id from file name
const TRAINING_ID = '5cf8eb4b0445b114d036fd56'

const MeetUpPage = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const workshops = selectUpcomingTrainings({
        type: MEETUP,
        trainings,
        city: BARCELONA,
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
            titleLines={['Thinking in React - Introduction to ReactJS']}
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
                      ReactJS is a bit of a paradigm shift of what most devs are
                      used to, it's very declarative and functional. The goal of
                      the session will be to start "thinking in React". There
                      will be a 30 minutes talk about how to use ReactJS, and
                      then attendees will have 1.5 hours to solve a challenge
                      (we encourage you to do pair programming to solve the
                      exercise). There will be mentors to answer questions
                      during the practise session.
                    </P>

                    <P>Agenda:</P>
                    <P>
                      18:30 - Doors open: time for networking, drinks, and
                      snacks
                    </P>
                    <P>
                      19:15 - Talk "Thinking in React" by{' '}
                      <Link to="/about-us/#horacio-herrera">
                        Horacio Herrera
                      </Link>
                    </P>
                    <P>21:00 - Time to go home :)</P>
                    <H5>Meetup Group:</H5>
                    <Link to="https://www.meetup.com/JavaScript-Barcelona">
                      JavaScript Barcelona
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
