import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabPanel } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumReactFundamentalsPartTime from './CurriculumReactFundamentalsPartTime'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import { tabItemClassName } from './utils'

import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import {
  REACT_BOOTCAMP,
  REACT_PART_TIME,
  ADVANCED_REACT,
  REACT_FUNDAMENTALS,
  REACT_WORKSHOP,
} from '../../config/data'

const FullCurriculumsReact = ({ trainings }) => {
  const allReactWorkshops = selectUpcomingTrainings({
    trainings,
    types: [REACT_WORKSHOP],
  })

  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose a React training course</H4>
        </Col>
      </Row>
      <Tabs defaultValue={REACT_BOOTCAMP}>
        <Row>
          <Col lgOffset={1} md={11}>
            <TabList>
              <TabItem className={tabItemClassName} name={REACT_BOOTCAMP}>
                React Bootcamp
              </TabItem>
              <TabItem className={tabItemClassName} name={REACT_PART_TIME}>
                Part-time Training
              </TabItem>
              <TabItem className={tabItemClassName} name={ADVANCED_REACT}>
                Advanced React
              </TabItem>
              <TabItem className={tabItemClassName} name={REACT_FUNDAMENTALS}>
                React Fundamentals
              </TabItem>
              <TabItem className={tabItemClassName} name={REACT_WORKSHOP}>
                Workshops
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
        <TabPanel name={REACT_PART_TIME}>
          <CurriculumReactFundamentalsPartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={REACT_WORKSHOP}>
          <CurriculumReactWorkshops
            trainings={allReactWorkshops}
            showTitle={false}
          />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact
