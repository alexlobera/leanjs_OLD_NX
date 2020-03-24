import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import { trainingDateTime } from '../utils'
import selectCurriculumLayout from './selectCurriculumLayout'
import Section from './CurriculumSection'

const Curriculum = ({
  showTitle = true,
  curriculumTo,
  showLinkToCurriculum = true,
  trainingId,
  title,
  ...rest
}) => {
  const curriculumTitle =
    title && showTitle ? (
      <H2Ref>
        {title}{' '}
        <Link to="#curriculum" name="curriculum">
          #
        </Link>
      </H2Ref>
    ) : null

  return selectCurriculumLayout({
    title: curriculumTitle,
    curriculumTo: showLinkToCurriculum ? curriculumTo : undefined,
    trainingId,
    ...rest,
  })
}

export const renderSection = ({
  initialDayOffset = 0,
  sectionProps,
  training,
  titlePrefix = 'Day ',
  preEvening,
}) => ({ title, subTitle, comps }, index) => {
  const dayOffset = index + initialDayOffset
  const curriculumDay = preEvening ? dayOffset : dayOffset + 1
  const sectionTitle = title || `${titlePrefix} ${curriculumDay}`

  return (
    <Section
      title={sectionTitle}
      subTitle={subTitle}
      name={`day${curriculumDay}`}
      trainingDateTime={`- ${trainingDateTime({
        dayOffset,
        training,
        preEvening,
      })}`}
      {...sectionProps}
      key={title}
    >
      <React.Fragment>
        {comps.map((Comp, i) => (
          <Comp key={`${sectionTitle}${i}`} />
        ))}
      </React.Fragment>
    </Section>
  )
}

export default Curriculum
