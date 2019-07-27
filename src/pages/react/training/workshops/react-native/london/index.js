import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactNative } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import { Link, Breadcrumb } from 'src/components/navigation'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
  TrainingDetails,
  HORACIO_HERRERA,
  ALEX_LOBERA,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { REACT_NATIVE, LONDON } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const upcomingNativeTrainings = selectUpcomingTrainings({
        trainings,
        type: REACT_NATIVE,
        city: LONDON,
      })
      const training =
        selectNthTraining({ trainings: upcomingNativeTrainings, nth }) || {}
      return (
        <React.Fragment>
          <Helmet
            title="React Native Workshops London"
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
                  '1-day React Native Workshops in London from industry experts.',
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
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[`1-day React Native Workshop - London`]}
            subtitle="Take your React developer career to the next level by<br />learning React Native in London, in only one day. "
            links={header.landingTraining.links}
            bgImageName={BOOTCAMP}
            type={REACT_NATIVE}
            training={training}
            showInfoBox={true}
          />
          <TopSection variant="dark" top>
            <Grid>
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
              <Card>
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumReactNative layout={LIST_TWO_COL} />
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
