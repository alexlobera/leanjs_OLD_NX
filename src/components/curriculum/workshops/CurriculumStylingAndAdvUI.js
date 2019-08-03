import React from 'react'

import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref } from '../../text'
import { Li } from '../../layout/Ul'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import selectCurriculumLayout from '../selectCurriculumLayout'
import DesignSystemSession from '../sessions/DesignSystemSession'
import StylingInReactSession from '../sessions/StylingInReactSession'
import AdvancedUIPatterns from '../sessions/AdvancedUIPatterns'

const CurriculumStylingAndAdvUI = ({
  showTitle = true,
  layout,
  enableToggle = true,
  isOpen,
  toggleNavigateTo,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_WORKSHOP
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
        title="Advanced UI Patterns"
        subTitle="Themes, Variantes, compound components, context, and best practices"
      >
        <AdvancedUIPatterns />
      </Section>
      <Section
        {...commonProps}
        title="Styling in React"
        subTitle="Component based style with styled-components & Storybook"
      >
        <StylingInReactSession />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Design Systems with Styled System"
        subTitle="Constraint-based style props based on design system tokens"
      >
        <DesignSystemSession />
      </Section>
    </React.Fragment>
  )

  const title = showTitle ? (
    <H2Ref>
      Styling in React using Design Systems{' '}
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
    corpTrainingFacts: true,
  })
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer or designer with experience building React components and
      using CSS?
    </Li>
    <Li>
      A developer or designer interested in building scalable and reusable UIs
      for big React projects?
    </Li>
    <Li>
      Not satisfied with the Designer/Developer handover in real-world React
      projects?
    </Li>
    <Li>
      A designer that builds React components and interacts with developers.
    </Li>
  </React.Fragment>
)

export default CurriculumStylingAndAdvUI
