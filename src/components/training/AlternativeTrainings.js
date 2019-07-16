import React from 'react'

import { Card } from '../elements'
import { H3 } from '../text'
import { UpcomingTrainings } from './UpcomingTrainingSection'
import { getUpcomingTrainingsByType } from './UpcomingTrainings'
import { LinkButton } from '../buttons'
import { Col, Row } from '../layout/Grid'

import {
  ADVANCED_REACT,
  PART_TIME,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  ONE_DAY_WORKSHOP,
} from 'src/config/data'

const AlternativeTrainings = ({
  trainings,
  titleText = 'You may also be interested in',
}) =>
  trainings && trainings.length ? (
    <Card border="blue">
      <Row>
        <Col md={11} mdOffset={1}>
          <H3>{titleText}</H3>
          <Row>
            <UpcomingTrainings trainings={trainings} />
          </Row>
          <LinkButton to="#upcoming">See all Courses</LinkButton>
        </Col>
      </Row>
    </Card>
  ) : null

export const AlternativeBootcampTrainings = ({ trainings }) => {
  const reactTrainings = getUpcomingTrainingsByType({
    trainings,
    types: [
      REACT_FUNDAMENTALS,
      REACT_WORKSHOP,
      ADVANCED_REACT,
      ONE_DAY_WORKSHOP,
      PART_TIME,
    ],
    first: 3,
  })

  return (
    <AlternativeTrainings
      trainings={reactTrainings}
      titleText="Alternatives to the React Bootcamp"
    />
  )
}

export default AlternativeTrainings
