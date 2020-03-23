import React from 'react'

import { Col } from '../layout/Grid'
import { P } from '../text'
import TrainingItem, { getTrainingTimings } from './TrainingItem'
import selectUpcomingTrainings from './selectUpcomingTrainings'

const UpcomingTrainings = ({
  curriculum,
  trainingType,
  trainingInstanceTypeName,
  tech,
  city,
  limit,
  trainingId,
  trainings,
  className,
}) => {
  const filteredTrainings = selectUpcomingTrainings({
    trainingType,
    trainingInstanceTypeName,
    tech,
    limit,
    city,
    trainings,
    trainingId,
  })

  //   if (!filteredTrainings.length || !filteredTrainings[0].id) {
  //     return <P>Sorry! There are no {type} dates confirmed.</P>
  //   } else {
  if (!filteredTrainings.length) {
    return <P>Sorry! There are no training dates confirmed.</P>
  }

  return filteredTrainings.map(training => {
    const { dayMonth, duration } = getTrainingTimings({ training })
    const trainingInstance = (
      <TrainingItem
        key={training.id}
        isOnline={training.isOnline}
        cityCountry={training.cityCountry}
        startDay={dayMonth[0]}
        startMonth={dayMonth[1]}
        duration={duration}
        type={training.type}
        title={training.title}
        path={training.toPath}
        className={className}
      />
    )

    return (
      <React.Fragment key={training.id}>
        {curriculum ? trainingInstance : <Col md={4}>{trainingInstance}</Col>}
      </React.Fragment>
    )
  })
}

export default UpcomingTrainings
