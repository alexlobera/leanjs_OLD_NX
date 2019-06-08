import React from 'react'
import { Match } from '@reach/router'

import Layout from 'src/components/layout'
import { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, H5, P } from 'src/components/text'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectTrainingById,
} from 'src/components/training'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { MEETUP } from 'src/config/data'
import { MEETUP_PATH } from './index'

const Meetup = () => (
  <Match path={MEETUP_PATH}>
    {({ match }) => {
      const instanceId = match && match.id

      return (
        <Layout>
          {({ trainings }) => {
            const city = 'CITY'
            const training = {}
            const meetupTitle = `MEETUP TITLE ${instanceId}`

            return (
              <React.Fragment>
                <Breadcrumb
                  path={[
                    { to: '/', label: 'Home' },
                    { to: '/community', label: 'Community' },
                    { to: '/community/meetups/', label: 'Meetups' },
                    {
                      to: `/community/meetups/${instanceId}`,
                      label: `${meetupTitle}`,
                    },
                  ]}
                />
                <Header
                  titleLines={[meetupTitle || '...loading']}
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
                            We are very excited to announce our next meetup!
                          </P>
                          <br />
                          <H5>Meetup Group:</H5>
                          <Link
                            to={`https://www.meetup.com/JavaScript-${city}/`}
                          >
                            JavaScript {city}
                          </Link>
                        </Col>
                        <Col md={6} lg={5} lgOffset={1}>
                          {/* <PaymentSection
                  training={training}
                  trainingError={trainingError}
                  trainingLoading={trainingLoading}
                /> */}
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
    }}
  </Match>
)

export default Meetup
