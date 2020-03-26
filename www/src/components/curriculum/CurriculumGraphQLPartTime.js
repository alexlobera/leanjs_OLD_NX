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
import {
  PART_TIME,
  TECH_GRAPHQL,
  TRAINING_TYPE_HALF_CURRICULUM,
  GRAPHQL_API_ID,
} from '../../config/data'
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
]

const trainingInstanceTypeName = PART_TIME
const tech = TECH_GRAPHQL
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = GRAPHQL_API_ID

const CurriculumGraphQLPartTime = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondtHalf = defaultSessionsSecondtHalf,
  ...rest
}) => {
  const initialIndex = 0

  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="GraphQL Part-time Training Outline"
      trainingId={trainingId}
      training={training}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
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

CurriculumGraphQLPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLPartTime
