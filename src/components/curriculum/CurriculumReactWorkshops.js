import React from 'react'
import Section from './CurriculumSection'
import { REACT_WORKSHOP } from '../../config/data'
import Curriculum from './Curriculum'

const CurriculumReactWorkshops = ({
  toggleNavigateTo,
  section = {},
  ...rest
}) => {
  const type = REACT_WORKSHOP
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    type,
  }
  return (
    <Curriculum
      title="React Workshops"
      curriculumTitle="Workshop offerings"
      type={type}
      {...rest}
      firstHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="Testing in React"
            subTitle="Ensure consistent, reliable code across the React ecosystem"
            toggleNavigateTo="/react/training/workshops/testing-in-react/"
          />
          <Section
            {...sectionProps}
            title="Advanced React UIs & Styling With Design Systems"
            subTitle="See how React can look gorgeous and encourage design consistency"
            toggleNavigateTo="/react/training/workshops/advanced-uis-styling-design-systems/"
          />
          <Section
            {...sectionProps}
            title="Advanced Patterns, Performance & FP in React"
            subTitle="Discover best patterns for reusable and performant React apps"
            toggleNavigateTo="/react/training/workshops/advanced-react-patterns-fp-performance"
          />
        </React.Fragment>
      }
      secondHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="React Foundation"
            subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
            toggleNavigateTo="/react/training/workshops/react-foundation/"
          />
          <Section
            {...sectionProps}
            title="React Native"
            subTitle="Build upon your React knowledge and create great apps"
            toggleNavigateTo="/react/training/workshops/react-native"
          />
          <Section
            {...sectionProps}
            title="Redux"
            subTitle="Build Redux yourself and learn functional programming and middlewares"
            toggleNavigateTo="/react/training/workshops/redux"
          />
          <Section
            {...sectionProps}
            title="React Hooks & Suspense"
            subTitle="Learn 2 of the newest and most exciting features in React"
            toggleNavigateTo="/react/training/workshops/interest-form#details"
          />
        </React.Fragment>
      }
    />
  )
}

export default CurriculumReactWorkshops
