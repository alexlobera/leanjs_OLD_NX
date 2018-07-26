import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2 } from '../text'
import { TrainingItem, TrainingList } from './'
import { LONDON } from '../../config/images'

const UpcomingPartTimeCoursesSection = () => (
  <Section>
    <Grid>
      <H2>
        <Col lg={10} lgOffset={1}>
          Upcoming React part-time courses{' '}
        </Col>
      </H2>
      <Row>
        <Col lg={10} lgOffset={1}>
          <TrainingList>
            <TrainingItem
              location="Makers Academy, London"
              startDate="Oct 2nd to Nov 8th, 2018."
              name="London part-time"
              path="/react-redux-training-london"
              imageSrc={LONDON}
            />
          </TrainingList>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default UpcomingPartTimeCoursesSection
