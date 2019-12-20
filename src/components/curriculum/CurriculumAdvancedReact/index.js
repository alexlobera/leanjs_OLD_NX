import React from 'react'
import { ADVANCED_REACT } from '../../../config/data'
import { sessionsSecondHalf as sessionsSecondHalfBootcamp } from '../CurriculumReactBootcamp'
import Curriculum, { renderSection } from '../Curriculum'

const CurriculumAdvancedReact = ({
  toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT}`,
  training,
  section = {},
  ...rest
}) => {
  const type = ADVANCED_REACT
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionArgs = {
    training,
    sectionProps,
    titlePrefix: 'Advanced React Day',
  }
  return (
    <Curriculum
      title="Advanced React Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsSecondHalfBootcamp.map(
        renderSection(renderSectionArgs)
      )}
    />
  )
}

export default CurriculumAdvancedReact
