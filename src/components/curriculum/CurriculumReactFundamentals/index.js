import React from 'react'

import { REACT_FUNDAMENTALS } from '../../../config/data'
import Curriculum, { renderSection } from '../Curriculum'
import { sessionsFirstHalf as sessionsFirstHalfBootcamp } from '../CurriculumReactBootcamp'

const CurriculumReactFundamentals = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_FUNDAMENTALS}`,
  training,
  section = {},
  ...rest
}) => {
  const type = REACT_FUNDAMENTALS
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    sectionProps,
  }

  return (
    <Curriculum
      title="React Fundamentals Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalfBootcamp.map(
        renderSection(renderSectionArgs)
      )}
    />
  )
}

export default CurriculumReactFundamentals
