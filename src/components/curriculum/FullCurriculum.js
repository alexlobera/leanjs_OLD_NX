import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { H1Ref, H4Ref } from '../text'
import Link from '../navigation/Link'
import CurriculumBootcamp from './CurriculumBootcamp' 

const FullCurriculum = () => ( 
  <React.Fragment>
    <Row>
      <Col xs={12} md={12} lg={10} lgOffset={1}>
        <H1Ref>
          Our React curriculum{' '}
          <Link to="#curriculum" name="curriculum">
            #
          </Link>
        </H1Ref>
      </Col>
    </Row>
    <CurriculumBootcamp showTitle={false} />
  </React.Fragment>
)

export default FullCurriculum
