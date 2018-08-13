import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { H1Ref } from '../text'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import CurriculumBootcamp from './CurriculumBootcamp'

const RowCTA = styled(Row)`
  padding-top: 50px;
  padding-bottom: 25px;
`
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
    <RowCTA>
      <Col lg={10} lgOffset={1}>
        <LinkButton secondary to="/curriculum">
          Full curriculum>>
        </LinkButton>
      </Col>
    </RowCTA>
  </React.Fragment>
)

export default FullCurriculum
