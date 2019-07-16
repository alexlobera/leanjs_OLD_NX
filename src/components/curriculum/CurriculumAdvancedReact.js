import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import TestingInReactSession from './sessions/TestingInReactSession'
import HoCsRenderPropsStateReducerSession from './sessions/HoCsRenderPropsStateReducerSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import E2ESession from './sessions/E2ESession'
import ReactPerformanceSession from './sessions/ReactPerformanceSession'
import { ADVANCED_REACT } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { Li } from '../layout/Ul'
import { trainingTime } from '../utils'
import { curriculumCommonPropTypes } from './'

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
        <HoCsRenderPropsStateReducerSession title="Functional Programming & Advanced React patterns" />
        <ReactPerformanceSession title="Performance" />
      </Section>
      <Section
        {...commonProps}
        title="Advanced React Day 2"
        name="day2"
        subTitle="Real-world Testing in React"
        trainingTime={trainingTime({ day: 1, training })}
      >
        <TestingIntroSession title="Testing Foundation in JS" />
        <TestingInReactSession title="Testing in React" />
        <E2ESession title="End-to-End Testing" />
      </Section>
    </React.Fragment>
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
      Ideal for{' '}
      <strong>React developers with 1+ year of profesional experience</strong>.
      Not for React beginners!
    </Li>
    <Li>
      Get advice to address your complex React challenges with our expert
      coaches.
    </Li>
    <Li>
      Discuss real-world problems with other advanced React developers from
      different companies and countries.
    </Li>
    <Li>
      Take a step forward to become a{' '}
      <strong>Senior React Developer/ Architect</strong> able to make critical
      decisions about the architecture of advanced React applications.
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
      Comprehend modern front-end JavaScript using Functional Programming (FP)
    </Li>
    <Li>
      Understand the best practices and patterns for building real-world
      performant applications using advanced React.
    </Li>
  </React.Fragment>
)

CurriculumAdvancedReact.propTypes = curriculumCommonPropTypes
CurriculumAdvancedReact.LearningObjectivesList = LearningObjectivesList
CurriculumAdvancedReact.TargetAudienceList = TargetAudienceList

export default CurriculumAdvancedReact
