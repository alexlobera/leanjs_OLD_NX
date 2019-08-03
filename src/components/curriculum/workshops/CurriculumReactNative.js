import React from 'react'
import { H2Ref } from '../../text'
import Link from '../../navigation/Link'
import { Li } from '../../layout/Ul'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import ReactNativeFoundationSession from '../sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from '../sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from '../sessions/native/ReactNativeAnimationsSession'
import { REACT_NATIVE } from '../../../config/data'
import selectCurriculumLayout from '../selectCurriculumLayout'

const CurriculumReactNative = ({
  showTitle = true,
  enableToggle,
  isOpen,
  toggleNavigateTo,
  showLinkToCurriculum = false,
  layout,
  trainings,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_NATIVE
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
        title="React Native Day 1"
        name="day1"
        subTitle="Foundation, Navigation, and Animations"
      >
        <ReactNativeFoundationSession title="Foundation" />
        <ReactNativeNavigationSession title="Navigation" />
        <ReactNativeAnimationsSession title="Animations" />
      </Section>
    </React.Fragment>
  )

  const secondHalf = null

  const title = showTitle ? (
    <H2Ref>
      React Native Curriculum
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
      You have at least a few months of experience using React on the web. If
      you don't know React, we recommend you first to attend our{' '}
      <Link to="/react/training/bootcamp">React Bootcamp</Link>
    </Li>
    <Li>
      Taking a step forward to become a React Native Specialist able to make
      critical decisions about the architecture of a React Native application.
    </Li>
    <Li>
      Not satisfied with the pace of online learning and it's lack of 1-on-1
      mentoring?
    </Li>
  </React.Fragment>
)

export default CurriculumReactNative
