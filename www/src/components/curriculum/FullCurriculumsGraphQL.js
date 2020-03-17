import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabPanel } from '../layout/Tabs'
import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import CurriculumGraphQLPartTime from './CurriculumGraphQLPartTime'
import { tabItemClassName } from './utils'

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
          <H4>Choose a GraphQL training</H4>
        </Col>
      </Row>
      <Tabs defaultValue={GRAPHQL_PART_TIME}>
        <Row>
          <Col lgOffset={1} md={11}>
            <TabList>
              <TabItem className={tabItemClassName} name={GRAPHQL_PART_TIME}>
                GraphQL Part-time
              </TabItem>
              <TabItem className={tabItemClassName} name={GRAPHQL_BOOTCAMP}>
                GraphQL Bootcamp
              </TabItem>
            </TabList>
          </Col>
        </Row>
        <TabPanel name={GRAPHQL_BOOTCAMP}>
          <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={GRAPHQL_PART_TIME}>
          <CurriculumGraphQLPartTime
            trainings={allGraphQLPartTimes}
            showTitle={false}
          />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsGraphQL
