import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumOneDayRedux, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumOneDayRedux'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  HORACIO_HERRERA,
  selectNthTraining,
  selectUpcomingTrainings,
  AlternativeTrainingSection,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ADVANCED_REACT,
  REACT_WORKSHOP,
  BARCELONA,
  REACT_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { WORKSHOP_TRAINING_ID, title } from '../'

const instanceTitle = `${title} In Barcelona`

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingTrainings = selectUpcomingTrainings({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
        city: BARCELONA,
      })
      const training = selectNthTraining({
        trainings: upcomingTrainings,
        nth,
      })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP],
        excludeTrainingId: WORKSHOP_TRAINING_ID,
        city: BARCELONA,
      })

      return (
        <React.Fragment>
          <Helmet
            title={instanceTitle}
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: instanceTitle,
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: '/react/training/workshops/redux',
                label: '1-Day Redux',
              },
              {
                to: path,
                label: 'Barcelona',
              },
            ]}
          />
          <Header
            titleLines={[instanceTitle]}
            subtitle="Learn how Redux and React work together in practice in this 1-day workshop in Barcelona, from Redux fundamentals and FP through to Redux Middlewares"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark">
            <Card variant="primary">
              <Row>
                <Col md={6} lg={5} lgOffset={1}>
                  <PaymentSection
                    training={training}
                    trainingError={trainingError}
                    trainingLoading={trainingLoading}
                  />
                </Col>
                <Col md={6} lg={4} lgOffset={1}>
                  <H4>Rafa's student experience</H4>
                  <Video youtubeId="hZZksRcqtkc" />
                  <TrainingDetails coaches={[HORACIO_HERRERA]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="blg40SCle7I"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for beginner devs!</H3>
                <P>
                  This is not a learn-to-code course. If you want to learn to
                  code, we recommend checking out{' '}
                  <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                    Free Code camps
                  </Link>
                  .
                </P>
                <Link
                  className="perfect-course-student"
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                >
                  Blog: Are YOU the Perfect React Student?
                </Link>
              </Col>
            </Row>
          </Section>
          <Section>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumOneDayRedux layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </Section>
          <AlternativeTrainingSection trainings={crossSellTrainings} />
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
