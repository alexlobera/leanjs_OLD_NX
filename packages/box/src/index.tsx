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
  compose,
} from "styled-system";

export type StyleProps = SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps;

export type BoxProps<T = {}> = T & {
  sx?: StyleProps;
  children?: ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export type StyledBoxProps<T = {}> = BoxProps<T> & {
  variant?: string;
  ref?: React.Ref<HTMLElement>;
};

const css = compose(space, color, typography, border, shadow, layout, position);

const StyledBox: FunctionComponent<StyledBoxProps> = React.memo(
  styled(({ sx, variant, box: Component = "div", ...rest }) => (
    <Component {...rest} />
  ))(({ sx, theme }) => css({ ...sx, theme }))
);

function Box<T = {}>({ sx = {}, ...rest }: BoxProps<T>) {
  return (
    <StyledBox
      sx={{
        fontFamily: "barlow",
        fontWeight: "normal",
        color: "text",
        ...sx,
      }}
      {...rest}
    />
  );
}

Box.displayName = "Box";

export default Box;
