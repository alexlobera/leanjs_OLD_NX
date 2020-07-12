import React, { ReactNode } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { css, ThemeUIExtendedCSSProperties, Theme } from '@theme-ui/css';

export type BoxProps<T = {}> = T & {
  sx?: ThemeUIExtendedCSSProperties;
  children?: ReactNode;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  ref?: React.Ref<HTMLElement>;
  __themeKey?: string;
};

export const Box = styled(
  (
    { sx, variant, box: Component = 'div', ...rest }: BoxProps,
    ref?: React.Ref<HTMLElement>
  ) => (
    <Component
      {...rest}
      ref={
        ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
      }
    />
  )
)<BoxProps>(
  ({
    sx = {},
    __themeKey = 'variants',
    theme,
    variant,
  }: ThemeProps<Theme> & BoxProps) =>
    css({
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: 'text',
      boxSizing: 'border-box',
      minWidth: 0,
      theme,
      ...(variant && theme[__themeKey] ? theme[__themeKey][variant] || {} : {}),
      ...sx,
    })
);

Box.displayName = 'Box';
