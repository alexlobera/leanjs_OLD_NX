import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
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
  const type = ONE_DAY_WORKSHOP
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
      <H3>1 day workshop</H3>
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

export default CurriculumStylingAndAdvUI
