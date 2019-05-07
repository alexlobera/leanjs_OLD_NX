import React from 'react'

import { BOOTCAMP } from '../../images/imageNames.js'
import Layout from '../components/layout'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2Ref, H3, P, H1Ref } from '../components/text'
import Ul, { Li } from '../components/layout/Ul'
import { Card, Video } from '../components/elements'
import { Link, Breadcrumb } from '../components/navigation'
import { HideComponentsUsingCss } from '../components/utils'
import Header from '../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../config/images'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from '../components/training'
import {
  BulletIcon,
  NotBegginersIcon,
  ReactIcon,
  CollabsIcon,
} from '../components/icons'
import { Image } from '../components/elements'
import header from '../components/layout/Header.json'
import { PaymentSection } from '../components/payment'
import { REACT_NATIVE, BARCELONA } from '../config/data'
import ReactNativeFoundationSession from '../components/curriculum/sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from '../components/curriculum/sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from '../components/curriculum/sessions/native/ReactNativeAnimationsSession'
import CurriculumSection from '../components/curriculum/CurriculumSection'

const ReactNativeBoocampBarcelona = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingNativeTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_NATIVE,
        city: BARCELONA,
      })
      const training =
        selectNthTraining({ trainings: upcomingNativeTrainings }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react-native-bootcamp', label: 'React Native' },
              {
                to: '/react-native-foundation-barcelona',
                label: 'Barcelona',
              },
            ]}
          />
          <Header
            titleLines={['1-Day React Native Foundation - Barcelona']}
            links={header.landingTraining.links}
            subtitle="Take your React developer career to the next level by learning React Native, in only one day. "
            bgImageName={BOOTCAMP}
            training={training}
            type={REACT_NATIVE}
            showInfoBox={true}
          />
          <TopSection xsBgDark>
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
                    <Video youtubeId="Z4s1gf09oeY" />
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
                <HideComponentsUsingCss xs sm>
                  <Col md={6} lg={5}>
                    <Image src={BOOTCAMP_COLLAB} width="100%" />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    <Link to="#target-audience" name="target-audience" />
                    Is this React Native training right for me? Are you...{' '}
                  </H2Ref>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={NotBegginersIcon} />
                      You have at least a few months of experience using React
                      on the web. If you don't know React, we recommend you
                      first to attend our{' '}
                      <Link to="/react-redux-graphql-bootcamp">
                        React Bootcamp
                      </Link>
                    </Li>
                    <Li>
                      <BulletIcon icon={ReactIcon} />
                      Taking a step forward to become a React Native Specialist
                      able to make critical decisions about the architecture of
                      a React Native application.
                    </Li>
                    <Li>
                      <BulletIcon icon={CollabsIcon} />
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
                    <Link to="/react-redux-graphql-bootcamp">
                      React Bootcamp
                    </Link>
                    .
                  </P>
                </Col>
              </Row>
            </Grid>
          </Section>
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
                      toggleNavigateTo={`/curriculum?tab=${REACT_NATIVE}`}
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

export default ReactNativeBoocampBarcelona
