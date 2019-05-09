import React from 'react'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { CurriculumPartTime } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrainingDetails,
  TargetAudienceSection,
  ALEX_LOBERA,
  ROY_DERKS,
  selectNthTraining,
  selectUpcomingTrainings,
} from 'src/components/training'
import Header from 'src/components/layout/Header'
import { CATALIN } from 'src/config/images'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Breadcrumb } from 'src/components/navigation'
import { PART_TIME, AMSTERDAM } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const PartTimeAmsterdam = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const partTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: AMSTERDAM,
      })
      const training = selectNthTraining({ trainings: partTimeTrainings }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: '/react-redux-graphql-part-time-course',
                label: 'Part-time',
              },
              { to: '/react-redux-training-amsterdam', label: 'Amsterdam' },
            ]}
          />
          <Header
            titleLines={['React Redux part-time course - Amsterdam']}
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
                      trainingLoading={trainingLoading}
                      trainingError={trainingError}
                    />
                  </Col>
                  <Col xs={12} md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="E_4eQQHjc7A" />
                    <TrainingDetails
                      date={training.dates}
                      timing="9am - 6pm Friday's"
                      location={
                        <React.Fragment>{training.city}</React.Fragment>
                      }
                      coaches={[ROY_DERKS, ALEX_LOBERA]}
                    />
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

export default PartTimeAmsterdam