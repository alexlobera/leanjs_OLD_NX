import React from 'react'

import { Z_INDEX_MEDIUM } from '../../config/styles'
import { Row } from './Grid'
import Box from './Box'

export const CallToActionRow = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      mb: [0, -25],
      position: 'relative',
      zIndex: Z_INDEX_MEDIUM,
      ...sx,
    }}
    box={Row}
    {...rest}
  />
)
