import React from 'react'

import { Li } from '../layout/Ul'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section from './CurriculumSection'
import GraphQLServerDayOneSessions from './sessions/GraphQLServerDayOneSessions'
import NodejsSession from './sessions/NodejsSession'
// import GraphQLServerDayTwoSessions from './sessions/GraphQLServerDayTwoSessions'
import { GRAPHQL_API } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'

const CurriculumGraphQLAPI = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_API}`,
  showLinkToCurriculum = true,
  marketingCard,
  trainings,
}) => {
  const type = GRAPHQL_API
  const commonProps = {
    enableToggle,
    toggleNavigateTo,
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
        title="Day 1: GraphQL Foundation"
        name="day1"
        subTitle="From REST to GraphQL: schema, error, and security design"
      >
        <GraphQLServerDayOneSessions />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      {/* 
      Temporarily disabled
      <Section
        {...commonProps}
        title="Day 2: Advanced GraphQL API"
        name="day2"
        subTitle="Advanced Schema, Performance, and recap project"
      >
        <GraphQLServerDayTwoSessions />
      </Section> */}
      {marketingCard ? React.cloneElement(marketingCard, { type }) : null}
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      GraphQL API Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    title,
    type,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      For working developers, experience with JavaScript and npm - not for
      beginners!
    </Li>
    <Li>Perfect for developers with 1+ year building backends and REST APIs</Li>
    <Li>Build production ready apps leverging GraphQL.</Li>
  </React.Fragment>
)

export default CurriculumGraphQLAPI
