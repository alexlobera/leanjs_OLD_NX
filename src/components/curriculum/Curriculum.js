import React from 'react'
import Link from '../navigation/Link'
import { H2Ref } from '../text'
import { trainingTime } from '../utils'
import selectCurriculumLayout from './selectCurriculumLayout'
import Section from './CurriculumSection'

const Curriculum = ({
  showTitle = true,
  curriculumTo,
  showLinkToCurriculum = true,
  trainingId,
  training,
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
    trainingId: trainingId || (training && training.id),
    ...rest,
  })
}

export const renderSection = ({
  initialIndex,
  sectionProps,
  training,
  titlePrefix = 'Day ',
}) => ({ title, subTitle, comps }, index) => {
  const day = index + initialIndex
  const sectionTitle = title || `${titlePrefix} ${day}`
  return (
    <Section
      title={sectionTitle}
      subTitle={subTitle}
      name={`day${day}`}
      trainingTime={trainingTime({ day, training })}
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
