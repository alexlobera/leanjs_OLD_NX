import React from 'react'

import { Card } from '../elements'
import { H3 } from '../text'
import { UpcomingTrainings } from '../training/UpcomingTrainingSection'
import { LinkButton } from '../buttons'
import { Col, Row } from '../layout/Grid'

const AlternativeTrainings = ({ trainings }) => (
  <Card border="blue">
    <Row>
      <Col md={11} mdOffset={1}>
        <H3>Alternatives to the React Bootcamp</H3>
        <Row>
          <UpcomingTrainings trainings={trainings} />
        </Row>
        <LinkButton to="#upcoming">See all Courses</LinkButton>
      </Col>
    </Row>
  </Card>
)

export default AlternativeTrainings
