import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import {
  css,
  Theme,
  get,
  // ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export type SxProp = any;

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
export type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export type As = React.ElementType; // keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E;
  sx?: SxProp;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  __themeKey?: string;
  __sx?: SxProp;
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps>;

// const defaultElement = 'div';

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
// ) as <E extends React.ElementType = typeof defaultElement>(
//   props: BoxProps<E>
// ) => JSX.Element;

// export const Box: PolymorphicComponent = (props) => {
//   const box = props.box || props.as;
//   return <StyledBox {...props} box={box} as={null} />;
// };

export function Box<T extends As = 'div'>({ box, as, ...rest }: BoxProps<T>) {
  return <StyledBox {...rest} box={box || as} />;
}

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  BoxProps<E>;

export type PolymorphicComponent<
  P = {},
  D extends React.ElementType = 'div'
> = <E extends React.ElementType = D>(
  props: PolymorphicComponentProps<E, P>
) => JSX.Element;
