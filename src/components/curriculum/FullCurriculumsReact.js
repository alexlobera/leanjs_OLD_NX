import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H2Ref, H4 } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import {
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumReactNative,
  CurriculumAdvancedReact,
  CurriculumGraphQL,
} from './index'
import {
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  REACT_CORPORATE,
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
            <H2Ref>
              Our React curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <H4>Select Course:</H4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                <TabItem name={ADVANCED_REACT}>Advanced React Bootcamp</TabItem>
                <TabItem name={PART_TIME}>Part-time Course</TabItem>
                <TabItem name={REACT_CORPORATE}>
                  <Link to="/react/training/corporate">Corporate Training</Link>
                </TabItem>
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
              </TabContent>
            </Tabs>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default FullCurriculumsReact
