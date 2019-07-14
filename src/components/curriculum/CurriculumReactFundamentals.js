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
import StylingInReactSession from './sessions/design/StylingInReactSession'
import IntroReduxSession from './sessions/IntroReduxSession'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import { trainingTime } from '../utils'

import { REACT_FUNDAMENTALS } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

const CurriculumReactFundamentals = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_FUNDAMENTALS}`,
  marketingCard = null,
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
        subTitle="React 101 and JS fundamentals"
        trainingTime={trainingTime({ day: 0, training })}
      >
        <ReactJS101Session />
      </Section>
      <Section
        {...commonProps}
        title="Day 1"
        name="day1"
        subTitle="Modern JavaScript, Thinking in React, Routing & Data Fetching"
        trainingTime={trainingTime({ training })}
      >
        <ES6Session title="Modern JavaScript" />
        <ThinkingInReactSession title="Thinking in React" />
        <RoutingAndDataFetchingSession title="Routing and Data Fetching" />
      </Section>
      {marketingCard}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 2"
        name="day2"
        subTitle="Forms, Authentication, Styling in React"
        trainingTime={trainingTime({ training })}
      >
        <FormsAndAuthSession title="Forms and Authentication" />
        <ReactFundamentalsRecapSession
          title="React Fundamentals recap, build a React app from scratch on your own to
          consolidate:"
        />
        <StylingInReactSession title="Styling in React" />
      </Section>
      <Section
        {...commonProps}
        title="Day 3"
        name="day3"
        subTitle="Redux Fundamentals, Advanced Redux, and FP"
        trainingTime={trainingTime({ training })}
      >
        <IntroReduxSession title="Redux Fundamentals" />
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
    <Li></Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Understand the core principles and libraries to build React applications
      using:{' '}
      <code>
        react, react-router, styled-components, storybook, redux, react-redux
      </code>
    </Li>
    <Li>
      Create a solid foundation to leverage the React principles when tackling
      complex React problems.
    </Li>
    <Li>Learn how to style React applications in an idiomatic way.</Li>
    <Li>
      Understand different state management approaches in the React ecosystem.
    </Li>
  </React.Fragment>
)

CurriculumReactFundamentals.propTypes = curriculumCommonPropTypes
CurriculumReactFundamentals.LearningObjectivesList = LearningObjectivesList
CurriculumReactFundamentals.TargetAudienceList = TargetAudienceList

export default CurriculumReactFundamentals
