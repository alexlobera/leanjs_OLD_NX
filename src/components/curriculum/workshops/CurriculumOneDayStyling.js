import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import selectCurriculumLayout from '../selectCurriculumLayout'
import DesignThinkingSession from '../sessions/design/DesignThinkingSession'
import DesignSystemSession from '../sessions/design/DesignSystemSession'
import StylingInReactSession from '../sessions/design/StylingInReactSession'
import ReusableComponentsSession from '../sessions/design/ReusableComponentsSession'

const CurriculumOneDayStyling = ({
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
        title="Design-Thinking in the real world"
        subTitle="UX, Atomic Design & Designer/Developer handover"
      >
        <DesignThinkingSession />
      </Section>
      <Section
        {...commonProps}
        title="Styling in React"
        subTitle="Component based CSS with styled-components & Storybook"
      >
        <StylingInReactSession />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Design System fundamentals"
        subTitle="Theming & Variants, using styled-components and styled-system"
      >
        <DesignSystemSession />
      </Section>
      <Section
        {...commonProps}
        title="Resuable component libraries"
        subTitle="Compound components, context, and component surface area"
      >
        <ReusableComponentsSession />
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

export default CurriculumOneDayStyling
