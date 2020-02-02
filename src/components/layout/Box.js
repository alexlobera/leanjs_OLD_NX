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

const StyledBox = styled(({ sx, variant, as: Component, ...rest }) => (
  <Component {...rest} />
))(props => {
  // Alex: I'm mutation to microoptimize since we know we only need the theme.
  // TODO: should we spread it instead in pro of readability and immutability?
  if (props.sx) {
    props.sx.theme = props.theme
  }
  return css(props.sx)
})

// const StyledBox = styled(({ sx, variant, as: Component, ...rest }) => (
//   <Component {...rest} />
// ))(props => css({ ...(props.sx || {}), theme: props.theme }))

const Box = React.forwardRef(({ sx = {}, as: _as, box, ...rest }, ref) => (
  <StyledBox
    sx={{
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: DARK_GREY,
      ...sx,
    }}
    {...rest}
    as={box || _as || 'div'}
    ref={ref}
  />
))

Box.displayName = 'Box'
// Box.defaultProps = {
//   sx: {
//     fontFamily: 'barlow',
//     fontWeight: 'normal',
//     color: DARK_GREY,
//   },
// }

export default Box
