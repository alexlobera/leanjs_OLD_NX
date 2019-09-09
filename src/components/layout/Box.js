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

const PropsBlackList = ({
  as: _as,
  box,
  m,
  p,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  pt,
  pl,
  pr,
  pb,
  px,
  py,
  lineheight,
  fontFamily,
  fontWeight,
  color,
  display,
  variant,
  position,
  border,
  borderColor,
  lineHeight,
  borderLeft,
  fontSize,
  backgroundColor,
  paddingBottom,
  bgColor,
  bgImageOpacity,
  bgImage,
  boxShadow,
  fontStyle,
  textShadow,
  borderRadius,
  textAlign,
  letterSpacing,
  alignItems,
  flexDirection,
  sm,
  alignSelf,
  small,
  fullHeight,
  bgColors,
  bg,
  ...rest
}) => {
  const Component = box || _as || 'div'

  return <Component {...rest} />
}

export const StyledBox = styled(PropsBlackList)(
  compose(
    space,
    color,
    typography,
    border,
    shadow,
    layout,
    position
  )
)

const Box = React.forwardRef(({ children, ...rest }, ref) => (
  <StyledBox {...rest} ref={ref}>
    {children}
  </StyledBox>
))

Box.displayName = 'Box'
Box.defaultProps = {
  fontFamily: 'barlow',
  fontWeight: 'normal',
  color: DARK_GREY,
}

export default Box
