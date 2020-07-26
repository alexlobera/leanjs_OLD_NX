import React from 'react';
import styled, { ThemeProps } from 'styled-components';

import {
  css,
  Theme,
  get,
  // ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export type SxProp = any;

export { get };

type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as'> & {
    as?: T;
  };

export type BoxProps<T extends As = 'div'> = {
  sx?: SxProp;
  variant?: string;
  children?: React.ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  as?: T;
  ref?:
    | ((instance: unknown) => void)
    | React.MutableRefObject<unknown>
    | React.Ref<unknown>;
  __themeKey?: string;
  __sx?: SxProp;
};

export type LeanComponent<P = {}, TT extends As = 'div'> = <T extends As = TT>(
  props: LeanProps<T, P>
) => JSX.Element;

export type LeanProps<T extends As = 'div', P = {}> = WithAs<P, T> &
  BoxProps<T>;

export type As = React.ElementType<any>; // keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

const StyledBox: LeanComponent<
  {},
  'div'
> = styled(
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
  }: ThemeProps<Theme> & BoxProps) => {
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

export function Box<T extends As = 'div'>(props: LeanProps<T>) {
  const box = props.box || props.as;
  return <StyledBox {...props} box={box} as={null} />;
}
