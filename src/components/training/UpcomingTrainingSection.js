import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2 } from '../text'
import { TrainingItem, TrainingList } from './'
import { LONDON as LONDON_IMG, LISBON as LISBON_IMG } from '../../config/images'

import { selectTrainings, LONDON } from '../../config/data'

const trainings = selectTrainings()

const UpcomingTrainingSection = () => (
  <Section>
    <Grid>
      <H2>
        <Col md={10} mdOffset={1}>
          Upcoming Training
        </Col>
      </H2>
      <Row>
        <Col md={10} mdOffset={1}>
          <TrainingList>
            {trainings.map(training => (
              <TrainingItem
                key={training.trainingInstanceId}
                city={training.city}
                country={training.country}
                startDate={training.dates}
                name={training.type}
                path={training.pathUrl}
                imageSrc={training.city === LONDON ? LONDON_IMG : LISBON_IMG}
              />
            ))}
          </TrainingList>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default UpcomingTrainingSection
