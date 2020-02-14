interface a {
  i: string;
}
// import React, { ReactNode } from 'react'
// import styled from 'styled-components'
// import {
//   space,
//   SpaceProps,
//   color,
//   ColorProps,
//   typography,
//   TypographyProps,
//   border,
//   BorderProps,
//   shadow,
//   ShadowProps,
//   layout,
//   LayoutProps,
//   position,
//   PositionProps,
//   compose,
// } from 'styled-system'

// export type StyleProps = SpaceProps &
//   ColorProps &
//   TypographyProps &
//   BorderProps &
//   ShadowProps &
//   LayoutProps &
//   PositionProps

// interface BoxProps {
//   sx?: StyleProps
//   children?: ReactNode
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>
// }

// const css = compose(space, color, typography, border, shadow, layout, position)

// const StyledBox = React.memo(
//   styled(({ sx, variant, box: Component = 'div', ...rest }) => (
//     <Component {...rest} />
//   ))(({ sx, theme }) => css({ ...sx, theme }))
// )

// const Box = React.forwardRef(({ sx = {}, ...rest }: BoxProps, ref) => (
//   <StyledBox
//     sx={{
//       fontFamily: 'barlow',
//       fontWeight: 'normal',
//       color: 'text',
//       ...sx,
//     }}
//     {...rest}
//     ref={ref}
//   />
// ))

// Box.displayName = 'Box'

// export default React.memo(Box)
// export { Box }
