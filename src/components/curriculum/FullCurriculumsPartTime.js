import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H3 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import {
  defaultSessionsFirstHalf as reactSessionsFirstHalf,
  defaultSessionsSecondHalf as reactSessionsSecondHalf,
} from './CurriculumReactPartTime'
import {
  defaultSessionsFirstHalf as graphqlSessionsFirstHalf,
  defaultSessionsSecondtHalf as graphqlSessionsSecondHalf,
} from './CurriculumGraphQLPartTime'
import renderPartTimeSection from './renderPartTimeSession'

import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import { REACT_PART_TIME, GRAPHQL_PART_TIME } from '../../config/data'
import UpcomingTrainingCurriculum from '../training/UpcomingTrainingCurriculum'
import Link from '../navigation/Link'
import LinkButton from '../buttons/LinkButton'
import Flex from '../layout/Flex'

const initialIndex = 0

const renderReactSectionWithProps = renderPartTimeSection({
  sectionProps: {
    toggleNavigateTo: `/react/curriculum?tab=${REACT_PART_TIME}`,
    type: REACT_PART_TIME,
  },
})

const renderGraphQLSectionWithProps = renderPartTimeSection({
  sectionProps: {
    toggleNavigateTo: `/graphql/curriculum?tab=${GRAPHQL_PART_TIME}`,
    type: GRAPHQL_PART_TIME,
  },
})

const reactSessions = [
  ...reactSessionsFirstHalf.map(renderReactSectionWithProps(initialIndex)),
  ...reactSessionsSecondHalf.map(
    renderReactSectionWithProps(
      renderReactSectionWithProps.length + initialIndex
    )
  ),
]

const graphqlSessions = [
  ...graphqlSessionsFirstHalf.map(renderGraphQLSectionWithProps(initialIndex)),
  ...graphqlSessionsSecondHalf.map(
    renderGraphQLSectionWithProps(
      graphqlSessionsSecondHalf.length + initialIndex
    )
  ),
]

const FullCurriculumsPartTime = ({ trainings }) => {
  const allPartTimes = selectUpcomingTrainings({
    trainings,
    types: [GRAPHQL_PART_TIME, REACT_PART_TIME],
  })

  return (
    <React.Fragment>
      <Row>
        <Col md={6} lg={5} lgOffset={1}>
          <H3>
            Part-time courses outline
            <a name="curriculum" />
          </H3>
          <Tabs defaultValue={GRAPHQL_PART_TIME}>
            <TabList includeRowCol={false} mb={0}>
              <TabItem name={GRAPHQL_PART_TIME}>GraphQL curriculum</TabItem>
              <TabItem name={REACT_PART_TIME}>React curriculum</TabItem>
            </TabList>

            <TabContent>
              <ContentItem name={GRAPHQL_PART_TIME}>
                <Flex flexDirection="column">{graphqlSessions}</Flex>
              </ContentItem>
              <ContentItem name={REACT_PART_TIME}>
                <Flex flexDirection="column">{reactSessions}</Flex>
              </ContentItem>
            </TabContent>
          </Tabs>
        </Col>
        <Col md={5} lg={4} mdOffset={1}>
          {trainings && <UpcomingTrainingCurriculum trainings={allPartTimes} />}
          <Link name="free-learning-resources" />
          <H3 mt={2}>Free learning resources!</H3>
          <LinkButton className="free-learning-resources-cta" to="#newsletter">
            Sign up now
          </LinkButton>
          <Link name="corporate-training" />
          <H3>Training anywhere, anytime?</H3>
          <LinkButton
            to="/react/training/corporate/"
            className="corporate-team-training-course-cta"
          >
            React Corporate training
          </LinkButton>
          <H3>Host a public training</H3>
          <LinkButton
            to="/blog/4-reasons-why-you-should-host-our-react-graphql-training/"
            className="corporate-team-training-course-cta"
          >
            Get exclusive promotions
          </LinkButton>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FullCurriculumsPartTime
