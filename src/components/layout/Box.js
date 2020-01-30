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
  if (props.sx) {
    props.sx.theme = props.theme
  }
  return css(props.sx)
})

const Box = React.forwardRef(({ children, as: _as, box, ...rest }, ref) => (
  <StyledBox {...rest} as={box || _as || 'div'} ref={ref}>
    {children}
  </StyledBox>
))

Box.displayName = 'Box'
Box.defaultProps = {
  sx: {
    fontFamily: 'barlow',
    fontWeight: 'normal',
    color: DARK_GREY,
  },
}

export default Box
