import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { LinkButton } from '../buttons'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Col, Row } from './Grid'
import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_NATIVE,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
} from '../../config/data'

export const CallToActionRow = styled(Row)`
  text-align: ${props => (props.left ? 'left' : 'center')};
  z-index: ${Z_INDEX_MEDIUM};
  position: relative;
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-bottom: -25px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-bottom: 30px;
    a {
      display: block;
      margin: 5px 0;
    }
  }
`
const createTrainingPathUrl = (type, location = '', index) => {
  switch (type) {
    case PART_TIME:
      return `/react-redux-training-${location.toLowerCase()}/${
        index > 1 ? index : ''
      }`
  }
}
const CallToActionNextTrainings = ({ left, type, trainings = [] }) => (
  <CallToActionRow left>
    {trainings
      .slice(0, 3)
      .filter(({ node }) => node.training.type === type)
      .map(({ node: training }, index) => {
        const startDate = moment(training.startDate).format('D MMM')
        const pathUrl = createTrainingPathUrl(type, training.city, index)
        return index === 0 ? (
          <Col key={index} xs={12} mdOffset={1} md={5}>
            <LinkButton
              cta
              to={pathUrl}
              children={`Next ${type}: ${startDate}, ${training.city}  >>`}
            />
          </Col>
        ) : (
          <Col key={index} xs={12} md={3} center={index === 1}>
            <LinkButton
              to={pathUrl}
              children={`${startDate}, ${training.city}`}
            />
          </Col>
        )
      })}
  </CallToActionRow>
)

export default CallToActionNextTrainings
