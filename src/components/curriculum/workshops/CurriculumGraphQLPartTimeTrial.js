import React from 'react'
import Section from '../CurriculumSection'
import Curriculum from '../Curriculum'
import { GRAPHQL_WORKSHOP } from '../../../config/data'
import ThinkingInGraphQLSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from '../sessions/graphql/server/ThinkingInGraphQLSession'
import { TargetAudienceList } from '../CurriculumGraphQLBootcamp'
import Ul from '../../layout/Ul'

const CurriculumGraphQLPartTimeTrial = ({
  showTitle = true,
  section = {},
  ...rest
}) => (
  <Curriculum
    title={showTitle ? 'GraphQL Trial Outline' : ''}
    defaultLearningObjectivesIsOpen
    {...rest}
    firstHalf={
      <Section type={GRAPHQL_WORKSHOP} {...section}>
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

export default CurriculumGraphQLPartTimeTrial
