import React, { ReactNode, FunctionComponent } from 'react';
import styled, { ThemeProps, StyledComponentBase } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import {
  css,
  ThemeUIExtendedCSSProperties as SxProp, // TODO ASK THEM TO EXPORT THE TYPE ON NPM
  Theme,
} from '@theme-ui/css';

export { SxProp };

export type LeanProps<T extends As, Props> = WithAs<PropsOf<T>, T> &
  BoxProps<T> &
  Props;

// export type As = React.ElementType<any>;
export type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

// chakra version
export type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as' | keyof P> & {
    as?: T;
  };
// export type WithAs<P, T extends As> = P &
//   Omit<PropsOf<T>, 'as'> & {
//     as?: T;
//   };

// export type RegularComponent<T extends As, P> = (
//   props: WithBox<Omit<PropsOf<T>, 'as' | keyof P>> & P & { as?: As }
// ) => JSX.Element;

// type ElementProps<
//   E extends keyof JSX.IntrinsicElements | React.ComponentType<any>
// > = E extends keyof JSX.IntrinsicElements
//   ? JSX.IntrinsicElements[E]
//   : React.ComponentProps<E>;

/*
ChakraProps -> BoxProps  /  interfaces
WithChakra -> WithBox / type WithBox<Props> = Props & BoxProps
type As -> type As
type PropsOf -> type PropsOf
type WithAs -> type WithAs


*/
// export type BoxProps<T = {}> = T & {
//   sx?: SxProp;
//   children?: ReactNode;
//   variant?: string;
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   ref?: React.Ref<HTMLElement>;
//   __themeKey?: string;
// };

export type BoxProps<T extends As = 'div'> = PropsOf<T> & {
  sx?: SxProp;
  // children?: ReactNode;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  as?: T;
  //ref?: React.Ref<HTMLElement>;
  __themeKey?: string;
};

// export type BoxProps<
//   E extends keyof JSX.IntrinsicElements | React.ComponentType<any> = 'div'
// > = ElementProps<E> & {
//   as?: E;
//   sx?: SxProp;
//   variant?: string;
//   ref?: React.Ref<E>;
//   __themeKey?: string;
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
// };

// export const Box = styled(
//   (
//     { sx, variant, box: Component = 'div', ...rest }: BoxProps,
//     ref?: React.Ref<any>
//   ) => (
//     <Component
//       {...rest}
//       ref={
//         ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
//       }
//     />
//   )
// )(
//   ({
//     sx = {},
//     __themeKey = 'variants',
//     theme,
//     variant,
//   }: ThemeProps<Theme> & BoxProps) =>
//     css({
//       fontFamily: 'body',
//       fontWeight: 'normal',
//       color: 'text',
//       boxSizing: 'border-box',
//       minWidth: 0,
//       theme,
//       ...(variant && theme[__themeKey] ? theme[__themeKey][variant] || {} : {}),
//       ...sx,
//     })
// );

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

// const A = styled.div``;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CompOrElement =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<unknown>; //= 'button'

function A2({ aaa }: { aaa?: string }) {
  return <a>asd</a>;
}

// it works
// export default function B<
//   E extends CompOrElement
// >({ as, ...rest }: WithAs<WithBox<{}>, E>) {
//   const ref = React.createRef<HTMLAnchorElement>();
//   return <Box ref={ref} {...rest} as={A2} />;
// }

// const C = React.forwardRef(
//   ({ as, ...rest }: BoxProps, ref: React.Ref<HTMLAnchorElement>) => (
//     <B to="/d" as={GatsbyLink} ref={ref} {...rest} />
//   )
// );

// // Works:
// const C = ({ as, ...rest }: BoxProps<'a'>) => (
//   <B to="/d" as={GatsbyLink} {...rest} />
// );

// // doesn't work
// // function C2<E extends CompOrElement>({
// //   as,
// //   ...rest
// // }: Omit<BoxProps<E>, 'as'> & {
// //   as?: E;
// // }) {
// //   return <B to="/d" as={GatsbyLink} {...rest} />;
// // }

// // Works
// const D = ({ as, ref, ...rest }) => <GatsbyLink to="/d" ref={ref} {...rest} />;

Box.displayName = 'Box';
