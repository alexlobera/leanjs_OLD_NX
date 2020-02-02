import React from 'react'

import { PINK, GREY } from '../../config/styles'
import Box from '../layout/Box'

// const StyledAlert = styled(Box)``
// const StyledAlert = props => <Box {...props} />

const Alert = ({ variant = 'default', sx = {}, ...rest }) => (
  <Box
    //   {...(variant ? alertVariants[variant] : {})}
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
    bordercolor: GREY,
  },
  danger: {
    backgroundColor: PINK,
    fontWeight: 'bold',
  },
}

// Alert.defaultProps = {
//   variant: 'default',
// }

export default Alert
