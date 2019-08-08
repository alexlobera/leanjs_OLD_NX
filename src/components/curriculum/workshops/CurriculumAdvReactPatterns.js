import React from 'react'
import Section from '../CurriculumSection'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import HoCsRenderPropsStateReducerSession from '../sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from '../sessions/ReactPerformanceSession'
import selectCurriculumLayout from '../selectCurriculumLayout'
import { Li } from '../../layout/Ul'

const CurriculumAdvReactPatterns = ({
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
    <Section
      {...commonProps}
      title="Advanced React Patterns, FP and Performance"
    >
      <HoCsRenderPropsStateReducerSession />
      <ReactPerformanceSession />
    </Section>
  )
  const secondHalf = null

  const title = showTitle ? (
    <H2Ref>
      Advanced React Patterns, FP and Performance{' '}
      <Link to="#curriculum" name="curriculum">
        #
      </Link>
      <H3>1-day workshop</H3>
    </H2Ref>
  ) : null

  return selectCurriculumLayout({ firstHalf, secondHalf, title, layout, type })
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li></Li>
  </React.Fragment>
)

export default CurriculumAdvReactPatterns
