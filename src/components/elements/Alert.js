import styled from 'styled-components'
import { PINK, FONT_FAMILY } from '../../config/styles'

const Alert = styled.div`
  ${FONT_FAMILY};
  ${props =>
    props.danger ? `background-color: ${PINK};` : null} padding: 18px 9px;
  margin: 9px 0;
`

export default Alert
