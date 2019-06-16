import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import {
  CurriculumGraphQLBootcamp,
  CurriculumGraphQLWorkshops,
  CurriculumGraphQLAPI,
} from './index'
import {
  GRAPHQL_BOOTCAMP,
  GRAPHQL_WORKSHOP,
  GRAPHQL_API,
} from '../../config/data'

class FullCurriculumsGraphQL extends React.Component {
  state = {
    active: GRAPHQL_BOOTCAMP,
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
            <H4>Select GraphQL Curriculum:</H4>
          </Col>
        </Row>
        <Row>
          <Col lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
                <TabItem name={GRAPHQL_API}>GraphQL API</TabItem>
                <TabItem name={GRAPHQL_WORKSHOP}>
                  GraphQL 1-Day Workshops
                </TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={GRAPHQL_BOOTCAMP}>
                  <CurriculumGraphQLBootcamp {...commonCurriculumProps} />
                </ContentItem>
                <ContentItem name={GRAPHQL_API}>
                  <CurriculumGraphQLAPI {...commonCurriculumProps} />
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

export default FullCurriculumsGraphQL
