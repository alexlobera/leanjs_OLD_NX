import React from 'react'
import Section, { TopSection } from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2, P, H5 } from '../text'
import ImagePlaceholder from '../wireframes/ImagePlaceholder'
import LinkButton from '../buttons/LinkButton'

const UpcomingBootcampsSection = () => (
  <Section>
    <Grid>
      <Row>
        <Col sm={12} md={10} mdOffset={1}>
          <H2>Upcoming Bootcamps</H2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={5} mdOffset={1}>
          <Row>
            <Col sm={5}>
              <ImagePlaceholder />
            </Col>
            <Col sm={7}>
              <H5>London Bootcamp</H5>
              <P>venue: To be Confirmed</P>
              <P>starts: to be confirmed</P>
              <LinkButton>London Bootcamp</LinkButton>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={5}>
          <Row>
            <Col sm={5}>
              <ImagePlaceholder />
            </Col>
            <Col sm={7}>
              <H5>London Bootcamp</H5>
              <P>venue: To be Confirmed</P>
              <P>starts: to be confirmed</P>
              <LinkButton>London Bootcamp</LinkButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default UpcomingBootcampsSection
