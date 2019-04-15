import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import { LinkButton } from '../buttons'
import SectionCTA from './SectionCTA'
import { REACT_NATIVE } from '../../config/data'
import selectCurriculumCorpLayout, {
  LIST_TWO_COL,
} from './selectCurriculumCorpLayout'

const CurriculumCorpRNative = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/curriculum?tab=${REACT_NATIVE}`,
  marketingCard = null,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = REACT_NATIVE
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type,
    isOpen,
  }
  const firstHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Day 1 - Foundation, Navigation, and Animations"
        name="day1"
        subTitle="React 101 and JS fundamentals"
      />
      <Section
        {...commonProps}
        title="Day 2 - Gestures, Offline, Assets Management & Push Notifications"
        name="day2"
        subTitle="Modern JavaScript, Routing & Data Fetching"
      />
      <Section
        {...commonProps}
        title="Testing, Native Modules & Release to Production"
        name="day3"
        subTitle="Forms, Authentication, Styling in React"
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout != LIST_TWO_COL && 1} />
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumCorpLayout({ firstHalf, layout, type })}
    </React.Fragment>
  )
}

export default CurriculumCorpRNative
