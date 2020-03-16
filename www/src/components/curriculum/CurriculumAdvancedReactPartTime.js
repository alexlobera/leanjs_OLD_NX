import React from 'react'
import { ADVANCED_REACT_PART_TIME } from '../../config/data'
import Curriculum from './Curriculum'
import renderPartTimeSection from './renderPartTimeSession'
import AdvancedReactPatternsSession from './sessions/AdvancedReactPatternsSession'
import AdvancedHooksAndPerfSession from './sessions/AdvancedHooksAndPerfSession'
import ReactGraphQLIntroSession from './sessions/ReactGraphQLIntroSession'
import TestingIntroSession from './sessions/TestingIntroSession'
import TestingInReactSession2 from './sessions/TestingInReactSession2'
import DesignSystemSession from './sessions/DesignSystemSession'
import StylingInReactSession from './sessions/StylingInReactSession'

export const defaultSessionsFirstHalf = [
  { Comp: AdvancedReactPatternsSession, group: 1 },
  { Comp: AdvancedHooksAndPerfSession, group: 1 },
  { Comp: TestingIntroSession, group: 2 },
  { Comp: ReactGraphQLIntroSession, group: 2 },
]

export const defaultSessionsSecondHalf = [
  { Comp: TestingInReactSession2, group: 2 },
  { Comp: StylingInReactSession, group: 3 },
  { Comp: DesignSystemSession, group: 3 },
  { Comp: DesignSystemSession, group: 4 },
  //   { title: 'React Hooks', Comp: HooksSession, group: 3 },
  //   { title: 'Redux', Comp: IntroReduxSession, group: 4 },
  //   {
  //     title: 'Final project and deployment to production',
  //     Comp: FundamentalsFinalProject,
  //     group: 4,
  //   },
]

const type = ADVANCED_REACT_PART_TIME

const CurriculumAdvancedReactPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${type}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
  ...rest
}) => {
  const initialIndex = 0

  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  const renderSectionWithProps = renderPartTimeSection({
    sectionProps,
    training,
  })

  return (
    <Curriculum
      title="Advanced React Part-time Training Outline"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsFirstHalf.length + initialIndex)
      )}
    />
  )
}

export default CurriculumAdvancedReactPartTime
