import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { formatUTC } from 'src/components/utils'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumReactFundamentals from 'src/components/curriculum/CurriculumReactFundamentals'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_FUNDAMENTALS } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'

const ReactFundamentals = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const upcomingFundamentalsTrainings = selectUpcomingTrainings({
        type: REACT_FUNDAMENTALS,
        trainings,
      })
      const nextTraining = selectNthTraining({
        trainings: upcomingFundamentalsTrainings,
      })
      return (
        <React.Fragment>
          <Helmet
            title="React Fundamentals"
            meta={[
              {
                name: 'description',
                content:
                  'React Fundamentals - learn in 3 days the React fundamentals needed to develop React apps the right way',
              },
            ]}
          />
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              {
                to: path,
                label: 'React Fundamentals',
              },
            ]}
          />
          <Header
            titleLines={['React Redux Fundamentals']}
            subtitle="In 3 days, our coaches will work with you to help you learn the React fundamentals needed to develop React apps the right way"
            bgImageName={BOOTCAMP}
            links={header.landingPageLinks.links}
            type={REACT_FUNDAMENTALS}
          />
          <TopSection>
            <Segment>
              <Link to="#upcoming-courses" name="upcoming-courses" />
              <CurriculumReactFundamentals
                trainings={upcomingFundamentalsTrainings}
              />
            </Segment>
          </TopSection>
          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="The most complicated thing in React is set up, I learnt that and now it's easy for me to create an app very quickly."
                  fullname="Rafa Fraga"
                  job="Software Engineer"
                  // need to get the company name!
                  youtubeId="-13ktI9oXIY"
                />
              </Col>

              <Col md={4} mdOffset={1}>
                <H2>
                  <Link to="#target-audience" name="target-audience" />
                  Is the React Fundamentals course right for me?
                </H2>
                <Ul>
                  <Li>
                    <strong>Not for beginners!</strong> Ideal for experienced
                    programmers with at least 1 year's experience with
                    JavaScript
                  </Li>
                  <Li>Extremely rapid, intense learning</Li>
                  <Li>Small classes with expert devs</Li>
                  <Li>
                    Hands-on project-based training - most of the time you'll be
                    coding.
                  </Li>
                </Ul>
                <P>
                  {nextTraining && (
                    <LinkButton variant="primary" to={nextTraining.toPath}>
                      Next training:{' '}
                      {formatUTC(
                        nextTraining.startDate,
                        nextTraining.utcOffset,
                        'D MMM'
                      )}
                      , {nextTraining.city}
                    </LinkButton>
                  )}
                </P>
              </Col>
            </Row>
          </Section>
          <TrustedBySection />
          <BlogSection tags={['react', 'beginner']} />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default ReactFundamentals
