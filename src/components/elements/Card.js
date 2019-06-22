import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  DARK_BLUE,
  BROWN,
  WHITE,
  DARK_GREY,
  BOX_SHADOW,
  BLUE,
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
  h4 {
    color: ${color};
  }
  h5 {
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
