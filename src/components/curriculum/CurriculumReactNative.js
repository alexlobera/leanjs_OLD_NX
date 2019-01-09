import React from 'react'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section, { List, curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ReactNativeFoundationSession from './sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from './sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from './sessions/native/ReactNativeAnimationsSession'
import { REACT_NATIVE } from '../../config/data'
import selectCurriculumLayout from './selectCurriculumLayout'

const CurriculumReactNative = ({
  showTitle = true,
  enableToggle,
  isOpen,
  toggleNavigateTo = `/curriculum?tab=${REACT_NATIVE}`,
  selectLayout,
  layout,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const commonProps = {
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
    type: REACT_NATIVE,
    isOpen,
  }
  const firstHalf = (
    <Section
      {...commonProps}
      title="React Native Day 1"
      name="day1"
      subTitle="Foundation, Navigation, and Animations"
    >
      <ReactNativeFoundationSession title="Foundation" />
      <ReactNativeNavigationSession title="Navigation" />
      <ReactNativeAnimationsSession title="Animations" />
    </Section>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={1}>
            <H1Ref>
              React Native Curriculum
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H1Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout(firstHalf, null, layout)}
    </React.Fragment>
  )
}

export default CurriculumReactNative
