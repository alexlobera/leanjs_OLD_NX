import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P, H4 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumOneDayRedux } from 'src/components/curriculum/workshops'
import { Card, Video } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  TrainingDetails,
  ALEX_LOBERA,
  RICHARD_MOSS,
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
  AlternativeTrainings,
  AttendeeQuote,
} from 'src/components/training'
import header from 'src/components/layout/Header.json'
import { PaymentSection } from 'src/components/payment'
import { Link, Breadcrumb } from 'src/components/navigation'
import {
  ADVANCED_REACT,
  REACT_WORKSHOP,
  ONE_DAY_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_BOOTCAMP,
} from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const ReduxWorkshop = ({ path, pageContext: { canonicalSlug, nth = 1 } }) => (
  <Layout>
    {({ trainings, trainingLoading, trainingError }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5cffb4e806051b7d3bcb0cee',
      })
      const trainingTitle =
        training &&
        training.training &&
        training.training.description &&
        training.training.description.title
      const crossSellTrainings = selectUpcomingTrainings({
        trainings,
        types: [
          ADVANCED_REACT,
          REACT_WORKSHOP,
          ONE_DAY_WORKSHOP,
          GRAPHQL_API,
          GRAPHQL_CLIENT,
          GRAPHQL_BOOTCAMP,
        ],
        excludeTrainingId: '5cffb4e806051b7d3bcb0cee',
      })
      return (
        <React.Fragment>
          <Helmet
            title="Redux workshop london"
            link={[
              {
                rel: 'canonical',
                href: `https://reactgraphql.academy${canonicalSlug}`,
              },
            ]}
            meta={[
              {
                name: 'description',
                content: '1-day Redux Workshop in London',
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
                to: '/react/training/workshops/redux',
                label: 'Redux',
              },
              {
                to: path,
                label: 'London',
              },
            ]}
          />
          <Header
            titleLines={[`${trainingTitle || '...loading'} - London`]}
            subtitle="Learn how Redux and React work together in practice, from Redux fundamentals and FP through to Redux Middlewares"
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
                    <H4>Rafa's student experience</H4>
                    <Video youtubeId="hZZksRcqtkc" />
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
                    quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
                    fullname="Lara Ramey"
                    job="Software Developer"
                    company="Meredith Corporation"
                    videoUrl="blg40SCle7I"
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
                      A developer with experience in JavaScript and with an
                      understanding of React?
                    </Li>
                    <Li>
                      Interested in understanding Redux from top to bottom
                      including Redux Middlewares and tooling
                    </Li>
                    <Li>
                      Looking to gain an in-depth understanding that will allow
                      you to apply Redux to a large scale React appliaction or
                      build upon an existing one.
                    </Li>
                    <Li>
                      Interested in going deeper into functional programming
                      principles and how they apply to Redux
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
                    <CurriculumOneDayRedux layout={LIST_TWO_COL} />
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

ReduxWorkshop.defaultProps = {
  pageContext: {},
}

export default ReduxWorkshop
