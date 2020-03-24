import React from 'react'
import Section from './CurriculumSection'
import Curriculum from './Curriculum'
import {
  TRAINING_TYPE_WORKSHOP,
  GRAPHQL_TRIAL_ID,
  TECH_GRAPHQL,
} from '../../config/data'
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from './sessions/graphql/server/ThinkingInGraphQLSession'
import { TargetAudienceList } from './CurriculumGraphQLBootcamp'
import Ul from '../layout/Ul'

const trainingId = GRAPHQL_TRIAL_ID

const CurriculumGraphQLTrial = ({
  showTitle = true,
  section = {},
  ...rest
}) => (
  <Curriculum
    title={showTitle ? 'GraphQL Trial Outline' : ''}
    defaultLearningObjectivesIsOpen
    trainingId={trainingId}
    trainingType={TRAINING_TYPE_WORKSHOP}
    tech={TECH_GRAPHQL}
    {...rest}
    firstHalf={
      <Section
        tech={TECH_GRAPHQL}
        trainingType={TRAINING_TYPE_WORKSHOP}
        {...section}
      >
        <ThinkingInGraphQLSession title="" />
      </Section>
    }
  />
)

export { TargetAudienceList }

export const LearningObjectives = () => (
  <Ul>
    <ThinkingInLearningObjectives showAll />
  </Ul>
)

export default CurriculumGraphQLTrial
