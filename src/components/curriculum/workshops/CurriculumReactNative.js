import React from 'react'
import { H2Ref } from '../../text'
import Link from '../../navigation/Link'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import ReactNativeFoundationSession from '../sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from '../sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from '../sessions/native/ReactNativeAnimationsSession'
import ReactNativeGesturesSession from '../sessions/native/ReactNativeGesturesSession'
import ReactNativeOfflineAndAssetCreationSession from '../sessions/native/ReactNativeOfflineAndAssetCreationSession'
import ReactNativePushNotificationSession from '../sessions/native/ReactNativePushNotificationSession'
import ReactNativeTestingSession from '../sessions/native/ReactNativeTestingSession'
import ReactNativeNativeModulesSession from '../sessions/native/ReactNativeNativeModulesSession'
import ReactNativeProductionSession from '../sessions/native/ReactNativeProductionSession'

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

export default CurriculumReactNative
