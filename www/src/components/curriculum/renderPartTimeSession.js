import React from 'react'
import Section from './CurriculumSection'
import { trainingDateTime, convertMinutesToHoursAndMinutes } from '../utils'

const renderPartTimeSection = ({
  sectionProps = {},
  training,
} = {}) => initialIndex => ({ title, Comp, group }, index) => {
  let dayOffset = index + initialIndex
  const sectionNum = index + initialIndex + 1

  if (
    training &&
    training.daysOfTheWeek &&
    training.daysOfTheWeek.length === 1
  ) {
    dayOffset = group - 1
  }

  // TODO replace this by data from the API training instance unit in the training object
  const { coachName } = Comp || {}
  let gmt
  if (training && training.isOnline) {
    const {
      hours: utcHours,
      minutes: utcMinutes,
    } = convertMinutesToHoursAndMinutes(training.utcOffset)
    gmt = `GMT${utcHours}:${utcMinutes}`
  }

  return (
    <Section
      title={`Session ${sectionNum} - ${title ||
        (Comp.defaultProps && Comp.defaultProps.title)}`}
      name={`session${sectionNum}`}
      trainingDateTime={
        training && (
          <React.Fragment>
            <br />
            {trainingDateTime({ dayOffset, training })}
            {gmt && (
              <small>
                {` `}
                {gmt}
              </small>
            )}
            {coachName && ` by ${coachName}`}
          </React.Fragment>
        )
      }
      {...sectionProps}
    >
      <Comp title="" />
    </Section>
  )
}

export default renderPartTimeSection
