import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { Span } from '../text'
import { CALLTOACTIONRED } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import { LinkButton } from '../buttons'

const Card = styled.div`
  margin-top: 36px;
  margin-bottom: 6px;
  padding: 36px;
  border: solid 4px ${CALLTOACTIONRED};
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 8px 0;
    }
  }
`

const MarketingCard = ({ text, to, buttonText }) => (
  <Card>
    <Row>
      <Col md={6}>
        <Span>{text}</Span>
      </Col>
      <Col md={6} center>
        <LinkButton to={to} variant="primary" children={buttonText} />
      </Col>
    </Row>
  </Card>
)

export default MarketingCard
