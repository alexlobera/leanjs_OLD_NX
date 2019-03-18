import React from 'react'
import { Col, Row } from '../layout/Grid'
import { List } from './CurriculumSection'
import { UpcomingTrainingSection } from '../training'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const selectCurriculumLayout = ({
  firstHalf,
  secondHalf,
  layout,
  type = '',
}) => {
  if (layout === LIST_LAYOUT) {
    return (
      <React.Fragment>
        <List>
          {firstHalf}
          {secondHalf}
        </List>
      </React.Fragment>
    )
  } else if (layout === LIST_TWO_COL) {
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
            <UpcomingTrainingSection curriculum type={type} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default selectCurriculumLayout
