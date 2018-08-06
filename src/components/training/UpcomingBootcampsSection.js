import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2 } from '../text'
import { TrainingItem, TrainingList } from './'
import { LONDON } from '../../config/images'

const UpcomingBootcampsSection = () => (
  <Section>
    <Grid>
      <H2>
        <Col md={10} mdOffset={1}>
          Upcoming Bootcamps
        </Col>
      </H2>
      <Row>
        <Col md={10} mdOffset={1}>
          <TrainingList>
            <TrainingItem
              location="Greenwich, London"
              startDate="August 20th to 25th, 2018"
              name="London bootcamp"
              path="/react-redux-graphql-bootcamp-london"
              imageSrc={LONDON}
            />
          </TrainingList>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default UpcomingBootcampsSection
