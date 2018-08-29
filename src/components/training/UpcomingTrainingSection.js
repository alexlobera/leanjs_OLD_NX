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
            {/* <TrainingItem
              location="Greenwich, London"
              startDate="August 20th to 25th, 2018"
              name="London bootcamp"
              path="/react-redux-graphql-bootcamp-london"
              imageSrc={LONDON}
            />
            <TrainingItem
              location="Eden House, London"
              startDate="Sept 17th, 2018"
              name="React Native London"
              path="/react-native-bootcamp-london"
              imageSrc={LONDON}
            />
            <TrainingItem
              location="TBD, London"
              startDate="Oct 16th to Nov 22nd, 2018."
              name="London part-time"
              path="/react-redux-training-london"
              imageSrc={LONDON}
            />
            <TrainingItem
              location="Torres Vedras, Lisbon distr."
              startDate="October 7th to 13th, 2018"
              name="Lisbon bootcamp"
              path="/react-redux-graphql-bootcamp-lisbon"
              imageSrc={LISBON}
            /> */}
          </TrainingList>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default UpcomingTrainingSection
