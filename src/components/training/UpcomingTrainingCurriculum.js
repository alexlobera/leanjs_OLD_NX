import React from 'react'

import { H3 } from '../text'
import Link from '../navigation/Link'
import UpcomingTrainings from './UpcomingTrainings'

const UpcomingTrainingCurriculum = ({
  type,
  trainings,
  trainingId,
  className = 'upcoming-courses-upcoming-dates',
}) => {
  return (
    <React.Fragment>
      <Link to="#upcoming-courses" name="upcoming-courses" />
      <H3 pt={[4, 0]}>Upcoming dates</H3>
      <UpcomingTrainings
        type={type}
        trainingId={trainingId}
        limit={5}
        curriculum
        trainings={trainings}
        className={className}
      />
      <Link className="upcoming-courses-upcoming-dates" to="#upcoming">
        See all upcoming courses
      </Link>
    </React.Fragment>
  )
}

export default UpcomingTrainingCurriculum
