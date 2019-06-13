import React from 'react'

import { Card } from '../elements'
import { H3 } from '../text'
import { UpcomingTrainings } from '../training/UpcomingTrainingSection'
import { LinkButton } from '../buttons'

const AlternativeTrainings = ({ trainings }) => (
  <Card border="black">
    <H3>Alternatives to the React Bootcamp</H3>
    <UpcomingTrainings trainings={trainings} />
    <LinkButton to="#upcoming">See all Courses</LinkButton>
  </Card>
)

export default AlternativeTrainings
