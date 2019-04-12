import React from 'react'
import { Col, Row } from '../layout/Grid'
import { List } from './CurriculumSection'
import { H3, P, H4 } from '../text'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import CorpTrainingFacts from './CorpTrainingKeyFacts'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const selectCurriculumCorpLayout = ({
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
            <CorpTrainingFacts />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default selectCurriculumCorpLayout
