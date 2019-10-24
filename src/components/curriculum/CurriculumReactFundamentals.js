import React from 'react'
import { Li } from '../layout/Ul'

import { REACT_FUNDAMENTALS } from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'
import { sessionsFirstHalf as sessionsFirstHalfBootcamp } from './CurriculumReactBootcamp'

const halfWayThough = Math.floor(sessionsFirstHalfBootcamp.length / 2)
const sessionsFirstHalf = sessionsFirstHalfBootcamp.slice(0, halfWayThough)
const sessionsSecondHalf = sessionsFirstHalfBootcamp.slice(
  halfWayThough,
  sessionsFirstHalfBootcamp.length
)

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
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          initialDayOffset: sessionsFirstHalf.length,
          ...renderSectionArgs,
        })
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

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Master React principles, such as the React composition model and the
      one-way explicit data flow, to leverage React's full potential.
    </Li>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>react, react-dom, react-router, redux, react-redux</code>
    </Li>
    <Li>
      Create a solid foundation so in future you can quickly learn advanced
      patterns and techniques as you progress in your career as React developer.
    </Li>
    <Li>
      Understand the different state management approaches in the React
      ecosystem.
    </Li>
  </React.Fragment>
)

CurriculumReactFundamentals.LearningObjectivesList = LearningObjectivesList
CurriculumReactFundamentals.TargetAudienceList = TargetAudienceList

export default CurriculumReactFundamentals
