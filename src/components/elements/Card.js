import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  blue1,
  BROWN,
  WHITE,
  GREY2,
  BOX_SHADOW,
  reactBlue,
} from '../../config/styles'
import { SCREEN_XS_MAX, SCREEN_MD_MAX, SCREEN_SM_MIN } from '../utils'
import { styleChildLinkColor } from '../navigation/Link'

const fontColor = color => `
  color: ${color};
  h2 {
    color: ${color};
  }
  h3 {
    color: ${color};
  }
  p {
    color: ${color};
  }
  span {
    color: ${color};
  }
  ${styleChildLinkColor(color)}
`

const Card = styled.div` 
  position: relative;
  ${props =>
    props.top
      ? `
      margin-top: ${props.top}px;
    `
      : null}
  ${props =>
    props.bottom
      ? `
      margin-bottom: ${props.bottom}px;
    `
      : null}
  ${props =>
    props.small
      ? `
      padding: 30px;
    `
      : props.padding !== false
      ? `
      padding-top: 60px;
      padding-bottom:60px;
  `
      : ``}
  ${props => {
    switch (props.bg) {
      case 'dark':
        return `
    background-color: ${blue1()};
    border: solid 1px ${BROWN};
    ${fontColor(WHITE)}
  `
      case 'darkGrey':
        return `
    background-color: ${GREY2};
    ${fontColor(WHITE)}
  `
      case 'reactBlue':
        return `
      background-color: ${reactBlue()};
      ${fontColor(GREY2)}
      `
      default:
        return `
    background-color: ${WHITE};
    ${fontColor(GREY2)}
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
    }
  }}
  h3 {
    padding-top: 10px;
  }
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

Card.displayName = 'Card'
Card.propTypes = {
  top: PropTypes.number,
}

export default Card
