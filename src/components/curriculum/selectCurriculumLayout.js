import React from 'react'
import styled from 'styled-components'

import { H3 } from '../text'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Col, Row } from '../layout/Grid'
import UpcomingTrainingCurriculum from '../training/UpcomingTrainingCurriculum'
import Flex from '../layout/Flex'
import Box from '../layout/Box'
import { GRAPHQL_BOOTCAMP } from '../../config/data'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const SectionCTA = styled(Box)``
SectionCTA.defaultProps = {
  pt: 5,
}

const selectCurriculumLayout = ({
  firstHalf,
  secondHalf,
  layout,
  type = '',
  trainings,
  content,
  curriculumTo,
  title,
  trainingId,
  marketingCard,
  curriculumTitle = 'Course outline',
}) => {
  const curriculumButtonSection = (
    <SectionCTA>
      <LinkButton className="curriculum-cta" to={curriculumTo}>
        Full curriculum
      </LinkButton>
    </SectionCTA>
  )

  const typedMarketingCard = marketingCard
    ? React.cloneElement(marketingCard, { type })
    : null

  if (layout === LIST_LAYOUT) {
    return (
      <React.Fragment>
        {title}
        <Flex flexDirection="column">
          {firstHalf}
          {typedMarketingCard}
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
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              {secondHalf}
            </Col>
          </Row>

          {curriculumTo && curriculumButtonSection}
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
            <H3>
              {curriculumTitle}
              <a name="curriculum" />
            </H3>
            {firstHalf}
            {typedMarketingCard}
            {secondHalf}
            {curriculumTo && curriculumButtonSection}
          </Col>
          <Col md={5} lg={4} mdOffset={1}>
            {trainings && (
              <UpcomingTrainingCurriculum
                trainingId={trainingId}
                trainings={trainings}
                type={type}
              />
            )}
            {content === null ? null : content ? (
              content
            ) : (
              <React.Fragment>
                <Link
                  to="#free-learning-resources"
                  name="free-learning-resources"
                />
                <H3 mt={2}>Free learning resources!</H3>
                <LinkButton
                  className="free-learning-resources-cta"
                  to="#newsletter"
                >
                  Sign up now
                </LinkButton>
                <Link to="#corporate-training" name="corporate-training" />
                <H3>Training anywhere, anytime?</H3>
                <LinkButton
                  to={
                    type === GRAPHQL_BOOTCAMP
                      ? `/graphql/training/corporate/`
                      : '/react/training/corporate/'
                  }
                  className="corporate-team-training-course-cta"
                >
                  Corporate Team Training
                </LinkButton>
              </React.Fragment>
            )}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default selectCurriculumLayout
