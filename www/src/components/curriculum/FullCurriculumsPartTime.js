import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabPanel } from '../layout/Tabs'
import CurriculumReactCompletePartTime from './CurriculumReactCompletePartTime'
import CurriculumReactFundamentalsPartTime from './CurriculumReactFundamentalsPartTime'
import CurriculumAdvancedReactPartTime from './CurriculumAdvancedReactPartTime'
import CurriculumGraphQLPartTime from './CurriculumGraphQLPartTime'
import { tabItemClassName } from './utils'

import {
  COMPLETE_REACT_PART_TIME,
  REACT_FUNDAMENTALS_PART_TIME,
  ADVANCED_REACT_PART_TIME,
  GRAPHQL_API,
  TECH_GRAPHQL,
  TRAINING_TYPE_HALF_CURRICULUM,
} from '../../config/data'

const FullCurriculumsReact = ({ trainings }) => {
  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose an immersive learning experience</H4>
        </Col>
      </Row>
      <Tabs defaultValue={COMPLETE_REACT_PART_TIME}>
        <Row>
          <Col lgOffset={1} md={11}>
            <TabList>
              <TabItem
                className={tabItemClassName}
                trainingType={TRAINING_TYPE_FULL_CURRICULUM}
                name={COMPLETE_REACT_PART_TIME}
              >
                Complete React PT
              </TabItem>
              <TabItem
                trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                className={tabItemClassName}
                name={REACT_FUNDAMENTALS_PART_TIME}
              >
                React Fundamentals PT
              </TabItem>
              <TabItem
                trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                className={tabItemClassName}
                name={ADVANCED_REACT_PART_TIME}
              >
                Advanced React PT
              </TabItem>
              <TabItem
                className={tabItemClassName}
                trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                name={GRAPHQL_API}
                tech={TECH_GRAPHQL}
              >
                GraphQL API PT
              </TabItem>
            </TabList>
          </Col>
        </Row>

        <TabPanel name={COMPLETE_REACT_PART_TIME}>
          <CurriculumReactCompletePartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={REACT_FUNDAMENTALS_PART_TIME}>
          <CurriculumReactFundamentalsPartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={ADVANCED_REACT_PART_TIME}>
          <CurriculumAdvancedReactPartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={GRAPHQL_API}>
          <CurriculumGraphQLPartTime {...commonCurriculumProps} />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact
