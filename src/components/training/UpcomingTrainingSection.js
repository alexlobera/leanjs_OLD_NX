import React from 'react'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, H3, P, H5 } from '../text'
import { TrainingItem, TrainingList } from './'
import moment from 'moment'
import Link from '../navigation/Link'
import styled from 'styled-components'
import { selectTrainings } from '../../config/data'
import Newsletter from '../elements/Newsletter'

import CorporateTrainingCard from '../elements/CorporateTrainingCard'

const CorporateCrossSell = styled.div`
  border: 3px dotted #dedede;
  max-height: 78px;
  max-width: 100%;
  display: block;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  a,
  p {
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
  }
`

const UpcomingTrainings = ({ curriculum, type }) => {
  const trainings = selectTrainings(type)
  if (!trainings.length) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return trainings.map(training => {
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
  }
}

const UpcomingTrainingSection = ({ curriculum, type }) => (
  <React.Fragment>
    {curriculum ? (
      <React.Fragment>
        <H3 style={{ marginTop: '1em' }}>Upcoming courses</H3>
        <UpcomingTrainings type={type} curriculum={curriculum} />
        <Link to="#upcoming">See all upcoming courses</Link>
        <Row>
          <Col md={10}>
            <Newsletter />
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <CorporateTrainingCard />
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
                <UpcomingTrainings type={type} curriculum={curriculum} />
                <CorporateCrossSell>
                  <P>
                    <strong>Corporate team training</strong>
                  </P>
                  <Link to="/corporate-team-training/">Find out more</Link>
                </CorporateCrossSell>
              </TrainingList>
            </Col>
          </Row>
        </Grid>
      </Section>
    )}
  </React.Fragment>
)

export default UpcomingTrainingSection
