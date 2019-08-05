import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul from 'src/components/layout/Ul'
import CurriculumReactNative, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactNative'
import { Segment, Video } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import {
  REACT_NATIVE,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  REACT_WORKSHOP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { WORKSHOP_TRAINING_ID, title } from '../'

const instanceTitle = `${title} In London`

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
                content:
                  '1-Day React Native Workshop in London from industry experts.',
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
                to: '/react/training/workshops/react-native',
                label: '1-Day React Native',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[instanceTitle]}
            subtitle="Take your React developer career to the next level by<br />learning React Native in London, in only one day. "
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_NATIVE}
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
                  <H4>Charlie's student experience</H4>
                  <Video youtubeId="VhUMAqToJ4s" />
                  <TrainingDetails foodIncluded coaches={[HORACIO_HERRERA]} />
                </Col>
              </Row>
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="[The coaches] are very important - they're able to explain things in a way we can understand."
                  fullname="Jim Plimmer"
                  job="Developer"
                  company="Conversion.com"
                  youtubeId="GU-IIi-84t8"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this React Native training right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <TargetAudienceList />
                </Ul>
                <P>
                  If you've said 'yes' to these, our training could be for you!
                </P>
                <H3>Not for beginner devs!</H3>
                <P>
                  This is not a training for React beginners. If you don't know
                  React, we recommend you first to attend our{' '}
                  <Link to="/react/training/bootcamp">React Bootcamp</Link>.
                </P>
              </Col>
            </Row>
          </Section>

          <Section>
            <Segment>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumReactNative layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Segment>
          </Section>
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
