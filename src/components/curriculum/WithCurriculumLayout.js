import React from 'react'
import { Col, Row } from '../layout/Grid'
import { List } from './CurriculumSection'
import { UpcomingTrainingSection } from '../training'

const WithCurriculumLayout = Component => {
  return class ComponentWithCurriculumLayout extends React.Component {
    constructor(props) {
      super(props)
    }

    selectLayout = (firstHalf, secondHalf) => {
      if (this.props.list) {
        return (
          <React.Fragment>
            <List>
              {firstHalf}
              {secondHalf}
            </List>
          </React.Fragment>
        )
      } else if (this.props.listTwoCol) {
        return (
          <React.Fragment>
            <List>
              <Row>
                <Col md={6} lg={5}>
                  {firstHalf}
                </Col>
                <Col md={6} lg={5} lgOffset={1}>
                  {secondHalf}
                </Col>
              </Row>
            </List>
          </React.Fragment>
        )
      } else {
        return (
          <React.Fragment>
            <Row>
              <Col md={6} lg={5} lgOffset={1}>
                {firstHalf}
                {secondHalf}
              </Col>
              <Col md={6} lg={5} lgOffset={1}>
                <UpcomingTrainingSection curriculum />
              </Col>
            </Row>
          </React.Fragment>
        )
      }
    }

    render() {
      return <Component {...this.props} selectLayout={this.selectLayout} />
    }
  }
}

export default WithCurriculumLayout
