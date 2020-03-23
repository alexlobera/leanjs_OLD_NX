import React from 'react'

import {
  REACT_FUNDAMENTALS,
  FULL_TIME,
  TECH_REACT,
  TRAINING_TYPE_HALF_CURRICULUM,
  REACT_FUNDAMENTALS_ID,
} from '../../../config/data'
import Curriculum, { renderSection } from '../Curriculum'
import { sessionsFirstHalf as sessionsFirstHalfBootcamp } from '../CurriculumReactBootcamp'

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = REACT_FUNDAMENTALS_ID

const CurriculumReactFundamentals = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_FUNDAMENTALS}`,
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
  }
  const renderSectionArgs = {
    training,
    sectionProps,
  }

  return (
    <Curriculum
      title="React Fundamentals Training Outline"
      //   training={training}
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalfBootcamp.map(
        renderSection(renderSectionArgs)
      )}
    />
  )
}

export default CurriculumReactFundamentals
