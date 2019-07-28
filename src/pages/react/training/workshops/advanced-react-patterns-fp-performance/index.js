import React from 'react'
import Helmet from 'react-helmet'

import { LONDON_BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CurriculumAdvReactPatterns } from 'src/components/curriculum/workshops'
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

const AdvancedReactWorkshop = () => (
  <Layout>
    {({ trainings }) => {
      const training = getNextTrainingByTrainingId({
        trainings,
        trainingId: '5d0112d806051b7d3bcb0cf7',
      })
      return (
        <React.Fragment>
          <Helmet
            title="Advanced React Patterns, FP and Performance Workshop"
            meta={[
              {
                name: 'description',
                content:
                  '1-day Advanced React Patterns, FP and Performance Workshop',
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
            ]}
          />
          <Header
            titleLines={['Advanced React Patterns, FP and Performance']}
            subtitle="Understand how to use and apply React patterns including, HOC, render props and perpendicular composition with hooks"
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
                  <CurriculumAdvReactPatterns layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns..."
                  fullname="Lara Ramey"
                  job="Software Developer"
                  company="Meredith Corporation"
                  youtubeId="blg40SCle7I"
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
                    A developer with previous experience building React apps?
                  </Li>
                  <Li>
                    A developer who wants to upskill or specialise in advanced
                    React skills?
                  </Li>
                  <Li>
                    A developer who is frustrated with slow performancce of your
                    creations?
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

export default AdvancedReactWorkshop
