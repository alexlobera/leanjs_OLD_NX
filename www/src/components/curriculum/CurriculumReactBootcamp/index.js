import React from 'react'
import ES6Session from '../sessions/ES6Session'
import ThinkingInReactSession from '../sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from '../sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from '../sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from '../sessions/FormsAndAuthSession'
import StylingInReactSession from '../sessions/StylingInReactSession'
import HooksSession from '../sessions/HooksSession'
import IntroReduxSession from '../sessions/IntroReduxSession'
import ReactGraphQLIntroSession from '../sessions/ReactGraphQLIntroSession'
import TestingIntroSession from '../sessions/TestingIntroSession'
import TestingInReactSession2 from '../sessions/TestingInReactSession2'
import AdvancedReactPatternsSession from '../sessions/AdvancedReactPatternsSession'
import AdvancedHooksAndPerfSession from '../sessions/AdvancedHooksAndPerfSession'
import FundamentalsFinalProject from '../sessions/FundamentalsFinalProject'
import DesignSystemSession from '../sessions/DesignSystemSession'

import {
  REACT_BOOTCAMP,
  FULL_TIME,
  TECH_REACT,
  TRAINING_TYPE_FULL_CURRICULUM,
  REACT_BOOTCAMP_ID,
} from '../../../config/data'
import Curriculum, { renderSection } from '../Curriculum'

export const sessionsFirstHalf = [
  {
    subTitle: 'Thinking in React, Modern JavaScript, Routing & Data Fetching',
    comps: [ThinkingInReactSession, ES6Session, RoutingAndDataFetchingSession],
  },
  {
    subTitle: 'Forms, Authentication, and Hooks',
    comps: [FormsAndAuthSession, HooksSession, ReactFundamentalsRecapSession],
  },
  {
    subTitle: 'Redux Fundamentals, deployment to production',
    comps: [IntroReduxSession, FundamentalsFinalProject],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle: 'Advanced React patterns and performance',
    comps: [AdvancedReactPatternsSession, AdvancedHooksAndPerfSession],
  },
  {
    subTitle: 'GraphQL 101 & Real-World Testing in React',
    comps: [
      ReactGraphQLIntroSession,
      TestingIntroSession,
      TestingInReactSession2,
    ],
  },
  {
    subTitle: 'Building a UI component library',
    comps: [StylingInReactSession, DesignSystemSession],
  },
]

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_FULL_CURRICULUM
const trainingId = REACT_BOOTCAMP_ID

const CurriculumReactBootcamp = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  // training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
  }
  const renderSectionArgs = {
    // training,
    sectionProps,
  }

  return (
    <Curriculum
      title="React Redux Bootcamp Outline"
      //   training={training}
      trainingId={trainingId}
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  )
}

export default CurriculumReactBootcamp
