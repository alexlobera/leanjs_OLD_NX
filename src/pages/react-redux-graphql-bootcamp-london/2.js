import React from 'react'

import { BOOTCAMP } from '../../../images/imageNames.js'
import Layout from '../../components/layout'
import Section, { TopSection } from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2Ref, H3, P } from '../../components/text'
import Ul, { Li } from '../../components/layout/Ul'
import { CurriculumBootcamp } from '../../components/curriculum'
import { Card, Video } from '../../components/elements'
import { HideComponentsUsingCss } from '../../components/utils'
import Header from '../../components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from '../../config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
} from '../../components/training'
import {
  BulletIcon,
  NotBegginerIcon,
  CodeIcon,
  ReactIcon,
  CollabsIcon,
} from '../../components/icons'
import { Image } from '../../components/elements'
import header from '../../components/layout/Header.json'
import { PaymentSection } from '../../components/payment'
import { Link, Breadcrumb } from '../../components/navigation'
import { REACT_BOOTCAMP, LONDON } from '../../config/data'
import { LIST_TWO_COL } from '../../components/curriculum/selectCurriculumLayout'

const BootcampLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const bootCampTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_BOOTCAMP,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: bootCampTrainings,
        nth: 2,
      })
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react-redux-graphql-bootcamp', label: 'React bootcamp' },
              { to: '/react-redux-graphql-bootcamp-london', label: 'London' },
            ]}
          />
          <Header
            titleLines={['React Redux GraphQL Bootcamp - London']}
            subtitle="Take your dev career to the next level by mastering<br />React, Redux, and GraphQL - in just 1 week!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_BOOTCAMP}
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
                    <Video youtubeId="yvROXLQ1jHg" />
                    <TrainingDetails
                      coaches={[
                        HORACIO_HERRERA,
                        WILL_VOELCKER,
                        ALEX_LOBERA,
                        RICHARD_MOSS,
                      ]}
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
                    Is this React bootcamp right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={NotBegginerIcon} />A developer with 1+
                      year of development under your belt using JavaScript?
                    </Li>
                    <Li>
                      <BulletIcon icon={CodeIcon} />
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      <BulletIcon icon={ReactIcon} />
                      Taking a step forward to become a React JS Specialist able
                      to make critical decisions about the architecture of a
                      React application.
                    </Li>
                    <Li>
                      <BulletIcon icon={CollabsIcon} />
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our bootcamp could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is not a learn-to-code bootcamp. If you want to learn
                    to code, we recommend you to contact our London-based
                    partner <Link to="https://makers.tech/">Makers</Link>. PLUS
                    you'll get a &pound;250 discount using our reference
                    "ReactJS Academy".
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
                    <CurriculumBootcamp layout={LIST_TWO_COL} />
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

export default BootcampLondon
