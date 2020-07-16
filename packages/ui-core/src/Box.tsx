import React from 'react';
import styled, { ThemeProps } from 'styled-components';

import {
  css,
  Theme,
  // ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export type SxProp = any;

type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as'> & {
    as?: T;
  };

export type BoxProps<T extends As = 'div'> = {
  sx?: SxProp;
  variant?: string;
  children?: React.ReactNode;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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

const StyledBox: LeanComponent<
  {},
  'div'
> = styled(({ sx, box: Comp = 'div', variant, ...rest }, ref) => (
  <Comp
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

/*
StyledBox is useful when you want to use the styled function on Box. E.g. 
const B = styled(Box)`{ somecss }`
<B as={SomeComponent}/>
The previous code will result in not rendering Box and therefore the styles created by Box won't be created either. As an alternative you can do:
const B = styled(StyledBox)`{ somecss }`
<B box={SomeComponent}/>
This way we render SomeComponent plus the styles created by Box. 
*/
// export function StyledBox<T extends As = 'div'>(
//   props: LeanProps<
//     T,
//     { box?: keyof JSX.IntrinsicElements | React.ComponentType<any> }
//   >
// ) {
//   const Comp = props.box || 'div';
//   return <Comp {...props} />;
// }

export function Box<T extends As = 'div'>(props: LeanProps<T>) {
  const box = props.box || props.as;
  return <StyledBox {...props} box={box} as={null} />;
}

// import React from 'react';
// import styled, { ThemeProps } from 'styled-components';

// import {
//   css,
//   Theme,
//   // ThemeUIExtendedCSSProperties as SxProp,
// } from '@theme-ui/css';
// export type SxProp = any;

// type WithAs<P, T extends As> = P &
//   Omit<PropsOf<T>, 'as'> & {
//     as?: T;
//   };

// export type BoxProps<T extends As = 'div'> = {
//   sx?: SxProp;
//   box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
//   variant?: string;
//   children?: React.ReactNode;
//   as?: T;
//   ref?:
//     | ((instance: unknown) => void)
//     | React.MutableRefObject<unknown>
//     | React.Ref<unknown>;
//   __themeKey?: string;
// };

// export type LeanComponent<P = {}, TT extends As = 'div'> = <T extends As = TT>(
//   props: LeanProps<T, P>
// ) => JSX.Element;

// export type LeanProps<T extends As = 'div', P = {}> = WithAs<P, T> &
//   BoxProps<T>;

// export type As = React.ElementType<any>; // keyof JSX.IntrinsicElements | React.ComponentType<any>;

// export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

// const StyledBox: LeanComponent<
//   {},
//   'div'
// > = styled(({ sx, box: Comp = 'div', variant, ...rest }, ref) => (
//   <Comp
//     {...rest}
//     ref={
//       ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
//     }
//   />
// ))(
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

// /*
// StyledBox is useful when you want to use the styled function on Box. E.g.
// const B = styled(Box)`{ somecss }`
// <B as={SomeComponent}/>
// The previous code will result in not rendering Box and therefore the styles created by Box won't be created either. As an alternative you can do:
// const B = styled(StyledBox)`{ somecss }`
// <B box={SomeComponent}/>
// This way we render SomeComponent plus the styles created by Box.
// */
// // export function Box<T extends As = 'div'>(props: LeanProps<T, BoxProps>) {
// //   return <StyledBox {...props} box={props.box || props.as} as={null} />;
// // }

// export const Box: LeanComponent<BoxProps> = function Box(props) {
//   return <StyledBox {...props} box={props.box || props.as} as={null} />;
// };
