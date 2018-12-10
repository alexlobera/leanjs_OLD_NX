import React from 'react'
import styled from 'styled-components'
import { Col, Row } from '../layout/Grid'
import { H1Ref, H4Ref, P } from '../text'
import Link from '../navigation/Link'
import {
  Tabs,
  TabList,
  TabItem,
  TabContent,
  ContentItem
} from '../navigation'
import {
  CurriculumBootcamp, 
  CurriculumPartTime,
  CurriculumReactNative,
  CurriculumAdvancedReact,
} from './index' 


const TAB_REACT_BOOTCAMP = 'react-bootcamp'
const TAB_REACT_NATIVE = 'react-native'
const TAB_PART_TIME = 'part-time'
const TAB_ADVANCED_REACT = 'advanced-react'

class FullCurriculum extends React.Component {
  state = {
    active: TAB_REACT_BOOTCAMP,
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
      <Col>
      <P>Select Course:</P>
                <Tabs onChange={this.setActive} active={this.state.active}>
                  <TabList>
                    <TabItem name={TAB_REACT_BOOTCAMP}>
                      React 1-week bootcamp
                    </TabItem>
                    <TabItem name={TAB_ADVANCED_REACT}>
                      Advanced React bootcamp
                    </TabItem>
                    <TabItem name={TAB_REACT_NATIVE}>
                      React Native bootcamp
                    </TabItem>
                    <TabItem name={TAB_PART_TIME}>Part-time course</TabItem>
                  </TabList>
                <TabContent>
                  <ContentItem name={TAB_REACT_BOOTCAMP}>
                    <CurriculumBootcamp showTitle={false} />
                  </ContentItem>
                  <ContentItem name={TAB_ADVANCED_REACT}>
                    <CurriculumAdvancedReact showTitle={false} />
                  </ContentItem>
                  <ContentItem name={TAB_REACT_NATIVE}>
                    <CurriculumReactNative showTitle={false} />
                  </ContentItem>
                  <ContentItem name={TAB_PART_TIME}>
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
