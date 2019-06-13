import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import { CurriculumGraphQLBootcamp, CurriculumGraphQLWorkshops } from './index'
import { GRAPHQL_BOOTCAMP, GRAPHQL_WORKSHOP } from '../../config/data'

class FullCurriculumsGraphQL extends React.Component {
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
            <H4>Select React Curriculum:</H4>
          </Col>
        </Row>
        <Row>
          <Col lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={GRAPHQL_BOOTCAMP}>GraphQL Bootcamp</TabItem>
                <TabItem name={GRAPHQL_WORKSHOP}>
                  GraphQL 1-Day Workshops
                </TabItem>
              </TabList>

              <TabContent>
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

export default FullCurriculumsGraphQL
