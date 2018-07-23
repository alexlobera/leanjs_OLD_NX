import styled from 'styled-components'
import Link from '../navigation/Link'
import { BLUE2, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'
import { DEFAULT_BUTTON_STYLE } from './Button'

const LinkButton = styled(Link)`
  ${DEFAULT_BUTTON_STYLE} ${FONT_FAMILY}
  cursor: pointer;
  background-color: ${props => {
    if (props.secondary) {
      return '#ffffff'
    } else if (props.cta) {
      return CALLTOACTIONRED
    } else {
      return BLUE2
    }
  }};
  font-weight: ${props => (props.cta ? 800 : 400)};
  box-shadow: ${props =>
    props.secondary
      ? '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
      : '0 18px 29px -2px rgba(0, 0, 0, 0.26)'};
  color: ${props => (props.secondary ? 'buttontext' : '#ffffff')};
  border: ${props => props.secondary && 'solid 1px #002938'};
  display: ${props => (props.block ? 'block' : 'inline-block')};
  text-decoration: none;
`

LinkButton.displayName = 'LinkButton'

export default LinkButton
