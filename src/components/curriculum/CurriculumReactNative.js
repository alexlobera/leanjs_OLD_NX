import React from 'react'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ReactNativeFoundationSession from './sessions/ReactNativeFoundationSession'
import ReactNativeGesturesSession from './sessions/ReactNativeGesturesSession'
import ReactNativeAnimationsSession from './sessions/ReactNativeAnimationsSession'

const CurriculumReactNative = ({ showTitle = true, isOpen = true }) => (
  <React.Fragment>
    {showTitle ? (
      <Row>
        <Col xs={12} md={12} lg={10} lgOffset={1}>
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
    <Row>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <Section
          title="React Native Day 1"
          subTitle="Foundation, Animations, and Gestures"
          isOpen={isOpen}
        >
          <ReactNativeFoundationSession title="Foundation" />
          <ReactNativeAnimationsSession title="Animations" />
          <ReactNativeGesturesSession title="Gestures" />
        </Section>
      </Col>
    </Row>
  </React.Fragment>
)

export default CurriculumReactNative
