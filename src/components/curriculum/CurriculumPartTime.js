import React from 'react'
import Ul, { Li } from '../layout/Ul'
import ES6Session from './sessions/ES6Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import HooksSession from './sessions/HooksSession'
import { PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import Section from './CurriculumSection'

export const renderPartTimeSection = (sectionProps = {}) => initialIndex => (
  { title, Comp },
  index
) => {
  const sectionNum = index + initialIndex
  return (
    <Section
      title={`Session ${sectionNum} - ${title}`}
      name={`session${sectionNum}`}
      {...sectionProps}
    >
      <Comp />
    </Section>
  )
}

const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by adding Styled-Components and Redux to
      the application you built on session 5
    </Li>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice extreme programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const sessionsFirstHalf = [
  { title: 'Modern JavaScript', Comp: ES6Session },
  { title: 'Thinking in React', Comp: ThinkingInReactSession },
  { title: 'Routing & Data Fetching', Comp: RoutingAndDataFetchingSession },
  { title: 'Forms & Auth', Comp: FormsAndAuthSession },
  {
    title: 'Recap: build a React app from scratch',
    Comp: ReactFundamentalsRecapSession,
  },
]
const sessionsSecondHalf = [
  { title: 'Styling in React', Comp: StylingInReactSession },
  { title: 'Redux', Comp: IntroReduxSession },
  { title: 'Testing Fundamentals in JS', Comp: TestingIntroSession },
  { title: 'React Hooks', Comp: HooksSession },
  {
    title: 'React Redux Real-world Final Project',
    Comp: PartTimeFinalProject,
  },
]

const CurriculumPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${PART_TIME}`,
  training,
  section = {},
  ...rest
}) => {
  const type = PART_TIME
  // const commonProps = {
  //   type: PART_TIME,
  //   toggleNavigateTo,
  // }
  const initialIndex = 1
  const renderSectionWithProps = renderPartTimeSection({
    ...section,
    // ...commonProps,
    toggleNavigateTo,
    type,
  })

  return (
    <Curriculum
      title="Part-time course curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      //{...commonProps}
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
      Master React principles, such as the React composition model and the
      one-way explicit data flow, to leverage React's full potential.
    </Li>
    <Li>
      Understand how the most popular libraries to build React applications work
      under the hood:{' '}
      <code>
        react, react-dom, react-router, redux, react-redux, jest,
        styled-components
      </code>
    </Li>
    <Li>
      Create a solid foundation so in future you can quickly learn advanced
      patterns and techniques as you progress in your career as React developer.
    </Li>
    <Li>
      Understand the different state management approaches in the React
      ecosystem.
    </Li>
    <Li>Learn how to style React applications in an idiomatic way.</Li>
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

CurriculumPartTime.LearningObjectivesList = LearningObjectivesList
CurriculumPartTime.TargetAudienceList = TargetAudienceList

export default CurriculumPartTime
