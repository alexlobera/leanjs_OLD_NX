import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import CurriculumPartTime from 'src/components/curriculum/CurriculumPartTime'
import { Card, Video } from 'src/components/elements'
import {
  UpcomingTrainingSection,
  TargetAudienceSection,
  TrainingDetails,
  DAVID_LEULIETTE,
  WILL_VOELCKER,
  ALEX_LOBERA,
  EVA_HOFFMANN,
  FRANCISCO_GOMES,
  selectNthTraining,
  selectUpcomingTrainings,
  AlternativeTrainings,
} from 'src/components/training'
import { H4 } from 'src/components/text'
import Header from 'src/components/layout/Header'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Breadcrumb } from 'src/components/navigation'
import {
  PART_TIME,
  LONDON,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Course London | React GraphQL Academy',
  description:
    'Interested in a React course in London? Learn the main libraries of the React ecosystem and become a confident React developer with our React part time course London.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const partTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: LONDON,
      })
      const training = selectNthTraining({ trainings: partTimeTrainings, nth })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [REACT_WORKSHOP, REACT_FUNDAMENTALS, REACT_BOOTCAMP],
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/part-time-course',
                label: 'Part Time Course',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Part-Time Course in London']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work in London!"
            links={header.landingTraining.links}
            type={PART_TIME}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="darkMob">
            <Card variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingError={trainingError}
                    trainingLoading={trainingLoading}
                    financeAvailable
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Rafa's student experience</H4>
                  <Video youtubeId="9QpAWAtZy6M" />
                  <TrainingDetails
                    date={training && training.dates}
                    timing="6pm - 9pm Tuesday's & Thursday's"
                    location={
                      <React.Fragment>
                        {training && training.city}
                      </React.Fragment>
                    }
                    coaches={[
                      EVA_HOFFMANN,
                      DAVID_LEULIETTE,
                      WILL_VOELCKER,
                      ALEX_LOBERA,
                      FRANCISCO_GOMES,
                    ]}
                  />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumPartTime
                    trainings={partTimeTrainings}
                    layout={LIST_TWO_COL}
                  />
                </Col>
              </Row>
            </Card>
          </Section>

          <TargetAudienceSection />
          <Section>
            <Row>
              <Col lg={10} lgOffset={1}>
                <AlternativeTrainings trainings={crossSellTrainings} />
              </Col>
            </Row>
          </Section>

          <BlogSection tags={['react', 'beginner']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage
