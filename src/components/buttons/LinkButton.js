import styled from 'styled-components'
import Link from '../navigation/Link'
import { BLUE2, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

const LinkButton = styled(Link)`
  font-size: ${props => {
    if (props.extraLarge) {
      return 20
    } else if (props.large) {
      return 16
    } else {
      return 12
    }
  }}px;
  ${FONT_FAMILY}
  background-color: ${props => {
    if (props.secondary) {
      return '#ffffff'
    } else if (props.cta) {
      return CALLTOACTIONRED
    } else {
      return BLUE2
    }
  }};
  font-weight: ${props => (props.cta ? 'bold' : '')};
  border-radius: 2px;
  box-shadow: ${props =>
    props.secondary
      ? '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
      : '0 18px 29px -2px rgba(0, 0, 0, 0.26)'};
  font-style: normal;
  font-size: ${props => props.secondary && '20px'};
  font-stretch: normal;
  line-height: ${props => (props.secondary ? '1.5' : 'normal')};
  letter-spacing: ${props => (props.secondary ? '0.8px' : '0.6px')};
  text-align: center;
  color: ${props => (props.secondary ? 'buttontext' : '#ffffff')};
  border: ${props => props.secondary && 'solid 1px #002938'};
  align-items: flex-start;
  text-align: center;
  cursor: pointer;
  padding: 0.7em;
  display: inline-block;
  text-decoration: none;
`

LinkButton.displayName = 'LinkButton'

export default LinkButton
