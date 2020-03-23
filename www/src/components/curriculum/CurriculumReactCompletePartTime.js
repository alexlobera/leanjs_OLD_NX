import React from 'react'
import { COMPLETE_REACT_PART_TIME } from '../../config/data'
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

const type = COMPLETE_REACT_PART_TIME

const CurriculumReactCompletePartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${type}`,
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
    type,
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="Complete Part-time React Training Outline"
      training={training}
      type={type}
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
