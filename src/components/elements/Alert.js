import React from 'react'

import Box from '../layout/Box'

const Alert = ({ variant = 'default', sx = {}, ...rest }) => (
  <Box
    sx={{
      my: 1,
      pl: 1,
      pr: 1,
      py: 3,
      ...(alertVariants[variant] || {}),
      ...sx,
    }}
    {...rest}
  />
)

const alertVariants = {
  default: {
    border: '1px solid',
    bordercolor: 'text',
  },
  danger: {
    backgroundColor: 'danger',
    fontWeight: 'bold',
  },
}

export default Alert
