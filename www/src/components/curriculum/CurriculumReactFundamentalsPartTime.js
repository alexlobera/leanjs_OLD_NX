import React from 'react'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import HooksSession from './sessions/HooksSession'
import FundamentalsFinalProject from './sessions/FundamentalsFinalProject'
import {
  REACT_FUNDAMENTALS_PART_TIME,
  REACT_FUNDAMENTALS_ID,
  PART_TIME,
  TECH_REACT,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'

export const defaultSessionsFirstHalf = [
  { title: 'Thinking in React', Comp: ThinkingInReactSession, group: 1 },
  { title: 'Modern JavaScript', Comp: ES6Session, group: 1 },
  {
    title: 'Routing & Data Fetching',
    Comp: RoutingAndDataFetchingSession,
    group: 2,
  },
  {
    title: 'Recap: build a React app from scratch',
    Comp: ReactFundamentalsRecapSession,
    group: 2,
  },
]

export const defaultSessionsSecondHalf = [
  { title: 'Forms & Auth', Comp: FormsAndAuthSession, group: 3 },
  { title: 'React Hooks', Comp: HooksSession, group: 3 },
  { title: 'Redux', Comp: IntroReduxSession, group: 4 },
  {
    title: 'Final project and deployment to production',
    Comp: FundamentalsFinalProject,
    group: 4,
  },
]

// const type = REACT_PART_TIME

const trainingInstanceTypeName = PART_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_HALF_CURRICULUM
const trainingId = REACT_FUNDAMENTALS_ID

const CurriculumReactFundamentalsPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_FUNDAMENTALS_PART_TIME}`,
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
      title="React Redux Fundamentals Part-time Outline"
      //   training={training}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      trainingId={trainingId}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length + initialIndex)
      )}
    />
  )
}

export default CurriculumReactFundamentalsPartTime
