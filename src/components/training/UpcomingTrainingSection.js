import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, H3, P } from '../text'
import { TrainingItem, TrainingList } from './'
import moment from 'moment'
import Link from '../navigation/Link'
import { selectUpcomingTrainings } from './withUpcomingTrainings'
import Newsletter from '../elements/Newsletter'

const UpcomingTrainings = ({ curriculum, type, trainings }) => {
  const filteredTrainings = selectUpcomingTrainings({ type, trainings })
  if (!filteredTrainings.length) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return filteredTrainings.map(training => {
      const trainingInstance = (
        <TrainingItem
          key={training.id}
          city={training.city}
          country={training.country}
          startDay={moment(training.dateStartsOn).format('D')}
          startMonth={moment(training.dateStartsOn).format('MMM')}
          type={training.type}
          path={training.pathUrl}
        />
      )
      return (
        <React.Fragment key={training.id}>
          {curriculum ? trainingInstance : <Col md={4}>{trainingInstance}</Col>}
        </React.Fragment>
      )
    })
  }
}

const UpcomingTrainingSection = ({ curriculum, type, trainings }) => (
  <React.Fragment>
    {curriculum ? (
      <React.Fragment>
        <H3 style={{ marginTop: '1em' }}>Upcoming courses</H3>
        <UpcomingTrainings
          type={type}
          curriculum={curriculum}
          trainings={trainings}
        />
        <Link to="#upcoming">See all upcoming courses</Link>
        <Row>
          <Col md={10}>
            <Newsletter />
          </Col>
        </Row>
      </React.Fragment>
    ) : (
      <Section>
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <H2Ref>
                Upcoming Training
                <Link to="#upcoming" name="upcoming">
                  #
                </Link>
              </H2Ref>
            </Col>
          </Row>
          <Row>
            <Col md={11} mdOffset={1}>
              <TrainingList>
                <UpcomingTrainings
                  type={type}
                  curriculum={curriculum}
                  trainings={trainings}
                />
              </TrainingList>
            </Col>
          </Row>
        </Grid>
      </Section>
    )}
  </React.Fragment>
)

export default UpcomingTrainingSection
