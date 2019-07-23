import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { Span, H4 } from '../text'
import { RED } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import { LinkButton } from '../buttons'

const Card = styled.div`
  margin-top: 36px;
  margin-bottom: 6px;
  padding: 36px;
  border: solid 4px ${RED};
  div {
    align-items: center;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 8px 0;
    }
  }
`

const MarketingCard = ({
  text,
  to,
  heading,
  className = 'blog-article',
  ...rest
}) => (
  <Card>
    <Row>
      <Col md={6}>
        {heading && <H4 mb={1}>{heading}</H4>}
        <Span>{text}</Span>
      </Col>
      <Col md={5} lgOffset={1} center>
        <div>
          <LinkButton
            to={to}
            variant="secondary"
            children={rest.buttonText || rest['button-text']}
            className={className}
          />
        </div>
      </Col>
    </Row>
  </Card>
)

export default MarketingCard
