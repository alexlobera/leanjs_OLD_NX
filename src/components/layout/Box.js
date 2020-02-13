import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  typography,
  border,
  shadow,
  layout,
  position,
  compose,
} from 'styled-system'

const css = compose(space, color, typography, border, shadow, layout, position)

const StyledBox = React.memo(
  styled(({ sx, variant, box: Component = 'div', ...rest }) => (
    <Component {...rest} />
  ))(({ sx, theme }) => css({ ...sx, theme }))
)

const Box = React.forwardRef(({ sx = {}, ...rest }, ref) => (
  <StyledBox
    sx={{
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: 'text',
      ...sx,
    }}
    {...rest}
    ref={ref}
  />
))

Box.displayName = 'Box'

export default React.memo(Box)
