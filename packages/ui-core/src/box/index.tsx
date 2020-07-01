import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
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
} from 'styled-system';

export type SxProp = SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps;

export type BoxProps<T = {}> = T & {
  sx?: SxProp;
  children?: ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export type StyledBoxProps<T = {}> = BoxProps<T> & {
  variant?: string;
  ref?: React.Ref<HTMLElement>;
};

const css = compose(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  color,
  typography,
  border,
  shadow,
  layout,
  position
);

const StyledBox: FunctionComponent<StyledBoxProps> = React.memo(
  styled(({ sx, variant, box: Component = 'div', ...rest }) => (
    <Component {...rest} />
  ))(({ sx, theme }) => css({ ...sx, theme }))
);

export function Box<T = {}>({ sx = {}, ...rest }: BoxProps<T>) {
  return (
    <StyledBox
      sx={{
        fontFamily: 'barlow',
        fontWeight: 'normal',
        color: 'text',
        ...sx,
      }}
      {...rest}
    />
  );
}

Box.displayName = 'Box';
