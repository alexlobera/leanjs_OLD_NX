import React from 'react'
import styled from 'styled-components'

import Box from '../layout/Box'

const StyledP = styled(Box)`
  text-align: ${props => props.align || 'left'};
  ${props => props.small && `font-size 0.9rem`};
  > a {
    ${props => props.small && `font-size 0.9rem`};
  }
`
const P = ({ sx = {}, ...rest }) => (
  <StyledP box="p" sx={{ m: 0, lineHeight: 2, pb: 3, ...sx }} {...rest} />
)

export default P
