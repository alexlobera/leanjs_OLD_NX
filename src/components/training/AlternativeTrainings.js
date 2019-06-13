import React from 'react'

import { Card } from 'src/components/elements'
import { H3 } from 'src/components/text'
import { UpcomingTrainings } from 'src/components/training/UpcomingTrainingSection'
import { LinkButton } from 'src/components/buttons'

const AlternativeTrainings = ({ trainings }) => (
  <Card border="black">
    <H3>Alternatives to the React Bootcamp</H3>
    <UpcomingTrainings trainings={trainings} />
    <LinkButton to="#upcoming">See all React Courses</LinkButton>
  </Card>
)

export default AlternativeTrainings
