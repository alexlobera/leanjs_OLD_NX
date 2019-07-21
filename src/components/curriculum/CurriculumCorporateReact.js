import React from 'react'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { LinkButton } from '../buttons'
import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import { curriculumCommonPropTypes } from './'

const CurriculumCorporateReact = ({
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  marketingCard = null,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 1 - React 101 and JS fundamentals"
        name="day1"
        subTitle="React 101 and JS fundamentals"
      />
      <Section
        {...commonProps}
        title="Day 2 - Thinking in React"
        name="day2"
        subTitle="Modern JavaScript, Routing & Data Fetching"
      />
      <Section
        {...commonProps}
        title="Day 3 - Forms and Styling in React"
        name="day3"
        subTitle="Forms, Authentication, Consolidation, Styling in React"
      />
      <Section
        {...commonProps}
        title="Day 4 - Redux and Testing"
        name="day4"
        subTitle="Redux and Testing Principles"
      />
      {marketingCard}
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 5 - Functional Programming"
        name="day5"
        subTitle="Advanced React patterns and GraphQL"
      />
      <LinkButton mt={4} to="#contact-us" children="Contact Us" />
    </React.Fragment>
  )

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    corpTrainingFacts: true,
  })
}

CurriculumCorporateReact.propTypes = curriculumCommonPropTypes

export default CurriculumCorporateReact
