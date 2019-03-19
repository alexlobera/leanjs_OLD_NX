import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import GraphQLDayOneSessions from './sessions/GraphQLDayOneSessions'
import GraphQLDayTwoSessions from './sessions/GraphQLDayTwoSessions'
import GraphQLDayThreeSessions from './sessions/GraphQLDayThreeSessions'
import GraphQLDayFourSessions from './sessions/GraphQLDayFourSessions'
import GraphQLDayFiveSessions from './sessions/GraphQLDayFiveSessions'

import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { GRAPHQL_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'

const CurriculumGraphQL = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/curriculum?tab=${GRAPHQL_BOOTCAMP}`,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = GRAPHQL_BOOTCAMP
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="GraphQL API Fundamentals"
        name="day1"
        subTitle="Nodejs and GraphQL fundamentals"
      >
        <GraphQLDayOneSessions />
      </Section>
      <Section
        {...commonProps}
        title="Day 2: Advanced GraphQL API"
        name="day2"
        subTitle="Implement a GraphQL API, Advanced Schema, Performance"
      >
        <GraphQLDayTwoSessions />
      </Section>
      <Section
        {...commonProps}
        title="Day 3: Real-world GraphQL API"
        name="day3"
        subTitle="Data sources and GraphQL in production considerations"
      >
        <GraphQLDayThreeSessions />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 5: Production-ready GraphQL & React"
        name="day5"
        subTitle="Testing GraphQL, replacing redux with GraphQL and production tooling"
      >
        <GraphQLDayFiveSessions />
      </Section>
      <Section
        {...commonProps}
        title="Day 4: GraphQL & React"
        name="day4"
        subTitle="Apollo Client, Advanced Queries and mutations"
      >
        <GraphQLDayFourSessions />
      </Section>
      {showLinkToCurriculum ? (
        <SectionCTA>
          <LinkButton secondary to="/curriculum">
            Full curriculum >>
          </LinkButton>
        </SectionCTA>
      ) : null}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lgOffset={layout != LIST_TWO_COL && 1}>
            <H2Ref>
              GraphQL Bootcamp Curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({ firstHalf, secondHalf, layout, type })}
    </React.Fragment>
  )
}

export default CurriculumGraphQL
