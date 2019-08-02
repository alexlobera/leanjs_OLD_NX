import React from 'react'

import { H3 } from '../text'
import { UpcomingTrainings } from './UpcomingTrainingSection'
import { selectUpcomingTrainings } from './UpcomingTrainings'
import { LinkButton } from '../buttons'
import { Row, Col } from '../layout/Grid'
import Section from '../layout/Section'

import {
  ADVANCED_REACT,
  PART_TIME,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
} from '../../config/data'

const AlternativeTrainings = ({
  trainings,
  titleText = 'You may also be interested in',
  city,
  hideAllBtn = false,
}) =>
  trainings && trainings.length ? (
    <React.Fragment>
      <H3>{titleText}</H3>
      <Row>
        <UpcomingTrainings
          className="suggested-courses"
          limit={3}
          city={city}
          trainings={trainings}
        />
      </Row>
      {!hideAllBtn && (
        <LinkButton className="suggested-courses" to="#upcoming">
          See all Courses
        </LinkButton>
      )}
    </React.Fragment>
  ) : null

export const AlternativeTrainingSection = ({
  hideAllBtn = true,
  trainings,
}) => (
  <Section>
    <Row>
      <Col lg={10} lgOffset={1}>
        <AlternativeTrainings hideAllBtn={hideAllBtn} trainings={trainings} />
      </Col>
    </Row>
  </Section>
)

export const AlternativeBootcampTrainings = ({ trainings, city }) => {
  const reactTrainings = selectUpcomingTrainings({
    trainings,
    city,
    types: [REACT_FUNDAMENTALS, REACT_WORKSHOP, ADVANCED_REACT, PART_TIME],
    limit: 3,
  })

  return (
    <AlternativeTrainings
      trainings={reactTrainings}
      titleText="Alternatives to the React Bootcamp"
    />
  )
}

export default AlternativeTrainings
