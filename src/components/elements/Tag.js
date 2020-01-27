import styled from 'styled-components'

import { DARK_BLUE, WHITE } from '../../config/styles'
import Box from '../layout/Box'

const Tag = styled(Box)`
  padding: 2px 8px;
  margin: 4px 0;
  color: ${WHITE};
`
Tag.defaultProps = {
  borderRadius: '5px',
  backgroundColor: DARK_BLUE,
  color: WHITE,
  fontSize: 1,
  display: 'inline-block',
  role: 'tag',
}

export default Tag
