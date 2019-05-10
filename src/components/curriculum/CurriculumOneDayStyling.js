import React from 'react'
import Section, { curriedToggleNavigateTo } from './CurriculumSection'
import { Col, Row } from '../layout/Grid'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { ONE_DAY_WORKSHOP } from '../../config/data'
import { H2Ref } from '../text'
import selectCurriculumCorpLayout, {
  LIST_TWO_COL,
} from './selectCurriculumCorpLayout'

const CurriculumOneDayStyling = ({
  showTitle = true,
  layout,
  enableToggle,
  isOpen,
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
    <React.Fragment>
      <Section
        {...commonProps}
        title="Thinking in design systems"
        name="day1"
        subTitle="Atomic Design, Design Tokens & Designer developer hand over"
      />
      <Section
        {...commonProps}
        title="Styling in React"
        name="day2"
        subTitle="Component based CSS with styled-components
        & Storybook"
      />
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Design System Fundamentals"
        name="day3"
        subTitle="Themeing & Variants, using styled-components and styled-system"
      />
      <Section
        {...commonProps}
        title="Advanced UI patterns"
        name="day3"
        subTitle="Compound components and React Context, to increase re-usability and dev experience"
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Design Systems & styling in React{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumCorpLayout({ firstHalf, secondHalf, layout, type })}
    </React.Fragment>
  )
}

export default CurriculumOneDayStyling
