import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H2Ref, H4 } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import {
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumAdvancedReact,
  CurriculumGraphQLBootcamp,
  CurriculumReactFundamentals,
  CurriculumGraphQLWorkshops,
} from './index'

import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import {
  REACT_NATIVE,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  PART_TIME,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_WORKSHOP,
} from '../../config/data'

class FullCurriculum extends React.Component {
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
          <Col lg={10} lgOffset={1}>
            <H2Ref>
              Choose a course...{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
        <Row>
          <Col lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                {/* <H4>React</H4> */}
                <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                <TabItem name={REACT_FUNDAMENTALS}>React Fundamentals</TabItem>
                <TabItem name={ADVANCED_REACT}>Advanced React</TabItem>
                <TabItem name={PART_TIME}>Part-time Course</TabItem>
                <TabItem name={REACT_NATIVE}>React Workshops</TabItem>
              </TabList>
              <TabList offset>
                {/* <H4>GraphQL</H4> */}
                <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
                <TabItem name={GRAPHQL_WORKSHOP}>GraphQL Workshops</TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={REACT_BOOTCAMP}>
                  <CurriculumBootcamp {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={REACT_FUNDAMENTALS}>
                  <CurriculumReactFundamentals {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={ADVANCED_REACT}>
                  <CurriculumAdvancedReact {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={PART_TIME}>
                  <CurriculumPartTime {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={REACT_NATIVE}>
                  <CurriculumReactWorkshops {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={GRAPHQL_BOOTCAMP}>
                  <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={GRAPHQL_WORKSHOP}>
                  <CurriculumGraphQLWorkshops {...commonCurriculumProps} />
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
