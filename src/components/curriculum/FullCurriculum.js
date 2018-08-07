import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H1Ref } from '../text'
import CurriculumBootcamp from './CurriculumBootcamp'
import CurriculumReactNative from './CurriculumReactNative'

const FullCurriculum = () => (
  <React.Fragment>
    <Row>
      <Col xs={12} md={12} lg={10} lgOffset={1}>
        <H1Ref>
          Our full learning curriculum{' '}
          <a href="#curriculum" name="curriculum">
            #
          </a>
        </H1Ref>
      </Col>
    </Row>
    <CurriculumBootcamp showTitle={false} />
    <CurriculumReactNative showTitle={false} isOpen={false} />
  </React.Fragment>
)

export default FullCurriculum
