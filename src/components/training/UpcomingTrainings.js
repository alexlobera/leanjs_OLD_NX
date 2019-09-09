import React from 'react'

import { formatUTC } from '../utils'
import { Col } from '../layout/Grid'
import { P } from '../text'
import TrainingItem from './TrainingItem'
import selectUpcomingTrainings from './selectUpcomingTrainings'

const UpcomingTrainings = ({
  curriculum,
  type,
  city,
  limit,
  trainingId,
  trainings,
  className,
}) => {
  const filteredTrainings = selectUpcomingTrainings({
    type,
    limit,
    city,
    trainings,
    trainingId,
  })

  if (!filteredTrainings.length || !filteredTrainings[0].id) {
    return <P>Sorry! There are no {type} dates confirmed.</P>
  } else {
    return filteredTrainings.map(training => {
      const formatedDate = formatUTC(
        training.startDate,
        training.utcOffset,
        'D MMM'
      )
      const dayMonth = formatedDate ? formatedDate.split(' ') : ['', '']
      const startDate = new Date(training.startDate)
      const endDate = new Date(training.endDate)
      const daysCoefficient = 86400000 // 1000 * 60 * 60 * 24
      const hourCoefficient = 3600000 // 1000 * 60 * 60
      const days = Math.round((endDate - startDate) / daysCoefficient) + 1
      const hours = Math.round((endDate - startDate) / hourCoefficient)
      const duration =
        hours < 7
          ? ``
          : days < 2
          ? '1 day'
          : days < 3
          ? `2 days`
          : days < 5
          ? `3 days`
          : days < 10
          ? '1 week'
          : days < 40
          ? '1 month'
          : ''

      const trainingInstance = (
        <TrainingItem
          key={training.id}
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
}

export default UpcomingTrainings
