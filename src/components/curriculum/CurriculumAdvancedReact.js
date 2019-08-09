import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import StylingInReactSession from './sessions/AdvancedReduxSession'
import AdvancedUIPatterns from './sessions/AdvancedUIPatterns'
import DesignSystemSession from './sessions/DesignSystemSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import E2ESession from './sessions/E2ESession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import { ADVANCED_REACT } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { Li } from '../layout/Ul'
import { trainingTime } from '../utils'

const CurriculumAdvancedReact = ({
  showTitle = true,
  isOpen,
  enableToggle,
  toggleNavigateTo = `/react/curriculum?tab=${ADVANCED_REACT}`,
  showLinkToCurriculum = true,
  layout,
  trainings,
  training,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ADVANCED_REACT
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
        title="Advanced React Day 1"
        name="day1"
        subTitle="Advanced React patterns, Hooks, and performance"
        trainingTime={trainingTime({ day: 0, training, type })}
        buyPath="/react/training/workshops/advanced-react-patterns-fp-performance"
      >
        <HoCsRenderPropsStateReducerSession />
        <ReactPerformanceSession />
      </Section>
      <Section
        {...commonProps}
        title={`Advanced React Day 2`}
        name="day2"
        subTitle={`Advanced UI Patterns & Styling in React`}
        trainingTime={trainingTime({ day: 1, training })}
      >
        <AdvancedUIPatterns />
        <StylingInReactSession />
        <DesignSystemSession />
      </Section>
    </React.Fragment>
  )

  const secondHalf = (
    <Section
      {...commonProps}
      title="Advanced React Day 3"
      name="day3"
      subTitle="Real-World Testing in React"
      trainingTime={trainingTime({ day: 2, training })}
    >
      <TestingIntroSession />
      <TestingInReactSession />
      <E2ESession title="End-to-End Testing" />
    </Section>
  )

  const title = showTitle ? (
    <H2Ref>
      Advanced React Curriculum{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    title,
    layout,
    type,
    trainings,
    curriculumTo: showLinkToCurriculum ? toggleNavigateTo : undefined,
  })
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      Ready to take a step forward to{' '}
      <strong>become a senior React developer/ architect</strong> able to make
      critical decisions about the architecture of real-world React projects.
    </Li>
    <Li>
      You are interested in intense training for extremely rapid learning by
      focusing on one thing during 3 days.
    </Li>
    <Li>
      Want to discuss your complex React challenges with other advanced React
      developers from different companies and countries.
    </Li>
    <Li>
      Ideal for{' '}
      <strong>React developers with 1+ year of profesional experience</strong>.
      Not for React beginners!
    </Li>
  </React.Fragment>
)

const LearningObjectivesList = () => (
  <React.Fragment>
    <Li>
      Be able to test complex React applications writing tests that promote code
      quality and best programming practices.
    </Li>
    <Li>
      Learn how to style React applications in an idiomatic way and encourage
      design consistency using design systems.
    </Li>
    <Li>
      Comprehend modern front-end JavaScript using Functional Programming (FP)
    </Li>
    <Li>
      Understand the best practices and patterns for building real-world
      performant applications using advanced React.
    </Li>
  </React.Fragment>
)

CurriculumAdvancedReact.LearningObjectivesList = LearningObjectivesList
CurriculumAdvancedReact.TargetAudienceList = TargetAudienceList

export default CurriculumAdvancedReact
