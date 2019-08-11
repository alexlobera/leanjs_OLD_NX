import React from 'react'
import Section from './CurriculumSection'
import Link from '../navigation/Link'
import { REACT_WORKSHOP } from '../../config/data'
import { H2Ref } from '../text'
import selectCurriculumLayout from './selectCurriculumLayout'

const CurriculumReactWorkshops = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  showLinkToCurriculum = true,
  trainings,
}) => {
  const type = REACT_WORKSHOP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    type,
    isOpen,
    trainings,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Testing in React"
        subTitle="Ensure consistent, reliable code across the React ecosystem"
        toggleNavigateTo="/react/training/workshops/testing-in-react/"
      />
      <Section
        {...commonProps}
        title="Advanced React UIs & Styling With Design Systems"
        subTitle="See how React can look gorgeous and encourage design consistency"
        toggleNavigateTo="/react/training/workshops/advanced-uis-styling-design-systems/"
      />
      <Section
        {...commonProps}
        title="Advanced Patterns, Performance & FP in React"
        subTitle="Discover best patterns for reusable and performant React apps"
        toggleNavigateTo="/react/training/workshops/advanced-react-patterns-fp-performance"
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Foundation"
        subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
        toggleNavigateTo="/react/training/workshops/react-foundation/"
      />
      <Section
        {...commonProps}
        title="React Native"
        subTitle="Build upon your React knowledge and create great apps"
        toggleNavigateTo="/react/training/workshops/react-native"
      />
      <Section
        {...commonProps}
        title="Redux"
        subTitle="Build Redux yourself and learn functional programming and middlewares"
        toggleNavigateTo="/react/training/workshops/redux"
      />
      <Section
        {...commonProps}
        title="React Hooks & Suspense"
        subTitle="Learn 2 of the newest and most exciting features in React"
        toggleNavigateTo="/react/training/workshops/interest-form#details"
      />
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      React Workshops{' '}
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
    curriculumTitle: 'Workshop offerings',
  })
}

export default CurriculumReactWorkshops
