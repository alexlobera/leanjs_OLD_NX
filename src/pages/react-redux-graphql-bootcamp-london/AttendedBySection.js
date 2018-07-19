import React from 'react'
import AttendedBy from '../../components/training/AttendedBy'
import Section from '../../components/layout/Section'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2, H3, Badge } from '../../components/text'
import P from '../../components/layout/P'
import Card from '../../components/layout/Card'
import Button from '../../components/buttons/Button'

const AttendedBySectionLondon = props => (
  <Section>
    <AttendedBy />
    <Grid>
      <Row>
        <Col xs={12} md={7}>
          <iframe
            style={{ marginTop: '30px', marginBottom: '30px', border: 0 }}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/yvROXLQ1jHg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Col>
        <Col xs={12} md={5}>
          <H2>Prices</H2>
          <P>
            Please be aware that the tickets cover the cost of the training, it
            does not include the cost of the flights and accomodation.
          </P>
          <Card>
            <P>
              <strong>Early bird ticket</strong>
              <Badge style={{ float: 'right' }}>Save 20%</Badge>
            </P>
            <P>Early bird tickes available until 20th July 2018.</P>
            <H3>
              &pound;1740
              <Button style={{ float: 'right' }}>Buy now</Button>
            </H3>
          </Card>
          <Card style={{ marginTop: '20px' }}>
            <P>
              <strong>Pay by Installments</strong>
            </P>
            <P>
              Pay in 3 installments - the first one being 50% of the total cost
              and the others to follow over 6 months. Contact us and we can talk
              things through with you.
            </P>
            <H3>
              &pound;2160
              <Button style={{ float: 'right' }}>Contact us</Button>
            </H3>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default AttendedBySectionLondon
