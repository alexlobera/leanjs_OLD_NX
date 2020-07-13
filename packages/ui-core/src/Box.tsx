import React, { ReactNode, FunctionComponent } from 'react';
import styled, { ThemeProps, StyledComponentBase } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import {
  css,
  ThemeUIExtendedCSSProperties as SxProp,
  Theme,
} from '@theme-ui/css';

export { SxProp };

// export type BoxProps<T = {}> = T & {
//   sx?: SxProp;
//   children?: ReactNode;
//   variant?: string;
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   ref?: React.Ref<HTMLElement>;
//   __themeKey?: string;
// };

// export type BoxProps<T = {}> = T & {
//   sx?: SxProp;
//   children?: ReactNode;
//   variant?: string;
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   ref?: React.Ref<HTMLElement>;
//   __themeKey?: string;
// };

type ElementProps<
  E extends keyof JSX.IntrinsicElements | React.ComponentType<any>
> = E extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[E]
  : React.ComponentProps<E>;

export type BoxProps<
  E extends keyof JSX.IntrinsicElements | React.ComponentType<any> = 'div'
> = ElementProps<E> & {
  as?: E;
  sx?: SxProp;
  variant?: string;
  ref?: React.Ref<E>;
  __themeKey?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

// export default function Box<
//   E extends keyof JSX.IntrinsicElements | React.ComponentType<unknown> = 'div'
// >(props: BoxProps<E>): JSX.Element;

export const Box = styled(
  (
    { sx, variant, box: Component = 'div', ...rest }: BoxProps,
    ref?: React.Ref<any>
  ) => (
    <Component
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

const A = styled.div``;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type CompOrElement = keyof JSX.IntrinsicElements | React.ComponentType<unknown>; //= 'button'

function A2() {
  return <a>asd</a>;
}

export default function B<
  // E extends keyof JSX.IntrinsicElements | React.ComponentType<any> = 'button'
  E extends CompOrElement
>({
  as,
  ...rest
}: Omit<BoxProps<E>, 'as'> & {
  as?: E;
}) {
  const ref = React.createRef<HTMLAnchorElement>();
  return <Box ref={ref} {...rest} as={A2} />;
}

// const C = React.forwardRef(
//   ({ as, ...rest }: BoxProps, ref: React.Ref<HTMLAnchorElement>) => (
//     <B to="/d" as={GatsbyLink} ref={ref} {...rest} />
//   )
// );

// Works:
// const C = ({ as, ...rest }: BoxProps<'a'>) => (
//   <B to="/d" as={GatsbyLink} {...rest} />
// );

// doesn't work
// function C2<E extends CompOrElement>({
//   as,
//   ...rest
// }: Omit<BoxProps<E>, 'as'> & {
//   as?: E;
// }) {
//   return <B to="/d" as={GatsbyLink} {...rest} />;
// }

// Works
const D = ({ as, ref, ...rest }) => <GatsbyLink to="/d" ref={ref} {...rest} />;

Box.displayName = 'Box';
