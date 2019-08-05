import React from 'react'

import { Col, Row } from '../layout/Grid'
import { Span, H4 } from '../text'
import { LinkButton } from '../buttons'
import Card from '../elements/Card'
import { selectTypeColor, selectBorderStyle } from '../utils'

const MarketingCard = ({
  text,
  to,
  heading,
  className = 'blog-article',
  type,
  mt = 4,
  mb = 2,
  ...rest
}) => (
  <Card
    variant="info"
    borderStyle={selectBorderStyle(type)}
    borderColor={selectTypeColor(type)}
    mt={mt}
    mb={mb}
  >
    <Row>
      <Col md={6}>
        {heading && <H4 mb={1}>{heading}</H4>}
        <Span>{text}</Span>
      </Col>
      <Col md={5} lgOffset={1}>
        <LinkButton
          to={to}
          variant="secondary"
          children={rest.buttonText || rest['button-text']}
          className={className}
        />
      </Col>
    </Row>
  </Card>
)

export default MarketingCard
