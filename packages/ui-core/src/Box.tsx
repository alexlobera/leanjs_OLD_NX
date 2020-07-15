import React from 'react';
import styled, { ThemeProps } from 'styled-components';

import {
  css,
  Theme,
  ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export { SxProp };

type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as'> & {
    as?: T;
  };

export type BoxProps<T extends As = 'div'> = {
  sx?: SxProp;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  as?: T;
  ref?:
    | ((instance: unknown) => void)
    | React.MutableRefObject<unknown>
    | React.Ref<unknown>;
  __themeKey?: string;
};

export type LeanComponent<P = {}, TT extends As = 'div'> = <T extends As = TT>(
  props: LeanProps<T, P>
) => JSX.Element;

export type LeanProps<T extends As = 'div', P = {}> = WithAs<P, T> &
  BoxProps<T>;

export type As = React.ElementType<any>; // keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

export const Box: LeanComponent<
  {},
  'div'
> = styled(({ sx, variant, box: Component = 'div', ...rest }, ref) => (
  <Component
    {...rest}
    ref={
      ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
    }
  />
))(
  ({
    sx = {},
    __themeKey = 'variants',
    theme,
    variant,
  }: ThemeProps<Theme> & BoxProps) =>
    css({
      fontFamily: 'body',
      fontWeight: 'normal',
      color: 'text',
      boxSizing: 'border-box',
      minWidth: 0,
      theme,
      ...(variant && theme[__themeKey] ? theme[__themeKey][variant] || {} : {}),
      ...sx,
    })
);
