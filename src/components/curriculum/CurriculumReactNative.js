import React from 'react'
import { H2Ref } from '../text'
import Link from '../navigation/Link'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ReactNativeFoundationSession from './sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from './sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from './sessions/native/ReactNativeAnimationsSession'
import ReactNativeGesturesSession from './sessions/native/ReactNativeGesturesSession'
import ReactNativeOfflineAndAssetCreationSession from './sessions/native/ReactNativeOfflineAndAssetCreationSession'
import ReactNativePushNotificationSession from './sessions/native/ReactNativePushNotificationSession'
import ReactNativeTestingSession from './sessions/native/ReactNativeTestingSession'
import ReactNativeNativeModulesSession from './sessions/native/ReactNativeNativeModulesSession'
import ReactNativeProductionSession from './sessions/native/ReactNativeProductionSession'

import { REACT_NATIVE } from '../../config/data'
import selectCurriculumLayout, { LIST_TWO_COL } from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

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

  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Native Day 2"
        name="day2"
        subTitle="Gestures, Offline, Assets Management & Push Notifications"
      >
        <ReactNativeGesturesSession title="Gestures" />
        <ReactNativeOfflineAndAssetCreationSession title="Handling Offline & Assets Management" />
        <ReactNativePushNotificationSession title="Push Notifications" />
      </Section>
      <Section
        {...commonProps}
        title="React Native Day 3"
        name="day3"
        subTitle="Testing, Native Modules & Release to Production"
      >
        <ReactNativeTestingSession title="Testing in React Native" />
        <ReactNativeNativeModulesSession title="Native Modules" />
        <ReactNativeProductionSession title="Release to Production" />
      </Section>
    </React.Fragment>
  )

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

CurriculumReactNative.propTypes = curriculumCommonPropTypes

export default CurriculumReactNative
