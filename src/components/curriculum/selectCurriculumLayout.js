import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H3 } from '../text'
import { LinkButton } from '../buttons'
import { Col, Row } from '../layout/Grid'
import { UpcomingTrainingSection } from '../training'
import CorpTrainingFacts from './CorpTrainingKeyFacts'
import Flex from '../layout/Flex'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const SectionCTA = styled.div.attrs({
  className: 'curriculum-cta',
})`
  ${space({ pt: 5 })}
`

const selectCurriculumLayout = ({
  firstHalf,
  secondHalf,
  layout,
  type = '',
  trainings,
  corpTrainingFacts,
  curriculumTo,
  title,
}) => {
  const curriculumButtonSection = (
    <SectionCTA>
      <LinkButton to={curriculumTo}>sss Full curriculum</LinkButton>
    </SectionCTA>
  )

  if (layout === LIST_LAYOUT) {
    return (
      <React.Fragment>
        {title}
        <Flex flexDirection="column">
          {firstHalf}
          {secondHalf}
          {curriculumTo && curriculumButtonSection}
        </Flex>
      </React.Fragment>
    )
  } else if (layout === LIST_TWO_COL) {
    return (
      <React.Fragment>
        {title}
        <Flex flexDirection="column">
          <Row>
            <Col md={6} lg={5}>
              {firstHalf}
              {curriculumTo && curriculumButtonSection}
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              {secondHalf}
            </Col>
          </Row>
        </Flex>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        {title && (
          <Row>
            <Col lg={10} lgOffset={1}>
              {title}
            </Col>
          </Row>
        )}
        <Row>
          <Col md={6} lg={5} lgOffset={1}>
            <H3>Course outline</H3>
            {firstHalf}
            {secondHalf}
            {curriculumTo && curriculumButtonSection}
          </Col>
          <Col md={5} lg={4} mdOffset={1}>
            {trainings ? (
              <UpcomingTrainingSection
                trainings={trainings}
                curriculum
                type={type}
              />
            ) : corpTrainingFacts ? (
              <CorpTrainingFacts />
            ) : null}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default selectCurriculumLayout
