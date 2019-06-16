import React from 'react'
import Section from '../CurriculumSection'
import { Col, Row } from '../../layout/Grid'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import HoCsRenderPropsStateReducerSession from '../sessions/HoCsRenderPropsStateReducerSession'
import ReactPerformanceSession from '../sessions/ReactPerformanceSession'
import selectCurriculumLayout, { LIST_TWO_COL } from '../selectCurriculumLayout'

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
