import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2, H3 } from '../text'
import { TrainingItem, TrainingList } from './'
import moment from 'moment'

import { selectTrainings, LONDON } from '../../config/data' 


const trainings = selectTrainings()

const UpcomingTrainings = () => trainings.map(training => (
  <TrainingItem
    key={training.trainingInstanceId}
    city={training.city}
    country={training.country}
    startDay={moment(training.dateStartsOn).format('D')}
    startMonth={moment(training.dateStartsOn).format('MMM')}
    type={training.type}
    path={training.pathUrl}
  />
))


const UpcomingTrainingSection = (props) => (
      <React.Fragment>
        {props.curriculum ?
          <React.Fragment>
            <H3 style={{marginTop: '1em'}}>Upcoming courses</H3>
            <UpcomingTrainings />
          </React.Fragment>
          :
          <Section>
            <Grid>
              <H2>
                <Col md={10} mdOffset={1}>
                  Upcoming Training
                </Col>
              </H2>
              <Row>
                <Col md={10} mdOffset={2}>
                <TrainingList>
                  <UpcomingTrainings />
                </TrainingList>
                </Col>
              </Row>
            </Grid>
          </Section>
        }
        
  </React.Fragment>
      
  )

export default UpcomingTrainingSection
