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

import { DARK_GREY } from '../../config/styles'

const css = compose(space, color, typography, border, shadow, layout, position)

const StyledBox = styled(({ sx, variant, box: Component = 'div', ...rest }) => (
  <Component {...rest} />
))(({ sx, theme }) => {
  // Alex: I'm mutating sx to microoptimize perf since we know we only need the theme.
  // TODO: should we spread it instead in pro of readability and immutability?
  if (sx) {
    sx.theme = theme
  }
  return css(sx)
})

const Box = React.forwardRef(({ sx = {}, ...rest }, ref) => (
  <StyledBox
    sx={{
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: DARK_GREY,
      ...sx,
    }}
    {...rest}
    ref={ref}
  />
))

Box.displayName = 'Box'

export default Box
