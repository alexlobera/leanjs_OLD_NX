import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumOneDayRedux } from 'src/components/curriculum/workshops'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'

const ReduxWorkshopLanding = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5cffb4e806051b7d3bcb0cee',
      })
      return (
        <React.Fragment>
          <Helmet
            title="Redux Workshop"
            meta={[
              {
                name: 'description',
                content: '1-day React-Redux Workshops.',
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
                to: path,
                label: 'Redux',
              },
            ]}
          />
          <Header
            titleLines={['Redux']}
            subtitle="Learn how Redux and React work together in practice, from Redux fundamentals and FP through to Redux middlewares"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={LONDON_BOOTCAMP}
            type={REACT_WORKSHOP}
            training={training}
          />
          <TopSection top>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumOneDayRedux layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </TopSection>

          <Section>
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
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <Li>
                    A developer with experience in JS and with an understanding
                    of React?
                  </Li>
                  <Li>
                    Interested in understanding how Redux solves state
                    management issues in React and best practice implementations
                    and patterns?
                  </Li>
                  <Li>
                    Looking to gain an in-depth understanding that will allow
                    you to apply Redux to a large scale React appliaction or
                    build upon an existing one.
                  </Li>
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for React beginners!</H3>
                <P>
                  This is not a learn-to-code workshop. If you want to learn to
                  code, we recommend checking out{' '}
                  <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                    Free Code Camp
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
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default ReduxWorkshopLanding
