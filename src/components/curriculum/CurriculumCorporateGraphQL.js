import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H2Ref } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import { CurriculumCorpGraphQL } from './index'
import { GRAPHQL_BOOTCAMP } from '../../config/data'

class CurriculumCorporateGraphQL extends React.Component {
  state = {
    active: GRAPHQL_BOOTCAMP,
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <H2Ref>
              What your team training could look like...{' '}
              <Link to="#schedule" name="schedule">
                #
              </Link>
            </H2Ref>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={11}>
            <Tabs onChange={this.setActive} active={this.state.active}>
              <TabList offset>
                <TabItem name={GRAPHQL_BOOTCAMP}>
                  Format: 5 Days, Full-Time
                </TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={GRAPHQL_BOOTCAMP}>
                  <CurriculumCorpGraphQL enableToggle={false} />
                </ContentItem>
              </TabContent>
            </Tabs>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default CurriculumCorporateGraphQL
