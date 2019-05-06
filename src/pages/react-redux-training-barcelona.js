import React from 'react'

import Layout from '../components/layout'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { CurriculumPartTime } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  TargetAudienceSection,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from '../components/training'
import Header from '../components/layout/Header'
import { CATALIN } from '../config/images'
import header from '../components/layout/Header.json'
import { PaymentSection } from '../components/payment'
import { Breadcrumb } from '../components/navigation'
import { PART_TIME, BARCELONA } from '../config/data'
import { LIST_TWO_COL } from '../components/curriculum/selectCurriculumLayout'

const PartTimeBarcelona = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingPartTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: BARCELONA,
      })
      const training =
        selectNthTraining({ trainings: upcomingPartTimeTrainings }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/react-redux-graphql-part-time-course',
                label: 'Part-time',
              },
              { to: '/react-redux-training-barcelona', label: 'Barcelona' },
            ]}
          />
          <Header
            titleLines={['React Redux part-time course - Barcelona']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work!"
            links={header.landingTraining.links}
            type={PART_TIME}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark top>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col xs={12} md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                    />
                  </Col>
                  <Col xs={12} md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="E_4eQQHjc7A" />
                    <TrainingDetails coaches={[HORACIO_HERRERA, ALEX_LOBERA]} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <TargetAudienceSection />
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AttendeeQuote
                    quote="Technology nowadays changes very often and in future you may not be able to find a job with the things you know - you have to keep up. I like the fact that we got to write code rather than focus on theory."
                    fullname="Catalin Cislariu"
                    job="Senior Developer"
                    company="KLEIDO LTD"
                    profilePicUrl={CATALIN}
                  />
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumPartTime layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default PartTimeBarcelona
