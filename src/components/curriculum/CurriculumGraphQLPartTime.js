import React from 'react'
import NodejsSession from './sessions/graphql/server/NodejsSession'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import GraphQLServerRecapSession from './sessions/graphql/server/GraphQLServerRecapSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import AdvGQLQueryMutationSession from './sessions/graphql/client/AdvGQLQueryMutationSession'
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession'
import { GRAPHQL_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import {
  LearningObjectivesList,
  TargetAudienceList,
} from './CurriculumGraphQLBootcamp'

const defaultSessionsFirstHalf = [
  { Comp: NodejsSession, group: 1 },
  { Comp: ThinkingInGraphQLSession, group: 1 },
  { Comp: SchemaDesignSession, group: 2 },
  { Comp: ErrorAndSecuritySession, group: 2 },
  { Comp: GraphQLServerRecapSession, group: 3 },
]

const CurriculumPartTime = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_PART_TIME}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  ...rest
}) => {
  const type = GRAPHQL_PART_TIME
  const initialIndex = 0

  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="GraphQL Part-time course curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
    />
  )
}

export { LearningObjectivesList, TargetAudienceList }

CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
