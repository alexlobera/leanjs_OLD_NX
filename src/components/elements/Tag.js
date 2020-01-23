import styled from 'styled-components'

import { DARK_GREY, WHITE } from '../../config/styles'
import Box from '../layout/Box'

const Tag = styled(Box)`
  padding: 2px 8px;
`
Tag.defaultProps = {
  borderRadius: '5px',
  backgroundColor: DARK_GREY,
  color: WHITE,
  fontSize: 1,
  display: 'inline-block',
}

export default Tag
