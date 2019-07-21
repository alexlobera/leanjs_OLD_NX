import styled from 'styled-components'

import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Row } from './Grid'
import Box from './Box'

export const CallToActionRow = styled(Box)``
CallToActionRow.defaultProps = {
  mb: [0, -25],
  position: 'relative',
  zIndex: Z_INDEX_MEDIUM,
  box: Row,
}
