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

export interface BoxOwnProps<E extends As = As> {
  as?: E;
  sx?: SxProp;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  __themeKey?: string;
  __sx?: SxProp;
}

export type BoxProps<E extends As> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps>;

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

export function Box<T extends As = 'div'>({ box, as, ...rest }: BoxProps<T>) {
  return <StyledBox {...rest} box={box || as} />;
}
