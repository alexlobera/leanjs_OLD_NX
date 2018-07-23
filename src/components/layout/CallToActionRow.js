import styled from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { Row } from './Grid'

const CallToActionRow = styled(Row)`
  text-align: ${props => (props.left ? 'left' : 'center')};
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-bottom: -25px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`

export default CallToActionRow
