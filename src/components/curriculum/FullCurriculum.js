import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H1Ref, P } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import {
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumReactNative,
  CurriculumAdvancedReact,
} from './index'
import {
  REACT_NATIVE,
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
} from '../../config/data'

class FullCurriculum extends React.Component {
  state = {
    active: REACT_BOOTCAMP,
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <H1Ref>
              Our React curriculum{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H1Ref>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <P>Select Course:</P>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={REACT_BOOTCAMP}>React 1-week bootcamp</TabItem>
                <TabItem name={ADVANCED_REACT}>Advanced React bootcamp</TabItem>
                <TabItem name={REACT_NATIVE}>React Native bootcamp</TabItem>
                <TabItem name={PART_TIME}>Part-time course</TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={REACT_BOOTCAMP}>
                  <CurriculumBootcamp showTitle={false} />
                </ContentItem>
                <ContentItem name={ADVANCED_REACT}>
                  <CurriculumAdvancedReact showTitle={false} />
                </ContentItem>
                <ContentItem name={REACT_NATIVE}>
                  <CurriculumReactNative showTitle={false} />
                </ContentItem>
                <ContentItem name={PART_TIME}>
                  <CurriculumPartTime showTitle={false} />
                </ContentItem>
              </TabContent>
            </Tabs>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default FullCurriculum
