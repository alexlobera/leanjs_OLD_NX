import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { LinkButton } from '../buttons'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Col, Row } from './Grid'

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

const CallToActionNextTrainings = ({ trainings = [] }) => {
  const filteredTrainings = trainings.filter((undefined, i) => i < 3)
  return (
    <CallToActionRow left>
      {filteredTrainings.map(
        ({ startDate: sDate, city, toPath, training: { type } }, index) => {
          const startDate = moment(sDate).format('D MMM')
          return index === 0 ? (
            <Col key={index} xs={12} mdOffset={1} md={5}>
              <LinkButton
                variant="primary"
                to={toPath}
                children={`Next ${type}: ${startDate}, ${city}  >>`}
              />
            </Col>
          ) : (
            <Col key={index} xs={12} md={3} center={index === 1}>
              <LinkButton to={toPath} children={`${startDate}, ${city}`} />
            </Col>
          )
        }
      )}
    </CallToActionRow>
  )
}

export default CallToActionNextTrainings
