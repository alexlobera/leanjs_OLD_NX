import React from 'react'
import styled from 'styled-components'
import { space, color, typography } from 'styled-system'

export const StyledBox = styled.div`
  ${space}
  ${color}
  ${typography}
`

const Box = React.forwardRef(({ children, ...rest }, ref) => {
  const props = {
    ...rest,
    as: rest.box || rest.as || rest.undefined,
  }

  return (
    <StyledBox {...props} ref={ref}>
      {children}
    </StyledBox>
  )
})

Box.displayName = 'Box'
Box.defaultProps = {
  fontFamily: 'barlow',
  fontWeight: 'normal',
  color: 'darkGrey',
}

export default Box
