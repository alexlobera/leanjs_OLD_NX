import React from 'react'
import styled from 'styled-components'

import { LinkButton } from '../buttons'
import { SCREEN_SM_MIN, SCREEN_XS_MAX, formatUTC } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Col, Row } from './Grid'

const CallToActionRowStyles = styled(Row)`
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

export const CallToActionRow = ({ children }) => (
  <div className="main-cta-buttons">
    <CallToActionRowStyles>{children}</CallToActionRowStyles>
  </div>
)

const CallToActionNextTrainings = ({ trainings = [] }) => {
  const filteredTrainings = trainings.filter((_, i) => i < 3)
  return (
    <CallToActionRowStyles className="main-cta-buttons" left>
      {filteredTrainings.map(
        (
          { startDate: sDate, city, toPath, utcOffset, training: { type } },
          index
        ) => {
          const startDate = formatUTC(sDate, utcOffset, 'D MMM')
          return index === 0 ? (
            <Col key={index} mdOffset={1} md={5}>
              <LinkButton
                variant="primary"
                to={toPath}
                children={`Next ${type}: ${startDate}, ${city}  >>`}
              />
            </Col>
          ) : (
            <Col key={index} md={3} center={index === 1}>
              <LinkButton to={toPath} children={`${startDate}, ${city}`} />
            </Col>
          )
        }
      )}
    </CallToActionRowStyles>
  )
}

export default CallToActionNextTrainings
