import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import { Col, Row } from '../../layout/Grid'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import HoCsRenderPropsStateReducerSession from '../sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from '../sessions/ReactPerformanceSession'
import selectCurriculumLayout, { LIST_TWO_COL } from '../selectCurriculumLayout'

const CurriculumAdvReactPatterns = ({
  showTitle = true,
  layout,
  enableToggle = true,
  isOpen = true,
  toggleNavigateTo = `/react/curriculum?tab=${ONE_DAY_WORKSHOP}`,
  marketingCard = null,
  showLinkToCurriculum = false,
}) => {
  const toggleNavigateToSection = curriedToggleNavigateTo(toggleNavigateTo)
  const type = ONE_DAY_WORKSHOP
  const commonProps = {
    showLinkToCurriculum,
    enableToggle,
    toggleNavigateTo: toggleNavigateToSection,
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

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Advanced React Patterns, FP and Performance{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
              <H3>1-day workshop</H3>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({ firstHalf, secondHalf, layout, type })}
    </React.Fragment>
  )
}

export default CurriculumAdvReactPatterns
