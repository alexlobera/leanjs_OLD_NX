import React from 'react'
import Section from './CurriculumSection'
import {
  REACT_WORKSHOP,
  TECH_REACT,
  TRAINING_TYPE_WORKSHOP,
  FULL_TIME,
} from '../../config/data'
import Curriculum from './Curriculum'

const workshopBasePath = '/react/training/workshops/'

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_REACT
const trainingType = TRAINING_TYPE_WORKSHOP

const CurriculumReactWorkshops = ({ section = {}, ...rest }) => {
  const type = REACT_WORKSHOP
  const sectionProps = {
    ...section,
    trainingType,
    type,
  }
  return (
    <Curriculum
      title="React Workshops"
      curriculumTitle="Workshop offerings"
      tech={tech}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      {...rest}
      firstHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="GraphQL 101 & Real-World Testing in React"
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
            title="Advanced Patterns and Performance"
            subTitle="Discover best patterns for reusable and performant React apps"
            toggleNavigateTo={`${workshopBasePath}advanced-react-patterns-fp-performance`}
          />
        </React.Fragment>
      }
      secondHalf={
        <React.Fragment>
          <Section
            {...sectionProps}
            title="React Native"
            subTitle="Build upon your React knowledge and create great apps"
            toggleNavigateTo={`${workshopBasePath}react-native`}
          />
          <Section
            {...sectionProps}
            title="React Foundation"
            subTitle="Learn the basics of React and jumpstart your way into a new coding ecosystem"
            toggleNavigateTo={`${workshopBasePath}react-foundation/`}
          />
        </React.Fragment>
      }
    />
  )
}

export default CurriculumReactWorkshops
