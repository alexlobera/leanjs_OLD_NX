import React from 'react'
import { H1Ref } from '../text'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import ReactNativeFoundationSession from './sessions/ReactNativeFoundationSession'
import ReactNativeGesturesSession from './sessions/ReactNativeGesturesSession'
import ReactNativeAnimationsSession from './sessions/ReactNativeAnimationsSession'

const CurriculumReactNative = ({ showTitle = true }) => (
  <React.Fragment>
    {showTitle ? (
      <Row>
        <Col xs={12} md={12} lg={10} lgOffset={1}>
          <H1Ref>
            React Native Curriculum
            <a href="#curriculum" name="curriculum">
              #
            </a>
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
          isOpen={true}
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
