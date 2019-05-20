import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H2Ref, H4 } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import {
  CurriculumBootcamp,
  CurriculumPartTime,
  CurriculumAdvancedReact,
  CurriculumGraphQL,
  CurriculumOneDayWorkshops,
} from './index'
import {
  REACT_NATIVE,
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  ONE_DAY_WORKSHOP,
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
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <H2Ref>
              Choose a course...{' '}
              <Link to="#curriculum" name="curriculum">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={REACT_BOOTCAMP}>React Bootcamp</TabItem>
                <TabItem name={ADVANCED_REACT}>Advanced React</TabItem>
                <TabItem name={PART_TIME}>Part-time React</TabItem>
                <TabItem name={REACT_NATIVE}>1-Day Workshops</TabItem>
                <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
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
                <ContentItem name={REACT_NATIVE}>
                  <CurriculumOneDayWorkshops {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={GRAPHQL_BOOTCAMP}>
                  <CurriculumGraphQL {...commonCurriculumProps} />
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
