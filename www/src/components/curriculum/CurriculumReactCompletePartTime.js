import React from 'react'
import {
  COMPLETE_REACT_PART_TIME,
  TRAINING_TYPE_FULL_CURRICULUM,
  TECH_REACT,
  BOOTCAMP_REACT_ID,
  PART_TIME,
} from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import {
  defaultSessionsFirstHalf as advDefaultSessionsFirstHalf,
  defaultSessionsSecondHalf as advDefaultSessionsSecondHalf,
} from './CurriculumAdvancedReactPartTime'
import {
  defaultSessionsFirstHalf as fundamentalsDefaultSessionsFirstHalf,
  defaultSessionsSecondHalf as fundamentalsDefaultSessionsSecondHalf,
} from './CurriculumReactFundamentalsPartTime'
export const defaultSessionsFirstHalf = [
  ...fundamentalsDefaultSessionsFirstHalf,
  ...fundamentalsDefaultSessionsSecondHalf,
]

export const defaultSessionsSecondHalf = [
  ...advDefaultSessionsFirstHalf,
  ...advDefaultSessionsSecondHalf,
]

const trainingInstanceTypeName = PART_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_FULL_CURRICULUM
const trainingId = BOOTCAMP_REACT_ID

const CurriculumReactCompletePartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${COMPLETE_REACT_PART_TIME}`,
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
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="Complete React Part-time Training Outline"
      training={training}
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length + initialIndex)
      )}
    />
  )
}

export default CurriculumReactCompletePartTime
