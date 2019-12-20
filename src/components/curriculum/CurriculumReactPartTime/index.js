import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import ES6Session from '../sessions/ES6Session'
import ThinkingInReactSession from '../sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession from '../sessions/RoutingAndDataFetchingSession'
import ReactFundamentalsRecapSession from '../sessions/ReactFundamentalsRecapSession'
import FormsAndAuthSession from '../sessions/FormsAndAuthSession'
import IntroReduxSession from '../sessions/IntroReduxSession'
import HooksSession from '../sessions/HooksSession'
import { REACT_PART_TIME } from '../../../config/data'
import Curriculum from '../Curriculum'
import renderPartTimeSection from '../renderPartTimeSession'

export const PartTimeFinalProject = () => (
  <Ul>
    <Li>
      Consolidate your new React skills by adding Redux and Forms to the
      application you built on session 4, or bring your own project.
    </Li>
    <Li>Discussion about architecture, features and tools</Li>
    <Li>
      Practice pair programming and get support from the coaches and mentors
    </Li>
  </Ul>
)

const defaultSessionsFirstHalf = [
  { title: 'Modern JavaScript', Comp: ES6Session, group: 1 },
  { title: 'Thinking in React', Comp: ThinkingInReactSession, group: 1 },
  {
    title: 'Routing & Data Fetching',
    Comp: RoutingAndDataFetchingSession,
    group: 2,
  },
  {
    title: 'Recap: build a React app from scratch',
    Comp: ReactFundamentalsRecapSession,
    group: 2,
  },
  // { title: 'Forms & Auth', Comp: FormsAndAuthSession, group: 2 },
  // {
  //   title: 'Recap: build a React app from scratch',
  //   Comp: ReactFundamentalsRecapSession,
  //   group: 2,
  // },
]
const defaultSessionsSecondHalf = [
  { title: 'Forms & Auth', Comp: FormsAndAuthSession, group: 3 },
  { title: 'React Hooks', Comp: HooksSession, group: 3 },
  // { title: 'Styling in React', Comp: StylingInReactSession, group: 3 },
  { title: 'Redux', Comp: IntroReduxSession, group: 4 },
  //{ title: 'Testing Fundamentals in JS', Comp: TestingIntroSession, group: 4 },
  {
    title: 'React Redux Real-world Final Project',
    Comp: PartTimeFinalProject,
    group: 4,
  },
]

const CurriculumReactPartTime = ({
  toggleNavigateTo = `/react/curriculum?tab=${REACT_PART_TIME}`,
  training,
  section = {},
  sessionsFirstHalf = defaultSessionsFirstHalf,
  sessionsSecondHalf = defaultSessionsSecondHalf,
  ...rest
}) => {
  const type = REACT_PART_TIME
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
      title="React Part-time course curriculum"
      training={training}
      type={type}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSectionWithProps(initialIndex))}
      secondHalf={sessionsSecondHalf.map(
        renderSectionWithProps(sessionsSecondHalf.length + initialIndex)
      )}
    />
  )
}

export default CurriculumReactPartTime
