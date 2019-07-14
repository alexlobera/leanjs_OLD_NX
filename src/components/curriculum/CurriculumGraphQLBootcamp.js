import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import GraphQLServerDayOneSessions from './sessions/GraphQLServerDayOneSessions'
import NodejsSession from './sessions/NodejsSession'
// import GraphQLServerDayTwoSessions from './sessions/GraphQLServerDayTwoSessions'
import GraphQLApolloClientDaySessions from './sessions/GraphQLApolloClientDaySessions'
import { GRAPHQL_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

const CurriculumGraphQLBootcamp = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_BOOTCAMP}`,
  showLinkToCurriculum = true,
  marketingCard,
  trainings,
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
        title="Evening pre-training: Nodejs fundamentals (optional)"
        name="day0"
        subTitle="Nodejs Fundamentals"
      >
        <NodejsSession />
      </Section>
      <Section
        {...commonProps}
        title="Day 1: GraphQL API"
        name="day1"
        subTitle="From REST to GraphQL, data sources, and security"
      >
        <GraphQLServerDayOneSessions />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      {/* <Section
        {...commonProps}
        title="Day 2: Advanced GraphQL API"
        name="day2"
        subTitle="Advanced Schema, Performance, and recap project"
      >
        <GraphQLServerDayTwoSessions />
      </Section> */}
      <Section
        {...commonProps}
        title="Day 2: GraphQL in React with Apollo Client"
        name="day2"
        subTitle="Apollo Client fundamentals, performance, testing, and tooling"
      >
        <GraphQLApolloClientDaySessions />
      </Section>
      {marketingCard}
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      GraphQL Bootcamp Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    title,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

CurriculumGraphQLBootcamp.propTypes = curriculumCommonPropTypes

export default CurriculumGraphQLBootcamp
