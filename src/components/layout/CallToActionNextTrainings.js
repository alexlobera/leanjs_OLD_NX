import styled from 'styled-components'

import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Row } from './Grid'
import Box from '../layout/Box'

export const CallToActionRow = styled(Box)`
  z-index: ${Z_INDEX_MEDIUM};
  position: relative;
`
CallToActionRow.defaultProps = {
  mb: [30, -25],
  box: Row,
}

// export default CallToActionRow = ({ children, ...props }) => (
//   <CallToActionRow>
//     <Row {...props}>{children}</Row>
//   </CallToActionRow>
// )

// export const CallToActionRow = styled(Row)`
//   z-index: ${Z_INDEX_MEDIUM};
//   position: relative;
//   @media (min-width: ${SCREEN_SM_MIN}) {
//     margin-bottom: -25px;
//   }
//   @media (max-width: ${SCREEN_XS_MAX}) {
//     padding-bottom: 30px;
//     a {
//       display: block;
//       margin: 5px 0;
//     }
//   }
// `
