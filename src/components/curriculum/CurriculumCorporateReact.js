import React from 'react'
import { Col, Row } from '../layout/Grid'
import { H2Ref } from '../text'
import Link from '../navigation/Link'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../navigation'
import { CurriculumCorpReact } from './index'
import { REACT_BOOTCAMP } from '../../config/data'

class CurriculumCorporateReact extends React.Component {
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
                <TabItem name={REACT_BOOTCAMP}>
                  Format: 5 Days, Full-Time
                </TabItem>
              </TabList>

              <TabContent>
                <ContentItem name={REACT_BOOTCAMP}>
                  <CurriculumCorpReact enableToggle={false} />
                </ContentItem>
              </TabContent>
            </Tabs>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default CurriculumCorporateReact
