import React from 'react'
import Link from '../navigation/Link'
import { Li } from '../layout/Ul'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import HooksSession from './sessions/HooksSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import { trainingTime } from '../utils'

import { REACT_FUNDAMENTALS } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'

const CurriculumReactFundamentals = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_FUNDAMENTALS}`,
  showLinkToCurriculum = true,
  trainings,
  training,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_FUNDAMENTALS
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Evening pre-course"
        name="day0"
        subTitle="React JS 101"
        trainingTime={trainingTime({ day: 0, training })}
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title="Day 1"
        name="day1"
        subTitle="Modern JavaScript, Thinking in React, Routing & Data Fetching"
        trainingTime={trainingTime({ day: 1, training })}
      >
        <ES6Session />
        <ThinkingInReactSession />
        <RoutingAndDataFetchingSession />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 2"
        name="day2"
        subTitle="Forms, Authentication, and Hooks"
        trainingTime={trainingTime({ day: 2, training })}
      >
        <FormsAndAuthSession />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <HooksSession />
      </Section>
      <Section
        {...commonProps}
        title="Day 3"
        name="day3"
        subTitle="Redux Fundamentals, Advanced Redux, and FP"
        trainingTime={trainingTime({ day: 3, training })}
      >
        <IntroReduxSession />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      React Fundamentals Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    title,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
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
