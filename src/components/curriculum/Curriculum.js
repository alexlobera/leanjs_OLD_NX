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
    // TODO does this line works in all cases?
    trainingId: trainingId || (training && training.id),
    ...rest,
  })
}

export const renderSection = ({ initialIndex, sectionProps, training }) => (
  { title, subTitle, comps },
  index
) => {
  const day = index + initialIndex
  return (
    <Section
      title={title || `Day ${day}`}
      subTitle={subTitle}
      name={`day${day}`}
      trainingTime={trainingTime({ day, training })}
      {...sectionProps}
    >
      <React.Fragment>
        {comps.map(Comp => (
          <Comp />
        ))}
      </React.Fragment>
    </Section>
  )
}

export default Curriculum
