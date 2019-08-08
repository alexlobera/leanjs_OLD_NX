import React from 'react'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref } from '../../text'
import selectCurriculumLayout from '../selectCurriculumLayout'

const Curriculum = ({
  title,
  layout,
  trainings,
  trainingId,
  firstHalf,
  secondHalf,
}) => {
  const type = REACT_WORKSHOP

  const curriculumTitle = title ? (
    <H2Ref>
      {title}{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    title: curriculumTitle,
    layout,
    type,
    trainings,
    trainingId,
  })
}

export default Curriculum
