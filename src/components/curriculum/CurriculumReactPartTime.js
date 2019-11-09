import React from 'react'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import HooksSession from './sessions/HooksSession'
import { REACT_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'

export const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by adding Redux and Forms to the
      application you built on session 4, or bring your own project.
    </Li>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice pair programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const defaultSessionsFirstHalf = [
  { title: 'Modern JavaScript', Comp: ES6Session, group: 1 },
  { title: 'Thinking in React', Comp: ThinkingInReactSession, group: 1 },
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
  // { title: 'Forms & Auth', Comp: FormsAndAuthSession, group: 2 },
  // {
  //   title: 'Recap: build a React app from scratch',
  //   Comp: ReactFundamentalsRecapSession,
  //   group: 2,
  // },
]
const defaultSessionsSecondHalf = [
  { title: 'Forms & Auth', Comp: FormsAndAuthSession, group: 3 },
  { title: 'React Hooks', Comp: HooksSession, group: 3 },
  // { title: 'Styling in React', Comp: StylingInReactSession, group: 3 },
  { title: 'Redux', Comp: IntroReduxSession, group: 4 },
  //{ title: 'Testing Fundamentals in JS', Comp: TestingIntroSession, group: 4 },
  {
    title: 'React Redux Real-world Final Project',
    Comp: PartTimeFinalProject,
    group: 4,
  },
]

const CurriculumReactPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_PART_TIME}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
  ...rest
}) => {
  const type = REACT_PART_TIME
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
      title="React Part-time course curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsSecondHalf.length + initialIndex)
      )}
    />
  )
}

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>react, react-dom, react-router, redux, react-redux</code>
    </Li>
    <Li>
      Master React principles, such as the React composition model and the
      one-way explicit data flow, to leverage React's full potential.
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

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer{' '}
      <strong>
        interested in progressively shifting towards front-end development in
        React
      </strong>
      .
    </Li>
    <Li>
      You won't have to make critical decisions on your own in the React
      projects you will work on.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning but
      you don't want to cut into valuable work-days.
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

CurriculumReactPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumReactPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumReactPartTime
