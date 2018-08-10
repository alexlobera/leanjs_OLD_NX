import styled from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { Row } from './Grid'

const CallToActionRow = styled(Row)`
  text-align: ${props => (props.left ? 'left' : 'center')};
  z-index: 999;
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

export default CallToActionRow
