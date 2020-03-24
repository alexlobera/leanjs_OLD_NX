import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabPanel } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import { tabItemClassName } from './utils'

import CurriculumGraphQLBootcamp from './CurriculumGraphQLBootcamp'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
  TECH_GRAPHQL,
  TRAINING_TYPE_WORKSHOP,
  TRAINING_TYPE_FULL_CURRICULUM,
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
      <Tabs defaultValue={REACT_BOOTCAMP}>
        <Row>
          <Col lgOffset={1} md={11}>
            <TabList>
              <TabItem
                trainingType={TRAINING_TYPE_FULL_CURRICULUM}
                className={tabItemClassName}
                name={REACT_BOOTCAMP}
              >
                React Bootcamp
              </TabItem>
              <TabItem
                trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                className={tabItemClassName}
                name={ADVANCED_REACT}
              >
                Advanced React
              </TabItem>
              <TabItem
                trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                className={tabItemClassName}
                name={REACT_FUNDAMENTALS}
              >
                React Fundamentals
              </TabItem>
              <TabItem
                trainingType={TRAINING_TYPE_WORKSHOP}
                className={tabItemClassName}
                name={REACT_WORKSHOP}
              >
                Workshops
              </TabItem>
              <TabItem
                className={tabItemClassName}
                tech={TECH_GRAPHQL}
                name={GRAPHQL_BOOTCAMP}
              >
                GraphQL Bootcamp
              </TabItem>
            </TabList>
          </Col>
        </Row>

        <TabPanel name={REACT_BOOTCAMP}>
          <CurriculumReactBootcamp {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={REACT_FUNDAMENTALS}>
          <CurriculumReactFundamentals {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={ADVANCED_REACT}>
          <CurriculumAdvancedReact {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={REACT_WORKSHOP}>
          <CurriculumReactWorkshops {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={GRAPHQL_BOOTCAMP}>
          <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact
