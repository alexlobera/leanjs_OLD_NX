import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { Card, Video } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import { CurriculumAdvancedReact } from 'src/components/curriculum'
import {
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
  TrainingDetails,
  ALEX_LOBERA,
  HORACIO_HERRERA,
  RICHARD_MOSS,
  WILL_VOELCKER,
} from 'src/components/training'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { ADVANCED_REACT, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const BootcampLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingAdvancedTrainings = selectUpcomingTrainings({
        trainings,
        type: ADVANCED_REACT,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingAdvancedTrainings, nth: 2 }) ||
        {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: '/react/training/advanced',
                label: 'Advanced',
              },
              {
                to: '/react/training/advanced/london/2',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['Advanced React Training - London']}
            subtitle="Take your React career to the next level by mastering advanced React - in just 3 days!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={ADVANCED_REACT}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark top>
            <Grid>
              <Card bg="dark">
                <Row>
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingLoading={trainingLoading}
                      trainingError={trainingError}
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <Video youtubeId="yvROXLQ1jHg" />
                    <TrainingDetails
                      foodIncluded={false}
                      coaches={[
                        ALEX_LOBERA,
                        HORACIO_HERRERA,
                        RICHARD_MOSS,
                        WILL_VOELCKER,
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
                    <Image
                      src={BOOTCAMP_COLLAB}
                      width="100%"
                      alt="React GraphQL Academy coach Tiago assisting two students, inspecting their laptop screens and ready to answer their questions"
                    />
                  </Col>
                </HideComponentsUsingCss>
                <Col md={6} lg={5} lgOffset={1}>
                  <H2Ref>
                    Is this 1-day Advanced React training right for me? Are
                    you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A{' '}
                      <strong>
                        React developer with 1+ year of development
                      </strong>{' '}
                      under your belt using React?
                    </Li>
                    <Li>
                      Taking a step forward to become a{' '}
                      <strong>Senior React developer</strong> able to make
                      critical decisions about the architecture of a React
                      application.
                    </Li>
                    <Li>
                      Not satisfied with the pace of online learning and it's
                      lack of 1-on-1 mentoring?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, our{' '}
                    <strong>1-day advanced React training</strong> could be for
                    you!
                  </P>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    This is a bootcamp for React developers that are experienced
                    with React. If you don't have 1+ year of experience using
                    React we recommend you to attend our{' '}
                    <Link to="/react/training/bootcamp">React Bootcamp</Link>.
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
                    <CurriculumAdvancedReact layout={LIST_TWO_COL} />
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
