import React from 'react-photo-gallery'
import Box from '../layout/Box'

const Hr = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      mt: 6,
      mb: 6,
      ...sx,
    }}
    box="hr"
    {...rest}
  />
)

export default Hr
