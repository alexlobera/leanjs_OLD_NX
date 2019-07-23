import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H1Ref, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { Card, Video } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { REACT_NATIVE, BARCELONA } from 'src/config/data'
import ReactNativeFoundationSession from 'src/components/curriculum/sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from 'src/components/curriculum/sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from 'src/components/curriculum/sessions/native/ReactNativeAnimationsSession'
import CurriculumSection from 'src/components/curriculum/CurriculumSection'

const InstancePage = ({ path, pageContext: { canonicalSlug, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingNativeTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_NATIVE,
        city: BARCELONA,
      })
      const training =
        selectNthTraining({ trainings: upcomingNativeTrainings, nth }) || {}
      return (
        <React.Fragment>
          <Helmet
            title="React Native Workshops Barcelona"
            link={[
              {
                rel: 'canonical',
                href: `https://reactgraphql.academy${canonicalSlug}`,
              },
            ]}
            meta={[
              {
                name: 'description',
                content:
                  '1-day React Native Workshops in Barcelona from industry experts.',
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
                label: 'React Native',
              },
              {
                to: path,
                label: 'Barcelona',
              },
            ]}
          />
          <Header
            titleLines={['1-Day React Native Workshop - Barcelona']}
            links={header.landingTraining.links}
            subtitle="Take your React developer career to the next level by learning React Native in Barcelona, in only one day. "
            bgImageName={BOOTCAMP}
            training={training}
            type={REACT_NATIVE}
            showInfoBox={true}
          />
          <TopSection variant="dark">
            <Grid>
              <Card bg="dark">
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
                    <TrainingDetails
                      foodIncluded
                      coaches={[HORACIO_HERRERA, ALEX_LOBERA]}
                    />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    small
                    quote="[The coaches] are very important - they're able to explain things in a way we can understand."
                    fullname="Jim Plimmer"
                    job="Developer"
                    company="Conversion.com"
                    videoUrl="GU-IIi-84t8"
                  />
                </Col>
                <Col md={4} lgOffset={1}>
                  <H2Ref>
                    <Link to="#target-audience" name="target-audience" />
                    Is this React Native training right for me? Are you...{' '}
                  </H2Ref>
                  <Ul>
                    <Li>
                      You have at least a few months of experience using React
                      on the web. If you don't know React, we recommend you
                      first to attend our{' '}
                      <Link to="/react/training/bootcamp">React Bootcamp</Link>
                    </Li>
                    <Li>
                      Taking a step forward to become a React Native Specialist
                      able to make critical decisions about the architecture of
                      a React Native application.
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our training could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is not a training for React beginners. If you don't
                    know React, we recommend you first to attend our{' '}
                    <Link to="/react/training/bootcamp">React Bootcamp</Link>.
                  </P>
                </Col>
              </Row>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <H1Ref>
                      React Native Curriculum
                      <Link to="#curriculum" name="curriculum">
                        #
                      </Link>
                    </H1Ref>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumSection
                      enableToggle={false}
                      type={REACT_NATIVE}
                      toggleNavigateTo={`/react/training/workshops/`}
                      isOpen={true}
                      title="React Native Day 1"
                      name="day1"
                      subTitle="Foundation, Navigation, and Animations"
                    >
                      <ReactNativeFoundationSession title="Foundation" />
                      <ReactNativeNavigationSession title="Navigation" />
                      <ReactNativeAnimationsSession title="Animations" />
                    </CurriculumSection>
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

InstancePage.defaultProps = {
  pageContext: {},
}

export default InstancePage
