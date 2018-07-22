import styled from 'styled-components'
import Link from '../navigation/Link'
import { BLUE2, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

export default styled(Link)`
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
  background-color: ${props => (props.cta ? CALLTOACTIONRED : BLUE2)};
  font-weight: ${props => (props.cta ? 'bold' : '')};
  border-radius: 2px;
  box-shadow: 0 18px 29px -2px rgba(0, 0, 0, 0.26);
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
  padding: 1em;
  display:inline-block;
`
