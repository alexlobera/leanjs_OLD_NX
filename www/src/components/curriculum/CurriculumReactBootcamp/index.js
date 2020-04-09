import React from 'react'
import { sessionsFirstHalf, sessionsSecondHalf } from './sessions'
import {
  FULL_TIME,
  TECH_REACT,
  TRAINING_TYPE_FULL_CURRICULUM,
  REACT_BOOTCAMP_ID,
} from '../../../config/data'
import Curriculum, { renderSection } from '../Curriculum'

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_FULL_CURRICULUM
const trainingId = REACT_BOOTCAMP_ID

const CurriculumReactBootcamp = ({
  toggleNavigateTo = `/react/curriculum?tab=${trainingId}${trainingInstanceTypeName}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
    trainingId,
  }
  const renderSectionArgs = {
    training,
    sectionProps,
  }

  return (
    <Curriculum
      title="React Redux Bootcamp Outline"
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
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

export default CurriculumReactBootcamp
