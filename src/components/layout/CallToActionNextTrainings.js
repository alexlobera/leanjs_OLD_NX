import styled from 'styled-components'

import { SCREEN_XS_MAX } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Row } from './Grid'
import Box from '../layout/Box'

export const CallToActionRow = styled(Box)`
  z-index: ${Z_INDEX_MEDIUM};
  position: relative;
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`
CallToActionRow.defaultProps = {
  mb: [30, -25],
  box: Row,
}
