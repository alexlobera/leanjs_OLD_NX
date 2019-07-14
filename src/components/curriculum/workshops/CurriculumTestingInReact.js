import React from 'react'
import Section from '../CurriculumSection'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import TestingIntroSession from '../sessions/TestingIntroSession'
import TestingInReactSession from '../sessions/TestingInReactSession'
import E2ESession from '../sessions/E2ESession'

import selectCurriculumLayout from '../selectCurriculumLayout'

const CurriculumTestingInReact = ({
  showTitle = true,
  layout,
  enableToggle = true,
  isOpen = true,
  showLinkToCurriculum = false,
}) => {
  const type = REACT_WORKSHOP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    type,
    isOpen,
  }

  const firstHalf = (
    <Section {...commonProps} title="Testing In React">
      <TestingIntroSession />
      <TestingInReactSession />
      <E2ESession />
    </Section>
  )
  const secondHalf = null

  const title = showTitle ? (
    <H2Ref>
      Testing In React{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
      <H3>1-day workshop</H3>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({ firstHalf, title, secondHalf, layout, type })
}

export default CurriculumTestingInReact
