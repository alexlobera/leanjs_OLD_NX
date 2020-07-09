import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import { css, ThemeUIExtendedCSSProperties } from '@theme-ui/css';

export type BoxProps<T = {}> = T & {
  sx?: ThemeUIExtendedCSSProperties;
  children?: ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export type StyledBoxProps<T = {}> = BoxProps<T> & {
  variant?: string;
  ref?: React.Ref<HTMLElement>;
};

export const Box: FunctionComponent<StyledBoxProps> = React.memo(
  styled(({ sx, variant, box: Component = 'div', ...rest }) => (
    <Component {...rest} />
  ))(({ sx = {}, theme }) =>
    css({
      fontFamily: 'barlow',
      fontWeight: 'normal',
      color: 'text',
      boxSizing: 'border-box',
      minWidth: 0,
      theme,
      ...sx,
    })
  )
);

// export function Box<T = {}>({ sx = {}, ...rest }: BoxProps<T>) {
//   return (
//     <StyledBox
//       sx={{
//         fontFamily: 'barlow',
//         fontWeight: 'normal',
//         color: 'text',
//         boxSizing: 'border-box',
//         minWidth: 0,
//         ...sx,
//       }}
//       {...rest}
//     />
//   );
// }

Box.displayName = 'Box';
