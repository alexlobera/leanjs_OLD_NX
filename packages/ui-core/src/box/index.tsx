import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import { css, CssProps as SxProp } from '@styled-system/css';

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
        boxSizing: 'border-box',
        minWidth: 0,
        ...sx,
      }}
      {...rest}
    />
  );
}

Box.displayName = 'Box';
