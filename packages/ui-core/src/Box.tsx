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
  // box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  box?: As;
  __themeKey?: string;
  __sx?: SxProp;
}

export type BoxProps<E extends As, P = {}> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps> &
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
) as <E extends As = 'div'>(props: BoxProps<E>) => JSX.Element;

export function Box<T extends As = 'div'>(props: BoxProps<T>) {
  return <StyledBox {...props} box={props.box || props.as} as={null} />;
}

export function Link<T extends As = 'a'>({ a, ...props }: BoxProps<T>) {
  return (
    <Box
      as="a"
      variant="a"
      aadfs
      {...props}
      __sx={{ mt: 1 }}
      __themeKey="styles"
    />
  );
}
