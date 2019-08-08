import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import CurriculumGraphQLWorkshops from './CurriculumGraphQLWorkshops'
import CurriculumGraphQLAPI from './CurriculumGraphQLAPI'

import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import {
  GRAPHQL_BOOTCAMP,
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
} from '../../config/data'

const FullCurriculumsGraphQL = ({ trainings }) => {
  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }
  const allGraphQLWorkshops = selectUpcomingTrainings({
    trainings,
    types: [GRAPHQL_CLIENT, GRAPHQL_WORKSHOP],
  })
  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose a GraphQL Course</H4>
        </Col>
      </Row>
      <Tabs defaultValue={GRAPHQL_BOOTCAMP}>
        <TabList lgOffset={1}>
          <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
          <TabItem name={GRAPHQL_API}>GraphQL API</TabItem>
          <TabItem name={GRAPHQL_WORKSHOP}>GraphQL 1-Day Workshops</TabItem>
        </TabList>

        <TabContent>
          <ContentItem name={GRAPHQL_BOOTCAMP}>
            <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={GRAPHQL_API}>
            <CurriculumGraphQLAPI {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={GRAPHQL_WORKSHOP}>
            <CurriculumGraphQLWorkshops
              trainings={allGraphQLWorkshops}
              showTitle={false}
            />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsGraphQL
