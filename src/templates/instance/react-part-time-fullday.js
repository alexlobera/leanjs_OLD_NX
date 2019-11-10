import React from 'react'
import PartTimeTemplate from './react-part-time'
import StylingInReactSession from '../../components/curriculum/sessions/StylingInReactSession'
import IntroReduxSession from '../../components/curriculum/sessions/IntroReduxSession'
import TestingIntroSession from '../../components/curriculum/sessions/TestingIntroSession'
import HooksSession from '../../components/curriculum/sessions/HooksSession'
import { PartTimeFinalProject } from '../../components/curriculum/CurriculumReactPartTime'

const sessionsSecondHalf = [
  { title: 'Redux', Comp: IntroReduxSession, group: 3 },
  { title: 'Testing Fundamentals in JS', Comp: TestingIntroSession, group: 3 },
  { title: 'React Hooks', Comp: HooksSession, group: 4 },
  { title: 'Styling in React', Comp: StylingInReactSession, group: 4 },
  {
    title: 'React Redux Real-world Final Project',
    Comp: PartTimeFinalProject,
    group: 4,
  },
]

const Page = props => (
  <PartTimeTemplate curriculumProps={{ sessionsSecondHalf }} {...props} />
)

export default Page
