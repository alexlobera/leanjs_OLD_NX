import React from 'react'

import { DARK_BLUE, WHITE } from '../../config/styles'
import Box from '../layout/Box'

// const Tag = styled(Box)``
const Tag = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      padding: '2px 8px',
      margin: '4px 0',
      borderRadius: '5px',
      backgroundColor: DARK_BLUE,
      color: `${WHITE} !important`,
      fontSize: 1,
      display: 'inline-block',
      ...sx,
    }}
    {...rest}
  />
)

// Tag.defaultProps = {
//   sx: {
//     padding: '2px 8px',
//     margin: '4px 0',
//     borderRadius: '5px',
//     backgroundColor: DARK_BLUE,
//     color: `${WHITE} !important`,
//     fontSize: 1,
//     display: 'inline-block',
//   },
// }

export default Tag
