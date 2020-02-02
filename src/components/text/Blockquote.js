import React from 'react'
import Box from '../layout/Box'
const Blockquote = ({ children, ...rest }) => <Box {...rest}>"{children}"</Box>

Blockquote.defaultProps = {
  sx: {
    fontStyle: 'italic',
    lineHeight: 4,
  },
  box: 'span',
}

export default Blockquote
