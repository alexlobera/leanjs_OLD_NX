import React from 'react'
import { H1 } from '../text'
import Section from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import AdvancedReduxSession from './sessions/AdvancedReduxSession'
import CompoundCompAndContextSession from './sessions/CompoundCompAndContextSession'
import HoCsAndRenderPropsSession from './sessions/HoCsAndRenderPropsSession'

const Curriculum1DayAdvancedReactRedux = () => {
  const commonProps = { showToggle: false }

  return (
    <React.Fragment>
      <Row>
        <Col md={10} lgOffset={1}>
          <H1>1-day Advanced Training Curriculum</H1>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={5} lgOffset={1}>
          <Section
            {...commonProps}
            title="Advanced React & Functional Programming"
            name="day1"
          >
            <HoCsAndRenderPropsSession title="Functional Programming & Advanced React patterns" />
            <CompoundCompAndContextSession title="Compound Component and Context" />
          </Section>
        </Col>
        <Col md={6} lg={5}>
          <Section
            {...commonProps}
            title="Advanced Redux & Functional Programming"
            name="day1"
          >
            <AdvancedReduxSession />
          </Section>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Curriculum1DayAdvancedReactRedux
