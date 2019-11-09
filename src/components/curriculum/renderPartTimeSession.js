import React from 'react'
import Section from './CurriculumSection'
import { trainingDateTime } from '../utils'

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
