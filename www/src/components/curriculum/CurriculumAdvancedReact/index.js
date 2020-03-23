import React from 'react'
import {
  ADVANCED_REACT,
  FULL_TIME,
  TECH_REACT,
  TRAINING_TYPE_HALF_CURRICULUM,
  ADVANCED_REACT_ID,
} from '../../../config/data'
import { sessionsSecondHalf as sessionsSecondHalfBootcamp } from '../CurriculumReactBootcamp'
import Curriculum, { renderSection } from '../Curriculum'

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = ADVANCED_REACT_ID

const CurriculumAdvancedReact = ({
  toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT}`,
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
    titlePrefix: 'Advanced React Day',
  }
  return (
    <Curriculum
      title="Advanced React Training Outline"
      //   training={training}
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsSecondHalfBootcamp.map(
        renderSection(renderSectionArgs)
      )}
    />
  )
}

export default CurriculumAdvancedReact
