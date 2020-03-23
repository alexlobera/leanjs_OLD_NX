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
  //type,
  trainingType,
  tech,
  sx: { mt = 4, mb = 2, ...sxRest } = {},
  ...rest
}) => (
  <Card
    variant="info"
    sx={{
      borderStyle: selectBorderStyle({ trainingType }),
      borderColor: selectTypeColor({ tech }),
      mt,
      mb,
      ...sxRest,
    }}
  >
    <Row>
      <Col md={7}>
        {heading && <H4 sx={{ mb: 0, pt: 0 }}>{heading}</H4>}
        {text && <Span sx={{ display: 'inline-block', mt: 1 }}>{text}</Span>}
      </Col>
      <Col md={5}>
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
