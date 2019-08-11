import React from 'react'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/StylingInReactSession'
import HooksSession from './sessions/HooksSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import E2ESession from './sessions/E2ESession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import AdvancedUIPatterns from './sessions/AdvancedUIPatterns'
import DesignSystemSession from './sessions/DesignSystemSession'
import { Li } from '../layout/Ul'

import { REACT_BOOTCAMP } from '../../config/data'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import Curriculum, { renderSection } from './Curriculum'

export const sessionsFirstHalf = [
  {
    title: 'Evening pre-bootcamp',
    subTitle: 'React JS 101',
    comps: [ReactJS101Session],
  },
  {
    subTitle: 'Modern JavaScript, Thinking in React, Routing & Data Fetching',
    comps: [ES6Session, ThinkingInReactSession, RoutingAndDataFetchingSession],
  },
  {
    subTitle: 'Forms, Authentication, and Hooks',
    comps: [FormsAndAuthSession, ReactFundamentalsRecapSession, HooksSession],
  },
  {
    subTitle: 'Redux Fundamentals, Advanced Redux, and FP',
    comps: [IntroReduxSession, AdvancedReduxSession],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle: 'Advanced React patterns, Hooks, and performance',
    comps: [HoCsRenderPropsStateReducerSession, ReactPerformanceSession],
  },
  {
    subTitle: 'Advanced UI Patterns & Styling in React',
    comps: [AdvancedUIPatterns, StylingInReactSession, DesignSystemSession],
  },
  {
    subTitle: 'Real-World Testing in React',
    comps: [TestingIntroSession, TestingInReactSession, E2ESession],
  },
]

const CurriculumReactBootcamp = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  training,
  section = {},
  ...rest
}) => {
  const type = REACT_BOOTCAMP
  const sectionProps = {
    ...section,
    // ...commonProps,
    toggleNavigateTo,
    type,
  }

  return (
    <Curriculum
      title="React Bootcamp Curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(
        renderSection({
          initialIndex: 0,
          training,
          sectionProps,
        })
      )}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          initialIndex: sessionsFirstHalf.length,
          training,
          sectionProps,
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
        interested in becoming quickly a productive React developer
      </strong>{' '}
      capable to work on real-world React projects.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning by
      focusing on one thing during one week.
    </Li>
    <Li>
      Ideal for experienced programmers familiar with good practices, code
      reviews and pair programming. Not for beginner devs!
    </Li>
    <Li>
      You learn by doing. This is a hands-on project-based training - most of
      the time you'll be coding.
    </Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Understand the core principles and libraries to build production-ready
      React applications using:{' '}
      <code>
        react, react-router, styled-components, styled-system, storybook, redux,
        react-redux
      </code>
    </Li>
    <Li>
      Learn how to style React applications in an idiomatic way and encourage
      design consistency using design systems.
    </Li>
    <Li>
      Understand different state management approaches in the React ecosystem.
    </Li>
    <Li>
      Create a solid foundation to leverage the React principles when tackling
      complex problems using advanced React.
    </Li>
    <CurriculumAdvancedReact.LearningObjectivesList />
  </React.Fragment>
)

CurriculumReactBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumReactBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumReactBootcamp
