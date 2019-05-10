import React from 'react'
import styled from 'styled-components'

import { formatUTC } from '../utils'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, H3, P } from '../text'
import { TrainingItem, TrainingList } from './'
import Link from '../navigation/Link'
import { selectUpcomingTrainings } from './UpcomingTrainings'
import Newsletter from '../elements/Newsletter'
import { GREY } from '../../config/styles'

import CorporateTrainingCard from '../elements/CorporateTrainingCard'

const CorporateCrossSell = styled.div`
  border: 3px dotted ${GREY};
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

const UpcomingTrainings = ({ curriculum, type, trainings }) => {
  const filteredTrainings = selectUpcomingTrainings({ type, trainings })
  if (!filteredTrainings.length) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return filteredTrainings.map(training => {
      const formatedDate = formatUTC(
        training.startDate,
        training.utcOffset,
        'D MMM'
      )
      const dayMonth = formatedDate ? formatedDate.split(' ') : ['', '']
      const trainingInstance = (
        <TrainingItem
          key={training.id}
          cityCountry={training.cityCountry}
          startDay={dayMonth[0]}
          startMonth={dayMonth[1]}
          type={training.training && training.training.type}
          path={training.toPath}
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
        <Link to="#upcoming-courses" name="upcoming-courses" />
        <H3 style={{ marginTop: '1em' }}>Upcoming courses</H3>
        <UpcomingTrainings
          type={type}
          curriculum={curriculum}
          trainings={trainings}
        />
        <Link to="#upcoming">See all upcoming courses</Link>
        <Row>
          <Link to="#free-learning-resources" name="free-learning-resources" />
          <Col md={10}>
            <Newsletter />
          </Col>
        </Row>
        <Row>
          <Link to="#corporate-training" name="corporate-training" />
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
                <UpcomingTrainings
                  type={type}
                  curriculum={curriculum}
                  trainings={trainings}
                />
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
