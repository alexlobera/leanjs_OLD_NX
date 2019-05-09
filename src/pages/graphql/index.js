import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumBootcamp } from 'src/components/curriculum'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Card, Video } from 'src/components/elements'
import CallToActionNextTrainings from 'src/components/layout/CallToActionNextTrainings'
import { DAVIAN } from 'src/config/images'
import {
  NotBegginersIcon,
  RunFastIcon,
  TargetIcon,
  TickBadgeIcon,
  BulletIcon,
  PeopleNetWorkIcon,
} from 'src/components/icons'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP } from 'src/config/data'
import header from 'src/components/layout/Header.json'

const GraphQLPage = props => (
  <Layout>
    {({ trainings }) => {
      const upcomingBootCampTrainings = selectUpcomingTrainings({
        type: GRAPHQL_BOOTCAMP,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingBootCampTrainings,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/graphql',
                label: 'GraphQL',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL Academy']}
            subtitle="TODO by paul"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'TODO paul',
                to: '#please-change-paul',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionNextTrainings
                left
                trainings={upcomingBootCampTrainings}
              />
              <Card border="shadow">
                <Link to="#upcoming-courses" name="upcoming-courses" />
                <CurriculumBootcamp trainings={upcomingBootCampTrainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col>TODO for Paul ;-)</Col>
              </Row>
            </Grid>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default GraphQLPage
