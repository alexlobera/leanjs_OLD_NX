import React from 'react'

import { BOOTCAMP } from 'src/../images/imageNames.js'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumGraphQL } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import { HideComponentsUsingCss } from 'src/components/utils'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB, CATALIN } from 'src/config/images'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import {
  BulletIcon,
  CodeIcon,
  CollabsIcon,
  SpannerIcon,
} from 'src/components/icons'
import { Image } from 'src/components/elements'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const BootcampLondon = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingGqlTrainings = selectUpcomingTrainings({
        trainings,
        type: GRAPHQL_BOOTCAMP,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingGqlTrainings }) || {}
      return (
        <React.Fragment>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/graphql', label: 'GraphQL' },
              { to: '/graphql/training', label: 'Training' },
              { to: '/graphql/training/bootcamp', label: 'Bootcamp' },
              { to: '/graphql/training/bootcamp/london', label: 'London' },
            ]}
          />
          <Header
            titleLines={['React GraphQL Bootcamp', `London`]}
            subtitle="Take your dev career to the next level by mastering<br />React and GraphQL - in just 1 week!"
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={GRAPHQL_BOOTCAMP}
            training={training}
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
                    <Video youtubeId="2-IPT7Plsfc" />
                    <TrainingDetails
                      coaches={[ALEX_LOBERA, WILL_VOELCKER, HORACIO_HERRERA]}
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
                    Is this GraphQL bootcamp right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul unstyled>
                    <Li>
                      <BulletIcon icon={CodeIcon} />
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      <BulletIcon icon={SpannerIcon} />
                      Taking a step forward to become a GraphQL Specialist able
                      to make critical decisions about the architecture of a
                      Production-ready GraphQL & React application
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
                    profilePic
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
                    <CurriculumGraphQL
                      enableToggle={true}
                      layout={LIST_TWO_COL}
                    />
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
