import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumAdvReactPatterns } from 'src/components/curriculum/workshops'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const InstancePage = ({ path, pageContext: { canonical, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5d0112d806051b7d3bcb0cf7',
      })
      const trainingTitle =
        training &&
        training.training &&
        training.training.description &&
        training.training.description.title
      return (
        <React.Fragment>
          <Helmet
            title="Advanced React Patterns, FP and Performance Workshop"
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
                  '1-day Advanced React Patterns, FP and Performance Workshop in London',
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
                to:
                  '/react/training/workshops/advanced-react-patterns-fp-performance',
                label: 'Advanced React Patterns, FP and Performance',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[`${trainingTitle || '...loading'} - London`]}
            subtitle="Supercharge your existing React skills by learning how Advanced Patterns, Functional Programming and Performance can benefit your apps"
            links={header.landingTraining.links}
            bgImageName={LONDON_BOOTCAMP}
            type={REACT_WORKSHOP}
            training={training}
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
                    <Video youtubeId="yG3H27y9F08" />
                    <TrainingDetails coaches={[ALEX_LOBERA, RICHARD_MOSS]} />
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
                    quote="[The course] has changed the way I'm going to approach things. I like the way the coaches don't spoon feed answers, which is key."
                    fullname="Jim Plimmer"
                    job="Developer"
                    company="Conversion.com"
                    videoUrl="gc4Hnb7zD5I"
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
                      A developer who is frustrated with slow performancce of
                      your creations?
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, this workshop could be for
                    you!
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
            </Grid>
          </Section>
          <Section top>
            <Grid>
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumAdvReactPatterns layout={LIST_TWO_COL} />
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
