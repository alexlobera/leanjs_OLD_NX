import React from 'react'
import styled, { css } from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'

// const Flex = ({sx = {}, ...rest}) => <Box cs sx={{display: 'flex', ...sx }} />

// const StyledFlex = styled(Box)(({ theme, sx }) => flexbox({ theme, ...sx }))

const Flex = ({ sx = {}, ...rest }) => (
  <Box
    css={css`
      ${({ theme, sx }) => flexbox({ theme, ...sx })}
    `}
    sx={{ display: 'flex', ...sx }}
    {...rest}
  />
)

// const Flex = styled(Box)(({ theme, sx }) => flexbox({ theme, ...sx }))
// Flex.defaultProps = {
//   sx: {
//     display: 'flex',
//   },
// }

export default Flex
