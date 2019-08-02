import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumTestingInReact from 'src/components/curriculum/workshops/CurriculumTestingInReact'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  // TODO are we using getNextTrainingByTrainingId in any place at all?
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
  selectNthTraining,
  AlternativeTrainingSection,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  REACT_WORKSHOP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { WORKSHOP_TRAINING_ID, title } from '../'

const titleInstance = `${title} In London`

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingTrainings = selectUpcomingTrainings({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: upcomingTrainings,
        nth,
      })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP],
        excludeTrainingId: WORKSHOP_TRAINING_ID,
        city: LONDON,
      })

      return (
        <React.Fragment>
          <Helmet
            title={titleInstance}
            link={[
              {
                rel: 'canonical',
                href: canonical,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: titleInstance,
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
                to: '/react/training/workshops/testing-in-react',
                label: 'Testing in React',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[titleInstance]}
            subtitle="Learn in London how to write tests for real-world applications that are flexible and increase the quality"
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
                  <H4>Lara's student experience</H4>

                  <Video youtubeId="Syktu6ICNfw" />
                  <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
                </Col>
              </Row>
            </Card>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="It's nice that the coaches almost don't hold your hand as there's a certain level of knowledge [students have] meaning you can learn quicker and get more done."
                  fullname="Charlie Wilson"
                  job="Software Engineer"
                  company="ESG PLC"
                  youtubeId="zRa5-FyWbK8"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <Li>
                    A developer with previous experience building React apps?
                  </Li>
                  <Li>
                    A developer who wants to upskill or specialise in advanced
                    React skills?
                  </Li>
                  <Li>
                    A developer who has heard of React Hooks but doesn't know
                    what that entails?
                  </Li>
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
                  <CurriculumTestingInReact layout={LIST_TWO_COL} />
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
