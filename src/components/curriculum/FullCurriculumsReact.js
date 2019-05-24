import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import {
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumAdvancedReact,
  CurriculumOneDayWorkshops,
} from './index'
import {
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  ONE_DAY_WORKSHOP,
} from '../../config/data'

class FullCurriculumsReact extends React.Component {
  state = {
    active: REACT_BOOTCAMP,
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    const { trainings } = this.props
    const commonCurriculumProps = {
      trainings,
      showTitle: false,
    }
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <H4>Select React Curriculum:</H4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                <TabItem name={ADVANCED_REACT}>Advanced React Bootcamp</TabItem>
                <TabItem name={PART_TIME}>Part-time Course</TabItem>
                <TabItem name={ONE_DAY_WORKSHOP}>1-Day Workshops</TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={REACT_BOOTCAMP}>
                  <CurriculumBootcamp {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={ADVANCED_REACT}>
                  <CurriculumAdvancedReact {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={PART_TIME}>
                  <CurriculumPartTime {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={ONE_DAY_WORKSHOP}>
                  <CurriculumOneDayWorkshops {...commonCurriculumProps} />
                </ContentItem>
              </TabContent>
            </Tabs>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default FullCurriculumsReact
