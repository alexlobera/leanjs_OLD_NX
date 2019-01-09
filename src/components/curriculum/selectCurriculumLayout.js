import React from 'react'
import { Col, Row } from '../layout/Grid'
import { List } from './CurriculumSection'
import { UpcomingTrainingSection } from '../training'

const selectCurriculumLayout = (firstHalf, secondHalf, layoutProp) => {
  if (layoutProp === 'list') {
    return (
      <React.Fragment>
        <List>
          {firstHalf}
          {secondHalf}
        </List>
      </React.Fragment>
    )
  } else if (layoutProp === 'listTwoCol') {
    return (
      <React.Fragment>
        <List>
          <Row>
            <Col md={6} lg={5}>
              {firstHalf}
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              {secondHalf}
            </Col>
          </Row>
        </List>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            {firstHalf}
            {secondHalf}
          </Col>
          <Col md={6} lg={5} lgOffset={1}>
            <UpcomingTrainingSection curriculum />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default selectCurriculumLayout
