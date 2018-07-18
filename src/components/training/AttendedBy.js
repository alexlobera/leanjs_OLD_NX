import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import { Blockquote, H1, H2, H3 } from '../text'
import { Trainline, FinancialTimes, ABInBev, Blockchain } from '../logos'

const AttendedBy = () => (
  <Grid style={{ paddingBottom: '30px' }}>
    <H2>Our training is attended by developers from</H2>
    <Row>
      <Col md={4} lg={3}>
        <ABInBev />
      </Col>
      <Col md={4} lg={3}>
        <Blockchain />
      </Col>
      <Col md={4} lg={3}>
        <Trainline />
      </Col>
      <Col md={4} lg={2}>
        <FinancialTimes />
      </Col>
      {/* <Col xs={6} md={4} lg={3}>
        <div className="bg-asos" />
      </Col> */}
      {/* <Col xs={6} md={4} lg={2}>
        <div className="bg-equionconsulting" />
      </Col> */}
    </Row>
  </Grid>
)

export default AttendedBy
