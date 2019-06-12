import React from 'react'
import Section, { curriedToggleNavigateTo } from '../CurriculumSection'
import { Col, Row } from '../../layout/Grid'
import Link from '../../navigation/Link'
import { ONE_DAY_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import TestingIntroSession from '../sessions/TestingIntroSession'
import TestingInReactSession from '../sessions/TestingInReactSession'
import E2ESession from '../sessions/E2ESession'

import selectCurriculumLayout, { LIST_TWO_COL } from '../selectCurriculumLayout'

const CurriculumTestingInReact = ({
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
    <Section {...commonProps} title="Testing In React">
      <TestingIntroSession />
      <TestingInReactSession />
      <E2ESession />
    </Section>
  )
  const secondHalf = null

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Testing In React{' '}
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

export default CurriculumTestingInReact
