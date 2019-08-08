import React from 'react'

import { H3 } from '../text'
import Link from '../navigation/Link'
import LinkButton from '../buttons/LinkButton'
import CorporateTrainingCard from './CorporateTrainingCard'
import UpcomingTrainings from './UpcomingTrainings'

const UpcomingTrainingCurriculum = ({
  type,
  trainings,
  trainingId,
  removeAdditionalCTAs = false,
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
      {!removeAdditionalCTAs && (
        <React.Fragment>
          <Link to="#free-learning-resources" name="free-learning-resources" />
          <H3 mt={2}>Free learning resources!</H3>
          <LinkButton className="free-learning-resources-cta" to="#newsletter">
            Sign up now
          </LinkButton>
          <Link to="#corporate-training" name="corporate-training" />
          <CorporateTrainingCard type={type} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default UpcomingTrainingCurriculum
