import React from 'react'
import {
  ADVANCED_REACT_ID,
  PART_TIME,
  TECH_REACT,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import AdvancedReactPatternsSession from './sessions/AdvancedReactPatternsSession'
import AdvancedHooksAndPerfSession from './sessions/AdvancedHooksAndPerfSession'
import ReactGraphQLIntroSession from './sessions/ReactGraphQLIntroSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession2 from './sessions/TestingInReactSession2'
import DesignSystemSession from './sessions/DesignSystemSession'
import StylingInReactSession from './sessions/StylingInReactSession'

export const defaultSessionsFirstHalf = [
  { Comp: AdvancedReactPatternsSession, group: 1 },
  { Comp: AdvancedHooksAndPerfSession, group: 1 },
  { Comp: TestingIntroSession, group: 2 },
  { Comp: ReactGraphQLIntroSession, group: 2 },
]

export const defaultSessionsSecondHalf = [
  { Comp: TestingInReactSession2, group: 2 },
  { Comp: StylingInReactSession, group: 3 },
  { Comp: DesignSystemSession, group: 3 },
]

const trainingInstanceTypeName = PART_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = ADVANCED_REACT_ID

// function createTrainingTabName({ trainingId, trainingInstanceTypeName }) {
//   return `${trainingId}${trainingInstanceTypeName}`
// }

const CurriculumAdvancedReactPartTime = ({
  // toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT_PART_TIME}`,
  toggleNavigateTo = `/react/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
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
      title="Advanced React Part-time Training Outline"
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      trainingId={trainingId}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length + initialIndex)
      )}
    />
  )
}

export default CurriculumAdvancedReactPartTime
