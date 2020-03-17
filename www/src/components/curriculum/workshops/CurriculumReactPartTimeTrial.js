import React from 'react'
import Section from '../CurriculumSection'
import Curriculum from '../Curriculum'
import { REACT_WORKSHOP } from '../../../config/data'
import ThinkingInReactSession, {
  LearningObjectives as ThinkingInLearningObjectives,
} from '../sessions/ThinkingInReactSession'
import TargetAudienceList from '../CurriculumReactFundamentals/TargetAudienceList'
import Ul from '../../layout/Ul'

const CurriculumReactPartTimeTrial = ({
  showTitle = true,
  section = {},
  ...rest
}) => (
  <Curriculum
    title={showTitle ? 'React Trial Outline' : ''}
    defaultLearningObjectivesIsOpen
    {...rest}
    firstHalf={
      <Section type={REACT_WORKSHOP} {...section}>
        <ThinkingInReactSession title="" />
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

export default CurriculumReactPartTimeTrial
