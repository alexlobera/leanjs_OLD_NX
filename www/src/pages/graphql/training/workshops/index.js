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
import CurriculumGraphQLWorkshops from 'src/components/curriculum/CurriculumGraphQLWorkshops'
import Header from 'src/components/layout/Header'
import { LIGHT_PINK } from 'src/config/styles'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { GRAPHQL_WORKSHOP, TECH_GRAPHQL } from 'src/config/data'
import BlogSection from 'src/components/blog/BlogSection'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL Workshops | React GraphQL Academy',
  description:
    'Interested in GraphQL workshops? React GraphQL Academy offers specialist GraphQL workshops, focussing on one specific part of the GraphQL ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const Bootcamps = ({ path, trainings }) => {
  const allGraphQLWorkshops = selectUpcomingTrainings({
    trainings,
    trainingTypeId: 'TODO_FULL_TIME_GRAPHQL_ID',
    trainingId: 'TODO',
  })
  const nextTraining = selectNthTraining({
    trainings: allGraphQLWorkshops,
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
        {createMetas(metas)}
      </Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          {
            to: '/graphql',
            label: 'GraphQL',
          },
          {
            to: '/graphql/training/',
            label: 'Training',
          },
          {
            to: path,
            label: 'Workshops',
          },
        ]}
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        titleLines={['1-Day GraphQL Workshops']}
        subtitle="Intense, 1-day workshops that focusses on one specific part of GraphQL - all delivered by industry experts"
        bgImageName={BOOTCAMP}
        links={[
          {
            text: 'Workshop offerings',
            to: '#curriculum',
          },
          {
            text: 'Upcoming workshops',
            to: '#upcoming-courses',
          },
          {
            text: 'Is it right for me?',
            to: '#target-audience',
          },
        ]}
        type={GRAPHQL_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLWorkshops trainings={allGraphQLWorkshops} />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              type={GRAPHQL_WORKSHOP}
              quote="Developing at my company for 2 years I hadn't touched React. The Bootcamp works because you're able ask questions - it's better than watching a video."
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="CP422OORbPA"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2>
              <Link to="#target-audience" name="target-audience" />
              Are these GraphQL workshops right for me?
            </H2>
            <Ul>
              <Li>Extremely rapid, intense learning</Li>
              <Li>
                Ideal for experienced programmers familiar with good practices.
              </Li>
              <Li>Not for beginner devs!</Li>
              <Li>
                Small classes focused on one topic with expert developer coaches
              </Li>
              <Li>
                Hands-on project-based training - most of the time you'll be
                coding.
              </Li>
              <Li>
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul>
            <P>
              {nextTraining && (
                <LinkButton variant="primary" to={nextTraining.toPath}>
                  Next workshop:{' '}
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
      <BlogSection tags={['graphql']} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default Bootcamps
