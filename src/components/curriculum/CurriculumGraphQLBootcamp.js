import React from 'react'
import NodejsSession from './sessions/graphql/server/NodejsSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import GraphQLServerRecapSession from './sessions/graphql/server/GraphQLServerRecapSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import AdvGQLQueryMutationSession from './sessions/graphql/client/AdvGQLQueryMutationSession'
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession'
import {
  LearningObjectivesList as LearningObjectivesListAPI,
  TargetAudienceList as TargetAudienceListAPI,
} from './CurriculumGraphQLAPI'
import { Li } from '../layout/Ul'

import { GRAPHQL_BOOTCAMP } from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'

export const sessionsFirstHalf = [
  {
    subTitle: 'Node.js and cloud, Thinking in GraphQL, and Schema design',
    comps: [NodejsSession, ThinkingInGraphQLSession, SchemaDesignSession],
  },
  {
    subTitle: 'Error handling, Security design, and Consolidation Project',
    comps: [ErrorAndSecuritySession, GraphQLServerRecapSession],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle:
      'GraphQL client fundamentals, Advanced queries and mutations, and Consolidation Project',
    comps: [
      GraphQLClientFundamentalsSession,
      AdvGQLQueryMutationSession,
      GraphQLClientRecapSession,
    ],
  },
]

const type = GRAPHQL_BOOTCAMP

const CurriculumGraphQLBootcamp = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${type}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    initialDayOffset: 1,
    sectionProps,
    preEvening: true,
  }

  return (
    <Curriculum
      title="GraphQL Bootcamp Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <TargetAudienceListAPI />
    <Li>A developer with some experience developing React applications?</Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>
    <LearningObjectivesListAPI />
    <Li>
      Learn how to build data-driven React apps efficiently and rapidly using
      GraphQL{' '}
    </Li>
  </React.Fragment>
)

CurriculumGraphQLBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLBootcamp
