import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
// import CurriculumOneDayRedux, {
//   TargetAudienceList,
// } from 'src/components/curriculum/workshops/CurriculumOneDayRedux'
import { Segment, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectUpcomingTrainings,
  selectNthTraining,
  AlternativeTrainingSection,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
// import {
//   ADVANCED_REACT,
//   REACT_WORKSHOP,
//   REACT_BOOTCAMP,
//   LONDON,
// } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
// import { WORKSHOP_TRAINING_ID, title } from '../'

// const city = LONDON
// const trainingId = WORKSHOP_TRAINING_ID
// const instanceTitle = `${title} In London`
// const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP]
// const excludeTrainingId = WORKSHOP_TRAINING_ID
// const type = REACT_WORKSHOP

// const Curriculum = CurriculumOneDayRedux

const InstancePage = ({
  path,
  curriculum: Curriculum,
  targetAudienceList: TargetAudienceList,
  trainingName,
  tech,
  trainingType,
  crossSellTypes,
  trainingId,
  pageContext: { type, instanceTitle, city, canonical, nth = 1 },
}) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      // const tech = 'React'
      // const trainingName = 'Redux'
      const pathTech = `/${tech.toLowerCase()}/`
      const pathTraining = `${pathTech}training/`
      const pathTrainingType = `/${pathTraining}/${trainingType.toLowerCase()}/`
      const pathTrainingName = `/${pathTrainingType}/${trainingName.toLowerCase()}/`
      const subtitle =
        'Learn how Redux and React work together in practice in this 1-day workshop in London, from Redux fundamentals and FP through to Redux Middlewares'
      const coaches = [ALEX_LOBERA, RICHARD_MOSS]

      const upcomingTrainings = selectUpcomingTrainings({
        trainings,
        trainingId,
        city,
      })
      const training = selectNthTraining({
        trainings: upcomingTrainings,
        nth,
      })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: crossSellTypes,
        excludeTrainingId: trainingId,
        city,
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
              { to: pathTech, label: tech },
              { to: pathTraining, label: 'Training' },
              {
                to: pathTrainingType,
                label: trainingType,
              },
              {
                to: pathTrainingName,
                label: trainingName,
              },
              {
                to: path,
                label: city,
              },
            ]}
          />
          <Header
            titleLines={[instanceTitle]}
            subtitle={subtitle}
            links={header.landingTraining.links}
            type={type}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="darkMob">
            <Segment variant="primary">
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
                  <TrainingDetails coaches={coaches} />
                </Col>
              </Row>
            </Segment>
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
            <Segment>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <Curriculum layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Segment>
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
