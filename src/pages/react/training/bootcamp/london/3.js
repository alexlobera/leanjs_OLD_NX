import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumReactBootcamp } from 'src/components/curriculum'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import { BOOTCAMP_COLLAB } from 'src/config/images'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  HORACIO_HERRERA,
  WILL_VOELCKER,
  ALEX_LOBERA,
  RICHARD_MOSS,
  selectNthTraining,
  selectUpcomingTrainings,
  getUpcomingTrainingsByType,
  AttendeeQuote,
} from 'src/components/training'
import { AlternativeBootcampTrainings } from 'src/components/training/AlternativeTrainings'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  REACT_BOOTCAMP,
  ONE_DAY_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_BOOTCAMP,
  LONDON,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils'

const metas = {
  title: 'React Bootcamp in London | React GraphQL Academy',
  description:
    'Interested in a React London bootcamp? Take a deep dive into the React ecosystem and become a confident React developer with our React bootcamp London.',
  image: BOOTCAMP_COLLAB,
  type: 'website',
}

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
        nth: 3,
      })

      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            link={[
              {
                rel: 'canonical',
                href: `https://reactgraphql.academy/react/training/bootcamp/london`,
              },
            ]}
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
              {
                to: '/react/training/bootcamp',
                label: 'Bootcamp',
              },
              {
                to: '/react/training/bootcamp/london/3',
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={['React & Redux Bootcamp - London']}
            subtitle="Take your dev career to the next level by mastering<br />React and Redux - in just a few days!"
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
                  <Col md={6} lg={5} lgOffset={1}>
                    <PaymentSection
                      training={training}
                      trainingError={trainingError}
                      trainingLoading={trainingLoading}
                      financeAvailable
                    />
                  </Col>
                  <Col md={6} lg={4} lgOffset={1}>
                    <H4>Lara's student experience</H4>
                    <Video youtubeId="_8Xox79wE9Q" />
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
              <Card border="shadow">
                <Row>
                  <Col lg={10} lgOffset={1}>
                    <CurriculumReactBootcamp layout={LIST_TWO_COL} />
                  </Col>
                </Row>
              </Card>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row>
                <Col md={5} mdOffset={1}>
                  <AttendeeQuote
                    small
                    quote="At the end of course, you have a finished project. The networking also, [students] share jobs on the [alumni] Slack channel."
                    fullname="Rafa Fraga"
                    job="Software Engineer"
                    videoUrl="pLl8uuLvKWA"
                  />
                </Col>
                <Col md={4} lgOffset={1}>
                  <H2Ref>
                    Is this React bootcamp right for me? Are you...{' '}
                    <Link to="#target-audience" name="target-audience">
                      #
                    </Link>
                  </H2Ref>
                  <Ul>
                    <Li>
                      A developer with 1+ year of development under your belt
                      using JavaScript?
                    </Li>
                    <Li>
                      Familiar with front-end technologies like JavaScript, CSS,
                      and HTML?
                    </Li>
                    <Li>
                      Taking a step forward to become a React JS Specialist able
                      to make critical decisions about the architecture of a
                      React application.
                    </Li>
                    <Li>
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
                    <strong>We do not run learn-to-code bootcamps</strong>.
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section>
            <Grid>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <AlternativeBootcampTrainings trainings={trainings} />
                </Col>
              </Row>
            </Grid>
          </Section>
          <BlogSection tags={['react', 'beginner']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default BootcampLondon
