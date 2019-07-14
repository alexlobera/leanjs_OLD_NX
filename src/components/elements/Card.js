import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../layout/Box'
import {
  DARK_BLUE,
  BROWN,
  WHITE,
  DARK_GREY,
  BOX_SHADOW,
  BLUE,
} from '../../config/styles'
import { SCREEN_XS_MAX, SCREEN_MD_MAX, SCREEN_SM_MIN } from '../utils'
import { fontColor } from '../text'

// Card small -> p={5}
const Card = ({ small, ...props }) => {
  let newProps = {}
  if (small) {
    newProps.p = 5
  }
  return <StyledCard {...props} {...newProps} />
}

const StyledCard = styled(Box)` 
  position: relative;
  ${props => {
    switch (props.bg) {
      case 'dark':
        return `
    background-color: ${DARK_BLUE};
    border: solid 1px ${BROWN};
    ${fontColor(WHITE)}
  `
      case 'darkGrey':
        return `
    background-color: ${DARK_GREY};
    ${fontColor(WHITE)}
  `
      case 'BLUE':
        return `
      background-color: ${BLUE};
      ${fontColor(DARK_GREY)}
      `
      default:
        return `
    background-color: ${WHITE};
    ${fontColor(DARK_GREY)}
  `
    }
  }}

  ${props => {
    switch (props.border) {
      case 'white':
        return 'border: solid 2px rgba(255, 255, 255, 0.9);'
      case 'shadow':
        return BOX_SHADOW
      case 'black':
        return `border: 1px solid ${BROWN};`
      case 'blue':
        return `border: 3px solid ${BLUE};`
      default:
        return ``
    }
  }}
  
  @media (max-width: ${SCREEN_XS_MAX}) {
    border: 0;
    box-shadow: none;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (min-width: ${SCREEN_SM_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
    padding-left: 18px;
    padding-right: 18px;
  }
`

Card.defaultProps = {
  py: 6,
}
Card.displayName = 'Card'
Card.propTypes = {
  top: PropTypes.number,
}

export default Card
