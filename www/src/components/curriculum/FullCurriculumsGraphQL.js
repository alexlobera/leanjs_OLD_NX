import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import CurriculumGraphQLPartTime from './CurriculumGraphQLPartTime'

import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import { GRAPHQL_BOOTCAMP, GRAPHQL_PART_TIME } from '../../config/data'

const FullCurriculumsGraphQL = ({ trainings }) => {
  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }
  const allGraphQLPartTimes = selectUpcomingTrainings({
    trainings,
    type: GRAPHQL_PART_TIME,
  })
  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose a GraphQL training course</H4>
        </Col>
      </Row>
      <Tabs defaultValue={GRAPHQL_PART_TIME}>
        <TabList lgOffset={1}>
          <TabItem name={GRAPHQL_PART_TIME}>GraphQL Part-time</TabItem>
          <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
        </TabList>

        <TabContent>
          <ContentItem name={GRAPHQL_BOOTCAMP}>
            <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={GRAPHQL_PART_TIME}>
            <CurriculumGraphQLPartTime
              trainings={allGraphQLPartTimes}
              showTitle={false}
            />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsGraphQL
