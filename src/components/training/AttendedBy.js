import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'

const AttendedBy = () => (
  <Grid style={{ paddingBottom: '30px' }}>
    <H2>Our training is attended by developers from</H2>
    <Row>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
      <Col xs={6} md={4} lg={2}>
        <ImagePlaceholder width="100%" />
      </Col>
    </Row>
  </Grid>
)

export default AttendedBy
