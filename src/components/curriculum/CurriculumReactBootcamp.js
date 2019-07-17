import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import ES6Session from './sessions/ES6Session'
import ReactJS101Session from './sessions/ReactJS101Session'
import ThinkingInReactSession from './sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from './sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from './sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from './sessions/FormsAndAuthSession'
import StylingInReactSession from './sessions/design/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession from './sessions/TestingInReactSession'
import E2ESession from './sessions/E2ESession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import { Li } from '../layout/Ul'

import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { trainingTime } from '../utils'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import { curriculumCommonPropTypes } from './'

const CurriculumReactBootcamp = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = true,
  trainings,
  training,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
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
        title={`Evening pre-bootcamp`}
        name="day0"
        subTitle={`React 101 and JS fundamentals`}
        trainingTime={trainingTime({ day: 0, training })}
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title={`Day 1`}
        name="day1"
        subTitle={`Modern JavaScript, Thinking in React, Routing & Data Fetching`}
        trainingTime={trainingTime({ day: 1, training })}
      >
        <ES6Session title="Modern JavaScript" />
        <ThinkingInReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      <Section
        {...commonProps}
        title={`Day 2`}
        name="day2"
        subTitle={`Forms, Authentication, Styling in React`}
        trainingTime={trainingTime({ day: 2, training })}
      >
        <FormsAndAuthSession title="Forms and Authentication" />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <StylingInReactSession title="Styling in React" />
      </Section>
      {marketingCard}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title={`Day 3`}
        name="day3"
        subTitle={`Redux Fundamentals, Advanced Redux, and FP`}
        trainingTime={trainingTime({ day: 3, training })}
      >
        <IntroReduxSession title="Redux Fundamentals" />
        <AdvancedReduxSession title="Advanced Redux" />
      </Section>
      <Section
        {...commonProps}
        title={`Day 4`}
        name="day4"
        subTitle={`Advanced React patterns, Hooks, and performance`}
        trainingTime={trainingTime({ day: 6, training })}
      >
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title={`Day 5`}
        name="day5"
        subTitle={`Real-world Testing in React`}
        trainingTime={trainingTime({ day: 7, training })}
      >
        <TestingIntroSession title="Testing Foundation in JS" />
        <TestingInReactSession title="Testing in React" />
        <E2ESession title="End-to-End Testing" />
      </Section>
    </React.Fragment>
  )
  const title = showTitle ? (
    <H2Ref>
      React Bootcamp Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null
  console.log('sssssss', trainings)
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
    <Li></Li>
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
    <Li>Learn how to style React applications in an idiomatic way.</Li>
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

CurriculumReactBootcamp.propTypes = curriculumCommonPropTypes
CurriculumReactBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumReactBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumReactBootcamp
