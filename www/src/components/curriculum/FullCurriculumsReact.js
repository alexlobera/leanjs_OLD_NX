import React, { useState } from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabPanel } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactCompletePartTime from './CurriculumReactCompletePartTime'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumReactFundamentalsPartTime from './CurriculumReactFundamentalsPartTime'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'
import CurriculumAdvancedReactPartTime from './CurriculumAdvancedReactPartTime'
import { tabItemClassName } from './utils'
import Select from 'src/components/form/Select'
import { getURLParameter } from 'src/components/utils/url'

import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT_PART_TIME,
  COMPLETE_REACT_PART_TIME,
  REACT_FUNDAMENTALS_PART_TIME,
  ADVANCED_REACT,
  REACT_FUNDAMENTALS,
  REACT_WORKSHOP,
  TRAINING_TYPE_FULL_CURRICULUM,
  TRAINING_TYPE_HALF_CURRICULUM,
  TRAINING_TYPE_WORKSHOP,
} from '../../config/data'

const FULL_TIME = 'Full-time'
const PART_TIME = 'Part-time'

function getDefaultTabValue(time) {
  return time === FULL_TIME ? REACT_BOOTCAMP : COMPLETE_REACT_PART_TIME
}

const FullCurriculumsReact = ({ trainings }) => {
  const defaultSelectedTime =
    getURLParameter('trainingInstanceType') || FULL_TIME
  const defaultTabValule = getDefaultTabValue(defaultSelectedTime)
  const [selectedTime, setSelectedTime] = useState(defaultSelectedTime)
  const [tabsValue, setTabsValue] = useState(defaultTabValule)
  const onSelectChange = (time) => {
    setSelectedTime(time)
    setTabsValue(getDefaultTabValue(time))
  }
  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }

  return (
    <React.Fragment>
      <Tabs value={tabsValue} onChange={setTabsValue}>
        <Row sx={{ flexDirection: ['column-reverse', 'row'] }}>
          <Col lgOffset={1} md={8}>
            <H4>Choose a React training</H4>
            <TabList sx={{ display: 'inline-block', width: 1 }}>
              {selectedTime === FULL_TIME ? (
                <React.Fragment>
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
                    name={REACT_FUNDAMENTALS}
                  >
                    React Fundamentals
                  </TabItem>
                  <TabItem
                    trainingType={TRAINING_TYPE_HALF_CURRICULUM}
                    className={tabItemClassName}
                    name={ADVANCED_REACT}
                  >
                    Advanced React
                  </TabItem>
                  <TabItem
                    trainingType={TRAINING_TYPE_WORKSHOP}
                    className={tabItemClassName}
                    name={REACT_WORKSHOP}
                  >
                    Workshops
                  </TabItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <TabItem
                    trainingType={TRAINING_TYPE_FULL_CURRICULUM}
                    className={tabItemClassName}
                    name={COMPLETE_REACT_PART_TIME}
                  >
                    React PT Bundle
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
                </React.Fragment>
              )}
            </TabList>
          </Col>
          <Col md={2} sx={{ pt: '5px', pb: 1 }}>
            <Select
              onChange={onSelectChange}
              sx={{ flexDirection: ['row', 'column'] }}
              sxLabel={{ mr: 'auto', mb: [0, 3] }}
              sxMenu={{ right: ['0', 'auto'] }}
              label="Select training time"
              value={selectedTime}
              items={[PART_TIME, FULL_TIME]}
            />
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
        <TabPanel name={COMPLETE_REACT_PART_TIME}>
          <CurriculumReactCompletePartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={REACT_FUNDAMENTALS_PART_TIME}>
          <CurriculumReactFundamentalsPartTime {...commonCurriculumProps} />
        </TabPanel>
        <TabPanel name={ADVANCED_REACT_PART_TIME}>
          <CurriculumAdvancedReactPartTime {...commonCurriculumProps} />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsReact
