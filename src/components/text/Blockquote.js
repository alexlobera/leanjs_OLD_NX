import React from 'react'
import Box from '../layout/Box'

const Blockquote = ({ sx = {}, children, ...rest }) => (
  <Box box="span" sx={{ fontStyle: 'italic', lineHeight: 4, ...sx }} {...rest}>
    "{children}"
  </Box>
)

// Blockquote.defaultProps = {
//   sx: {
//     fontStyle: 'italic',
//     lineHeight: 4,
//   },
//   box: 'span',
// }

export default Blockquote
