import React from 'react'
import Section from './CurriculumSection'
import { REACT_WORKSHOP } from '../../config/data'
import Curriculum from './Curriculum'

const workshopBasePath = '/react/training/workshops/'

const CurriculumReactWorkshops = ({ section = {}, ...rest }) => {
  const type = REACT_WORKSHOP
  const sectionProps = {
    ...section,
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
            title="ReasonML for React Devs"
            subTitle="How and Why we should write our code in ReasonML plus React use cases"
            toggleNavigateTo={`${workshopBasePath}react-reasonml/`}
          />
          <Section
            {...sectionProps}
            title="Testing in React"
            subTitle="Ensure consistent, reliable code across the React ecosystem"
            toggleNavigateTo={`${workshopBasePath}testing-in-react/`}
          />
          <Section
            {...sectionProps}
            title="Styling in React and Design Systems"
            subTitle="See how React can look gorgeous and encourage design consistency at scale"
            toggleNavigateTo={`${workshopBasePath}advanced-uis-styling-design-systems/`}
          />
          <Section
            {...sectionProps}
            title="Advanced Patterns, Performance & FP in React"
            subTitle="Discover best patterns for reusable and performant React apps"
            toggleNavigateTo={`${workshopBasePath}advanced-react-patterns-fp-performance`}
          />
        </React.Fragment>
      }
      secondHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="React Foundation"
            subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
            toggleNavigateTo={`${workshopBasePath}react-foundation/`}
          />
          <Section
            {...sectionProps}
            title="React Native"
            subTitle="Build upon your React knowledge and create great apps"
            toggleNavigateTo={`${workshopBasePath}react-native`}
          />
          <Section
            {...sectionProps}
            title="Redux"
            subTitle="Build Redux yourself and learn functional programming and middlewares"
            toggleNavigateTo={`${workshopBasePath}redux`}
          />
          <Section
            {...sectionProps}
            title="React Hooks & Suspense"
            subTitle="Learn 2 of the newest and most exciting features in React"
            toggleNavigateTo={`${workshopBasePath}interest-form#details`}
          />
        </React.Fragment>
      }
    />
  )
}

export default CurriculumReactWorkshops
