import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumOneDayStyling } from 'src/components/curriculum/workshops'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  AlternativeTrainings,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ONE_DAY_WORKSHOP,
  GRAPHQL_CLIENT,
  REACT_FUNDAMENTALS,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'Design System Workshop London | React GraphQL Academy',
  description:
    'Interested in Design Systems? React GraphQL Academy offers London Design Systems in React workshops, focussing on the design part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const StylingDesignSystemWorkshop = () => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const bootCampTrainings = selectUpcomingTrainings({
        trainings,
        type: ONE_DAY_WORKSHOP,
        city: LONDON,
      })
      const training = selectNthTraining({
        trainings: bootCampTrainings,
      })
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [REACT_FUNDAMENTALS, GRAPHQL_CLIENT],
      })
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: '/react/training/workshops/design-system-styling-in-react',
                label: 'Design Systems and Styling in React',
              },
              {
                to:
                  '/react/training/workshops/design-system-styling-in-react/london',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['Design Systems and Styling in React - London']}
            subtitle="See how React can look gorgeous and encourage design consistency"
            links={header.landingTraining.links}
            bgImageName={LONDON_BOOTCAMP}
            type={ONE_DAY_WORKSHOP}
            training={training}
            showInfoBox={true}
          />
          <TopSection xsBgDark>
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

                    <Video youtubeId="CP422OORbPA" />
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
                    quote="This course has taught me not just the 'how' but WHY React is good..."
                    fullname="Jim Plimmer"
                    job="Developer"
                    company="Conversion.com"
                    videoUrl="nIK8ouQp17s"
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
                    <Li>
                      A developer or designer with experience building React
                      components and using CSS?
                    </Li>
                    <Li>
                      A developer or designer interested in building scalable
                      and reusable UIs for big React projects?
                    </Li>
                    <Li>
                      Not satisfied with the Designer/Developer handover in
                      real-world React projects?
                    </Li>
                    <Li>
                      A designer that builds React components and interacts with
                      developers.
                    </Li>
                  </Ul>
                  <P>
                    If you've said 'yes' to these, this workshop could be for
                    you!
                  </P>
                  <P>
                    If you're a developer who's not yet familar with React, we
                    recommend first attending the{' '}
                    <Link to="/react/training/react-fundamentals/">
                      React Fundamentals Course.
                    </Link>
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
                    <CurriculumOneDayStyling layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AlternativeTrainings trainings={crossSellTrainings} />
                </Col>
              </Row>
            </Grid>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default StylingDesignSystemWorkshop
