import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import CurriculumPartTime from 'src/components/curriculum/CurriculumPartTime'
import { Card, Video } from 'src/components/elements'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  TargetAudienceSection,
  ALEX_LOBERA,
  ROY_DERKS,
  selectNthTraining,
  selectUpcomingTrainings,
  AlternativeTrainings,
} from 'src/components/training'
import Header from 'src/components/layout/Header'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Breadcrumb } from 'src/components/navigation'
import {
  PART_TIME,
  AMSTERDAM,
  REACT_WORKSHOP,
  REACT_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'React Course Amsterdam | React GraphQL Academy',
  description:
    'Interested in a React course in Amsterdam? Learn the main libraries of the React ecosystem and become a confident React developer with our React part time course Amsterdam.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const partTimeTrainings = selectUpcomingTrainings({
        trainings,
        type: PART_TIME,
        city: AMSTERDAM,
      })
      const training = selectNthTraining({ trainings: partTimeTrainings, nth })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [REACT_WORKSHOP, REACT_BOOTCAMP],
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
                label: 'Amsterdam',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Part-Time Course in Amsterdam']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - without missing a day at work in Amsterdam!"
            links={header.landingTraining.links}
            type={PART_TIME}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark" top>
            <Card variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingLoading={trainingLoading}
                    trainingError={trainingError}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <Video youtubeId="E_4eQQHjc7A" />
                  <TrainingDetails
                    date={training && training.dates}
                    timing="9am - 6pm Friday's"
                    location={
                      <React.Fragment>
                        {training && training.city}
                      </React.Fragment>
                    }
                    coaches={[ROY_DERKS, ALEX_LOBERA]}
                  />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumPartTime layout={LIST_TWO_COL} />
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
