import styled from 'styled-components'

import { SCREEN_XS_MAX } from '../utils'
import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Row } from './Grid'
import Box from './Box'

export const CallToActionRow = styled(Box)`
  @media (max-width: ${SCREEN_XS_MAX}) {
    a {
      display: block;
      margin: 5px 0;
    }
  }
`
CallToActionRow.defaultProps = {
  mb: [0, -25],
  position: 'relative',
  zIndex: Z_INDEX_MEDIUM,
  box: Row,
}
