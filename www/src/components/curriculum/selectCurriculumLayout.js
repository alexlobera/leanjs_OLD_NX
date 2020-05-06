import React from 'react'

import Section from './CurriculumSection'
import Ul from '../layout/Ul'
import { H3 } from '../text/H'
import { LinkButton } from '../buttons'
import Link from '../navigation/Link'
import { Col, Row } from '../layout/Grid'
import UpcomingTrainingCurriculum from '../training/UpcomingTrainingCurriculum'
import Flex from '../layout/Flex'
import Box from '../layout/Box'
import { Overview } from '../training/PageContent'

export const LIST_LAYOUT = 'list'
export const LIST_TWO_COL = 'listTwoCol'

const SectionCTA = ({ sx = {}, ...rest }) => (
  <Box sx={{ pt: 5, ...sx }} {...rest} />
)

const selectCurriculumLayout = ({
  firstHalf,
  secondHalf,
  layout,
  trainingInstanceTypeName,
  trainingType,
  trainings,
  content,
  curriculumTo,
  title,
  tech,
  trainingId,
  marketingCard,
  curriculumTitle = 'Curriculum',
  learningObjectives: LearningObjectives,
  defaultLearningObjectivesIsOpen = false,
  pageData,
}) => {
  const curriculumButtonSection = (
    <SectionCTA>
      <LinkButton className="curriculum-cta" to={curriculumTo}>
        Learning objectives & full curriculum
      </LinkButton>
    </SectionCTA>
  )

  const learningObjectives = LearningObjectives && (
    <React.Fragment>
      <H3>Learning Objectives</H3>
      <Section
        isOpen={defaultLearningObjectivesIsOpen}
        title=""
        trainingInstanceTypeName={trainingInstanceTypeName}
        trainingType={trainingType}
        tech={tech}
      >
        <Ul>
          <LearningObjectives />
        </Ul>
      </Section>
    </React.Fragment>
  )

  const typedMarketingCard = marketingCard
    ? React.cloneElement(marketingCard, {
        trainingInstanceTypeName,
        trainingType,
        tech,
      })
    : null

  const heading = (
    <React.Fragment>
      {title}
      {pageData && pageData._rawOverview && (
        <Overview _rawOverview={pageData._rawOverview} />
      )}
    </React.Fragment>
  )
  if (layout === LIST_LAYOUT) {
    return (
      <React.Fragment>
        {heading}
        <Flex sx={{ flexDirection: 'column' }}>
          {firstHalf}
          {firstHalf.length > 2 && typedMarketingCard}
          {secondHalf}
          {secondHalf && secondHalf.length > 2 && typedMarketingCard}
          {curriculumTo && curriculumButtonSection}
          {learningObjectives}
        </Flex>
      </React.Fragment>
    )
  } else if (layout === LIST_TWO_COL) {
    return (
      <React.Fragment>
        {heading}
        <Flex sx={{ flexDirection: 'column' }}>
          <Row>
            <Col md={6} lg={5}>
              {firstHalf}
            </Col>
            <Col md={6} lg={5} lgOffset={1}>
              {secondHalf}
            </Col>
          </Row>

          {curriculumTo && curriculumButtonSection}
          {learningObjectives}
        </Flex>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        {title && (
          <Row>
            <Col lg={10} lgOffset={1}>
              {heading}
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
            {learningObjectives}
          </Col>
          <Col md={5} lg={4} mdOffset={1}>
            {trainings && (
              <UpcomingTrainingCurriculum
                trainingId={trainingId}
                trainings={trainings}
                trainingType={trainingType}
                trainingInstanceTypeName={trainingInstanceTypeName}
                tech={tech}
              />
            )}
            {content === null ? null : content ? (
              content
            ) : (
              <React.Fragment>
                <Link name="free-learning-resources" />
                <H3 sx={{ mt: 2 }}>Free learning resources!</H3>
                <LinkButton
                  className="free-learning-resources-cta"
                  to="#newsletter-footer"
                >
                  Sign up now
                </LinkButton>
                <Link name="corporate-training" />
                <H3>Training anywhere, anytime?</H3>
                <LinkButton
                  to={
                    // TODO ADD "TECH_TYPE" IN UM AND USE IT HERE
                    // type.toLowerCase().indexOf('react') < 0
                    //   ? `/graphql/training/corporate/`
                    //   : '/react/training/corporate/'
                    '/react/training/corporate/'
                  }
                  className="corporate-team-training-course-cta"
                >
                  Corporate team training
                </LinkButton>
                <H3>Host a public training</H3>
                <LinkButton
                  to="/blog/4-reasons-why-you-should-host-our-react-graphql-training/"
                  className="corporate-team-training-course-cta"
                >
                  Get exclusive promotions
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
