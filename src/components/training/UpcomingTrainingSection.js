import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { P, H2, H3, H5 } from '../text'
import { TrainingItem, TrainingList } from './'
import moment from 'moment'
import LinkButton from '../buttons/LinkButton'

import { selectTrainings } from '../../config/data'
import MarketingCard from '../curriculum/MarketingCard'

const trainings = selectTrainings()

const UpcomingTrainings = ({ curriculum }) =>
  trainings.map(training => {
    const trainingInstance = (
      <TrainingItem
        key={training.trainingInstanceId}
        city={training.city}
        country={training.country}
        startDay={moment(training.dateStartsOn).format('D')}
        startMonth={moment(training.dateStartsOn).format('MMM')}
        type={training.type}
        path={training.pathUrl}
      />
    )
    return (
      <React.Fragment key={training.trainingInstanceId}>
        {curriculum ? trainingInstance : <Col md={4}>{trainingInstance}</Col>}
      </React.Fragment>
    )
  })

const UpcomingTrainingSection = ({ curriculum }) => (
  <React.Fragment>
    {curriculum ? (
      <React.Fragment>
        <H3 style={{ marginTop: '1em' }}>Upcoming courses</H3>
        <UpcomingTrainings curriculum={curriculum} />
        <H5 style={{ marginTop: '2em', marginBottom: '0.5rem' }}>
          Signup to our newsletter
        </H5>
        <P>
          Join our community! Be the first to know all about the latest course
          dates and new locations.{' '}
        </P>
        <LinkButton secondary to="#contact-us">
          Sign up now
        </LinkButton>
      </React.Fragment>
    ) : (
      <Section>
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>Upcoming Training</H2>
            </Col>
          </Row>
          <Row>
            <Col md={11} mdOffset={1}>
              <TrainingList>
                <UpcomingTrainings curriculum={curriculum} />
              </TrainingList>
            </Col>
          </Row>
        </Grid>
      </Section>
    )}
  </React.Fragment>
)

export default UpcomingTrainingSection
