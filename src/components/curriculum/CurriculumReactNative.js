import React from 'react'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section, { List, curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import { UpcomingTrainingSection } from '../training'
import ReactNativeFoundationSession from './sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession from './sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession from './sessions/native/ReactNativeAnimationsSession'
import { REACT_NATIVE } from '../../config/data';

const CurriculumReactNative = ({
  showTitle = true,
  list,
  showToggle,
  toggleNavigateTo = '/curriculum?tab=react-native',
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const commonProps = { showToggle, toggleNavigateTo: toggleNavigateToSection, type: REACT_NATIVE }
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
      {list ? (
        <List>{firstHalf}</List>
      ) : (
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            {firstHalf}
          </Col>
          <Col md={6} lg={5}>
            <UpcomingTrainingSection curriculum />
          </Col>
        </Row>
      )}
    </React.Fragment>
  )
}

export default CurriculumReactNative
