import React from 'react'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { LinkButton } from '../buttons'
import { REACT_BOOTCAMP } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'
import CorpTrainingFacts from './CorpTrainingKeyFacts'

const CurriculumCorporateReact = ({
  layout,
  enableToggle,
  isOpen,
  // toggleNavigateTo = `/react/curriculum?tab=${REACT_BOOTCAMP}`,
  showLinkToCurriculum = false,
}) => {
  // const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_BOOTCAMP
  const commonProps = {
    showLinkToCurriculum: false,
    enableToggle: false,
    // toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen: false,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 1 - React JS 101"
        name="day1"
        subTitle="React JS 101"
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
      <LinkButton sx={{ mt: 4 }} to="#contact-us" children="Contact Us" />
    </React.Fragment>
  )

  return selectCurriculumLayout({
    firstHalf,
    secondHalf,
    layout,
    type,
    content: <CorpTrainingFacts />,
    curriculumTitle: 'React Training Schedule Example',
  })
}

export default CurriculumCorporateReact
