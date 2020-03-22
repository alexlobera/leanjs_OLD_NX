import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
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
  REACT_FUNDAMENTALS_ID,
  FULL_TIME_REACT_ID,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { REACT_FUNDAMENTALS, TECH_REACT } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'

const ReactFundamentals = ({ path, trainings }) => {
  const upcomingFundamentalsTrainings = selectUpcomingTrainings({
    trainingId: REACT_FUNDAMENTALS_ID,
    trainingTypeId: FULL_TIME_REACT_ID,
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
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/react', label: 'React' },
          { to: '/react/training/', label: 'Training' },
          {
            to: path,
            label: 'Fundamentals',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['React Redux Fundamentals']}
        subtitle="In 3 days, our coaches will work with you to help you learn the React fundamentals needed to develop React apps the right way"
        bgImageName={BOOTCAMP}
        links={header.landingPageLinks.links}
        type={REACT_FUNDAMENTALS}
      />
      <TopSection>
        <Segment>
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
              Is the React Fundamentals training right for me?
            </H2>
            <Ul>
              <Li>
                <strong>Not for beginners!</strong> Ideal for experienced
                programmers with at least 1 year's experience with JavaScript
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
}

export default ReactFundamentals
