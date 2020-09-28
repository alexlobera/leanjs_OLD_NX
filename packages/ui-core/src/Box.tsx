import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import {
  css,
  Theme,
  get,
  // ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export type SxProp = any;

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

export type As = React.ElementType;

export interface BoxOwnProps<T extends As = As> {
  as?: T;
  sx?: SxProp;
  variant?: string;
  box?: As;
  __themeKey?: string;
  __sx?: SxProp;
}

export type BoxProps<T extends As, P = {}> = BoxOwnProps<T> &
  Omit<PropsOf<T>, keyof BoxOwnProps> &
  P;

export const StyledBox = styled(
  (
    { sx, box: Comp = 'div', variant, variants, __themeKey, __sx, ...rest },
    ref
  ) => (
    <Comp
      {...rest}
      ref={
        ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
      }
    />
  )
)(
  ({
    sx = {},
    __themeKey = 'variants',
    __sx = {},
    theme,
    variant,
  }: ThemeProps<Theme> & BoxOwnProps) => {
    return css({
      fontFamily: 'body',
      fontWeight: 'normal',
      color: 'text',
      boxSizing: 'border-box',
      minWidth: 0,
      ...__sx,
      ...(get(theme, `${__themeKey}.${variant}`) || {}),
      ...sx,
    });
  }
);

export const Box = React.forwardRef(function <T extends As = 'div'>(
  { box, as, ...rest }: BoxProps<T>,
  ref
) {
  return <StyledBox ref={ref} {...rest} box={box || as} />;
}) as <T extends As = 'div'>(props: BoxProps<T>) => JSX.Element;
