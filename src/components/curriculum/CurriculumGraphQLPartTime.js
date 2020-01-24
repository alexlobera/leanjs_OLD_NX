import React from 'react'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import SubscriptionsSession from './sessions/graphql/server/SubscriptionsSession'
import FederationSession from './sessions/graphql/server/FederationSession'
import HasuraSession from './sessions/graphql/server/HasuraSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import IntermediateApolloClientSession from './sessions/graphql/client/IntermediateApolloClientSession'
import { GRAPHQL_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import {
  LearningObjectivesList,
  TargetAudienceList,
} from './CurriculumGraphQLBootcamp'

export const defaultSessionsFirstHalf = [
  { Comp: ThinkingInGraphQLSession },
  { Comp: SchemaDesignSession },
  { Comp: ErrorAndSecuritySession },
  { Comp: FederationSession },
]

export const defaultSessionsSecondtHalf = [
  { Comp: SubscriptionsSession },
  { Comp: HasuraSession },
  { Comp: GraphQLClientFundamentalsSession },
  { Comp: IntermediateApolloClientSession },
]

const CurriculumPartTime = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_PART_TIME}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondtHalf = defaultSessionsSecondtHalf,
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
      secondHalf={sessionsSecondtHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length)
      )}
    />
  )
}

export { LearningObjectivesList, TargetAudienceList }

CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
