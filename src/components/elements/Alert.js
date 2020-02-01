import React from 'react'
import styled from 'styled-components'

import { PINK, GREY } from '../../config/styles'
import Box from '../layout/Box'

const StyledAlert = styled(Box)``

const Alert = ({ variant, sx = {}, ...rest }) => (
  <StyledAlert
    //   {...(variant ? alertVariants[variant] : {})}
    sx={{ ...(alertVariants[variant] || {}), ...sx }}
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

Alert.defaultProps = {
  sx: {
    my: 1,
    pl: 1,
    pr: 1,
    py: 3,
  },
  variant: 'default',
}

export default Alert
