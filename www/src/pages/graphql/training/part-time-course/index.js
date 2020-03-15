import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { P, H2Ref } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumGraphQLPartTime from 'src/components/curriculum/CurriculumGraphQLPartTime'
import Header from 'src/components/layout/Header'
import { LIGHT_PINK } from 'src/config/styles'
import {
  TrustedBySection,
  UpcomingTrainingSection,
  AttendeeQuote,
} from 'src/components/training'
import selectUpcomingTrainings from 'src/components/training/selectUpcomingTrainings'
import { Segment } from 'src/components/elements'
import { WHY_GQLU_ACADEMY } from 'src/config/images.js'
import { GRAPHQL_PART_TIME, TECH_GRAPHQL } from 'src/config/data'
import header from 'src/components/layout/Header.json'
import BlogSection from 'src/components/blog/BlogSection'
import { createMetas } from 'src/components/utils'

const metas = {
  title: 'GraphQL Part-time Training | React GraphQL Academy',
  description:
    'Interested in GraphQL part-time training? React GraphQL Academy offers in-person GraphQL part-time training from industry experts. Contact us now!',
  image: WHY_GQLU_ACADEMY,
  type: 'website',
}

const GraphQL = ({ path, trainings }) => {
  const upcomingGraphQLTrainings = selectUpcomingTrainings({
    trainings,
    type: GRAPHQL_PART_TIME,
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
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: '/graphql/training', label: 'Training' },
          { to: path, label: 'Part-time' },
        ]}
        titleLines={[
          'Take your dev career further with our',
          'GraphQL part-time training',
        ]}
        subtitle="In-person GraphQL part-time training from industry experts"
        bgImageName={BOOTCAMP}
        links={header.landingPageLinks.links}
        type={GRAPHQL_PART_TIME}
      />
      <TopSection>
        <Segment>
          <CurriculumGraphQLPartTime
            trainings={upcomingGraphQLTrainings}
            enableToggle
            isOpen={false}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              type={GRAPHQL_PART_TIME}
              quote="It's nice to have people there who know their stuff. I feel like [the training] has definitely improved my career trajectory"
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="tYhT8F82-z8"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2Ref>
              Is this GraphQL part-time training right for me?
              <Link to="#target-audience" name="target-audience">
                #
              </Link>
            </H2Ref>
            <Ul>
              <Li>
                For working developers - <strong>not for beginners!</strong>
              </Li>
              <Li>
                <strong>Hands-on practical</strong> training.
              </Li>
              <Li>
                <strong>Build production ready</strong> apps leverging GraphQL.
              </Li>
              <Li>
                Expert coaches who are <strong>working developers</strong>
              </Li>
              <Li>
                Learn <strong>best practices</strong>.
              </Li>
              <Li>
                Alumni <strong>community</strong>.
              </Li>
            </Ul>
            <P />
          </Col>
        </Row>
      </Section>

      <TrustedBySection />
      <BlogSection tags={['graphql', 'beginner']} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export default GraphQL
