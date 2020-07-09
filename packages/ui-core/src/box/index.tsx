import React, { ReactNode } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { css, ThemeUIExtendedCSSProperties, Theme } from '@theme-ui/css';

export type BoxProps<T = {}> = T & {
  sx?: ThemeUIExtendedCSSProperties;
  children?: ReactNode;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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
    theme,
  }: ThemeProps<Theme> & { sx?: ThemeUIExtendedCSSProperties }) =>
    css({
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: 'text',
      boxSizing: 'border-box',
      minWidth: 0,
      theme,
      ...sx,
    })
);

Box.displayName = 'Box';
