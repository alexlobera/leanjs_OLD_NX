import React from 'react'
import { Li } from '../layout/Ul'

import { REACT_FUNDAMENTALS } from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'
import { sessionsFirstHalf as sessionsFirstHalfBootcamp } from './CurriculumReactBootcamp'
import { LearningObjectivesList } from './CurriculumReactPartTime'

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
    preEvening: true,
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

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer{' '}
      <strong>
        interested in starting quickly your career as a React developer
      </strong>
      .
    </Li>
    <Li>
      You don't have to make critical decisions on your own in the React
      projects you work on.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning by
      focusing on one thing during 3 days.
    </Li>
    <Li>
      You learn by doing. This is a hands-on project-based training - most of
      the time you'll be coding.
    </Li>
    <Li>
      You think code reviews and pair programming are useful and you are
      interested in getting feedback on your coding.
    </Li>
  </React.Fragment>
)

CurriculumReactFundamentals.LearningObjectivesList = LearningObjectivesList
CurriculumReactFundamentals.TargetAudienceList = TargetAudienceList

export default CurriculumReactFundamentals
