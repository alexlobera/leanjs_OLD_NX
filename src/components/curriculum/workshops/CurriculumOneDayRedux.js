import React from 'react'
import Section from '../CurriculumSection'
import { Col, Row } from '../../layout/Grid'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
import selectCurriculumLayout, { LIST_TWO_COL } from '../selectCurriculumLayout'
import IntroReduxSessions from '../sessions/IntroReduxSession'
import AdvancedReduxSession from '../sessions/AdvancedReduxSession'

const CurriculumOneDayRedux = ({
  showTitle = true,
  layout,
  enableToggle = true,
  isOpen,
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
    <React.Fragment>
      <Section
        {...commonProps}
        title="Redux Fundamentals"
        subTitle="Redux from the ground up"
      >
        <IntroReduxSessions />
      </Section>
    </React.Fragment>
  )
  const secondHalf = (
    <React.Fragment>
      <Section
        {...commonProps}
        title="Advanced Redux"
        subTitle="Advanced concepts including FP and middlewares"
      >
        <AdvancedReduxSession />
      </Section>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {showTitle ? (
        <Row>
          <Col lg={10} lgOffset={layout !== LIST_TWO_COL ? 1 : 0}>
            <H2Ref>
              Redux{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
              <H3>1 day workshop</H3>
            </H2Ref>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {selectCurriculumLayout({
        firstHalf,
        secondHalf,
        layout,
        type,
        corpTrainingFacts: true,
      })}
    </React.Fragment>
  )
}

export default CurriculumOneDayRedux
