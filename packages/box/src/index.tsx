import React, { ReactNode, FunctionComponent } from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  compose
} from "styled-system";

export type StyleProps = SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps;

export interface BoxProps {
  type?: string; // TODO REPLACE THIS WITH A GENERIC INTERFACE FOR ANY INPUT PROPS (PLACEHOLDER, ETC)
  sx?: StyleProps;
  children?: ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

interface StyledBoxProps extends BoxProps {
  variant?: string;
  ref?: React.Ref<HTMLFormElement>;
}

const css = compose(space, color, typography, border, shadow, layout, position);

const StyledBox: FunctionComponent<StyledBoxProps> = React.memo(
  styled(({ sx, variant, box: Component = "div", ...rest }) => (
    <Component {...rest} />
  ))(({ sx, theme }) => css({ ...sx, theme }))
);

const Box = React.forwardRef<HTMLFormElement, BoxProps>(
  ({ sx = {}, ...rest }, ref) => (
    <StyledBox
      sx={{
        fontFamily: "barlow",
        fontWeight: "normal",
        color: "text",
        ...sx
      }}
      {...rest}
      ref={ref}
    />
  )
);

Box.displayName = "Box";

export default React.memo(Box);
export { Box };
