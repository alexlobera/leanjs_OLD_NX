import React, { useState } from 'react'
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from './sessions/graphql/server/ThinkingInGraphQLSession'
import SchemaDesignSession, {
  LearningObjectives as SchemaDesignLearningObjectives,
} from './sessions/graphql/server/SchemaDesignSession'
import ErrorAndSecuritySession, {
  LearningObjectives as ErrorAndSecurityLearningObjectives,
} from './sessions/graphql/server/ErrorAndSecuritySession'
import SubscriptionsSession, {
  LearningObjectives as SubscriptionsLearningObjectives,
} from './sessions/graphql/server/SubscriptionsSession'
import FederationSession, {
  LearningObjectives as FederationLearningObjectives,
} from './sessions/graphql/server/FederationSession'
import HasuraSession, {
  LearningObjectives as HasuraLearningObjectives,
} from './sessions/graphql/server/HasuraSession'
// import GraphQLClientFundamentalsSession, {
//   LearningObjectives as GraphQLClientLearningObjectives,
// } from './sessions/graphql/client/GraphQLClientFundamentalsSession'
// import AdvancedApolloClientSession, {
//   LearningObjectives as AdvancedApolloClientLearningObjectives,
// } from './sessions/graphql/client/AdvancedApolloClientSession'
import { GRAPHQL_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import { TargetAudienceList } from './CurriculumGraphQLBootcamp'
import Ul from '../layout/Ul'
import P from '../text/P'
import Button from '../buttons/Button'

export const defaultSessionsFirstHalf = [
  { Comp: ThinkingInGraphQLSession },
  { Comp: SchemaDesignSession },
  { Comp: ErrorAndSecuritySession },
]

export const defaultSessionsSecondtHalf = [
  { Comp: FederationSession },
  { Comp: SubscriptionsSession },
  { Comp: HasuraSession },
  //{ Comp: GraphQLClientFundamentalsSession },
  //{ Comp: AdvancedApolloClientSession },
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
      title="GraphQL Part-time Training Course Outline"
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

export { TargetAudienceList }

export const LearningObjectives = ({ showAllButton = true }) => {
  const [showAll, setShowAll] = useState(!showAllButton)
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <>
      <Ul>
        <ThinkingInLearningObjectives showAll={showAll} />
        <SchemaDesignLearningObjectives showAll={showAll} />
        <ErrorAndSecurityLearningObjectives showAll={showAll} />
        <SubscriptionsLearningObjectives showAll={showAll} />
        <FederationLearningObjectives showAll={showAll} />
        <HasuraLearningObjectives showAll={showAll} />
        {/* <GraphQLClientLearningObjectives showAll={showAll} />
        <AdvancedApolloClientLearningObjectives showAll={showAll} /> */}
      </Ul>

      {showAllButton && (
        <P>
          <Button
            className="show-all-learning-objectives"
            onClick={toggleShowAll}
          >
            {showAll
              ? `Hide learning objectives`
              : `Show all the learning objectives`}
          </Button>
        </P>
      )}
    </>
  )
}

CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
