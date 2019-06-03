import React from 'react'

import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H5, P } from 'src/components/text'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
} from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP, BERLIN } from 'src/config/data'

const MeetUpPage = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const workshops = selectUpcomingTrainings({
        type: MEETUP,
        trainings,
        city: BERLIN,
      })
      const training = selectNthTraining({
        trainings: workshops,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/community', label: 'Community' },
              { to: '/community/meetups/', label: 'Meetups' },
              {
                to: '/community/meetups/graphql-deep-dive-with-vladimir-novick',
                label: 'GraphQL deep dive with Vladimir Novick',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL deep dive with Vladimir Novick']}
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
                    <P>We are very excited to announce our next meetup!</P>
                    <P>
                      This time a deep-dive into GraphQL and serverless with
                      Hasura.io, free and open source engine lead by Vladimir
                      Novick.
                    </P>
                    <P>
                      We will learn not only how to create our own GraphQL API
                      and consume it in our Frontend apps, but also how to
                      create serverless business logic and even combine various
                      GraphQL servers together.
                    </P>
                    <P>
                      Vladimir is Developer Advocate at Hasura.io, Google
                      Developer Expert, consultant, worldwide speaker, published
                      author, host of the 3factorRadio podcast, and OSS
                      contributor.
                    </P>
                    <P>
                      Vladimir brings years of experience with the JavaScript
                      ecosystem and has been coding through the rise of the web.
                      Currently, Vladimir works with Web, Mobile, VR, AR, and
                      IoT technologies and advocates the use of GraphQL and
                      serverless architectures as well as functional languages
                      such as ReasonML.
                    </P>
                    <P>
                      The format will be around 2.5 hours of talk and live
                      coding with half an hour break in between. There'll also
                      be 1 or 2 lightning talks at the beginning.
                    </P>
                    <H5>Meetup Group:</H5>
                    <Link to="https://www.meetup.com/JavaScript-Berlin/">
                      JavaScript Berlin
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
