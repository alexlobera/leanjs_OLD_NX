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
  showLinkToCurriculum = false,
  trainings,
}) => {
  const type = [REACT_WORKSHOP]
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
        name="testingReact"
        subTitle="Ensure consistent, reliable code across the React ecosystem"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/testing-in-react/london/"
      />
      <Section
        {...commonProps}
        title="Advanced React UIs & Styling With Design Systems"
        name="styling"
        subTitle="See how React can look gorgeous and encourage design consistency"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/design-system-styling-in-react/"
      />
      <Section
        {...commonProps}
        title="Advanced Patterns, Performance & FP in React"
        name="perfAndFP"
        subTitle="Discover best patterns for reusable and performant React apps"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/"
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="React Foundation"
        name="foundation"
        subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/react-foundation/"
      />
      <Section
        {...commonProps}
        title="React Hooks & Suspense"
        name="hooksAndSuspense"
        subTitle="Learn 2 of the newest and most exciting features in React"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/interest-form#details"
      />
      <Section
        {...commonProps}
        title="React Native"
        name="react-native"
        subTitle="Build upon your React knowledge and create great apps"
        showLinkToCurriculum
        toggleNavigateTo="/react/training/workshops/interest-form#details"
      />
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      Design Systems & styling in React{' '}
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
  })
}

export default CurriculumReactWorkshops
