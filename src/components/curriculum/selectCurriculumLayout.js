import React from 'react'
import styled from 'styled-components'

import { H3 } from '../text'
import { LinkButton } from '../buttons'
import { Col, Row } from '../layout/Grid'
import { List } from './CurriculumSection'
import { UpcomingTrainingSection } from '../training'
import CorpTrainingFacts from './CorpTrainingKeyFacts'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const SectionCTA = styled.div.attrs({
  className: 'curriculum-cta',
})`
  padding-top: 50px;
  padding-bottom: 25px;
`

const selectCurriculumLayout = ({
  firstHalf,
  secondHalf,
  layout,
  type = '',
  trainings,
  corpTrainingFacts,
  curriculumTo,
}) => {
  const curriculumButtonSection = (
    <SectionCTA>
      <LinkButton to={curriculumTo}>Full curriculum</LinkButton>
    </SectionCTA>
  )

  if (layout === LIST_LAYOUT) {
    return (
      <React.Fragment>
        <List>
          {firstHalf}
          {secondHalf}
          {curriculumTo && curriculumButtonSection}
        </List>
      </React.Fragment>
    )
  } else if (layout === LIST_TWO_COL) {
    return (
      <React.Fragment>
        <List>
          <Row>
            <Col md={6} lg={5}>
              {firstHalf}
              {curriculumTo && curriculumButtonSection}
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              {secondHalf}
            </Col>
          </Row>
        </List>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
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
