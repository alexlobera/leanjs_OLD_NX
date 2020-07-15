import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import {
  css,
  Theme,
  ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
// import { ThemeUIExtendedCSSProperties as SxProp } from './ThemeUI'; // TODO ASK THEME-UI TO EXPORT THE TYPES ON NPM
export { SxProp };

// type WithAs<P, T extends As> = P &
//   Omit<PropsOf<T>, 'as' | keyof P> & {
//     as?: T;
//   };

type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as'> & {
    as?: T;
  };

// type WithAs<T extends As> = Omit<PropsOf<T>, 'as'> & {
//   as?: T;
// };

// interface PP {
//   aaaa22: {
//     a: number;
//   };
//   // as: string;
// }

// SIMPLEST CASE (WORKS)
// type Tess = 'button';
// type aa = WithAs<PP, Tess>;

// const C = function ({ id, placeholder, ...rest }: aa) {
//   return <button aaaa22={{ d: false }} {...rest} />;
// };

// const D = function ({ as, id, placeholder, ...rest }: aa) {
//   return <C {...rest} as="button" />;
// };

// type aa<T extends As, Props = PP> = WithAs<Props, T> & Props;

type aa<T extends As, Props = {}> = WithAs<Props, T>;

const BoxWorks = function <T extends As = 'div'>({
  id,
  placeholder,
  dddd,
  ...rest
}: aa<T, { dddd?: boolean }>) {
  return <div {...rest} />;
};

// // can I in chackra do <Box as="div" onSubmit={() => {}}> ???
// const D = function ({ as, id, placeholder, ...rest }) {
//   return <BoxWorks {...rest} as="div" onSubmit={() => {}} aaaa22={{ a: 1 }} />;
// };

// const E = function ({ as, id, placeholder, ...rest }) {
//   return (
//     <BoxWorks
//       {...rest}
//       to="ad"
//       ddf34s
//       dddd
//       as={GatsbyLink}
//       onSubmit={() => {}}
//       // aaaa22={{ a: 1 }}
//     />
//   );
// };

export type BoxProps<T extends As = 'div'> = {
  sx?: any; //SxProp;
  variant?: string;
  box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  as?: T;
  ref?:
    | ((instance: unknown) => void)
    | React.MutableRefObject<unknown>
    | React.Ref<unknown>;
  __themeKey?: string;
};

// type aa<T extends As, Props = {}> = WithAs<Props, T>;

export type LeanProps<T extends As = 'div', P = {}> = WithAs<P, T> &
  BoxProps<T>;
// export type LeanProps<T extends As, Props = IProps> = BoxProps<T> &
//   Props &
//   WithAs<PropsOf<T>>;
export type As = React.ElementType<any>; // keyof JSX.IntrinsicElements | React.ComponentType<any>;
export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>;

export const Box: LeanComponent = styled(
  ({ sx, variant, box: Component = 'div', ...rest }, ref) => (
    <Component
      {...rest}
      ref={
        ref && Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : null
      }
    />
  )
)<BoxProps>(
  // )(
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

// const A = styled(
//   ({ box: Comp = 'div', sx, variant, __themeKey, ...rest }: BoxProps) => (
//     <div {...rest} />
//   )
// )({});
// // it doesn't work
// const B = () => <A sx={{ m: 1 }} as="p" />;

// export function Box<T extends As = 'div'>(props: LeanProps<T>) {
//   return <StyledBox {...props} />;
// }

// export const Box = function <T extends As = 'div'>(props: LeanProps<T>) {
//   return <StyledBox {...props} />;
// };

const B = ({ ...rest }) => <Box sx={{ m: 1 }} as="p" {...rest} />;

const B2 = <T extends As = 'div'>({ ...rest }: LeanProps<T>) => (
  <Box {...rest} sx={{ m: 1, ...(rest.sx || {}) }} />
);

const B3 = <T extends As>({ sx, ...rest }: LeanProps<T>) => (
  <B2 to="adf" adfds as={GatsbyLink} sx={{ m: 1 }} />
);

// works
// const B4: LeanComponent = (props) => (
//   <B2 {...props} sx={{ m: 1, ...props.sx }} />
// );

export type LeanComponent<P = {}> = <T extends As>(
  props: LeanProps<T, P>
) => JSX.Element;

const B4: LeanComponent<{ ddddd: boolean }> = ({ sx, ...rest }) => (
  <Box {...rest} box="div" sx={{ m: 1, ...sx }} />
);

const B42: LeanComponent<{ ddddd: boolean }> = (props) => {
  const { sx = {}, ...rest } = props;
  return <Box {...rest} as="div" sx={{ m: 1, ...sx }} />;
};

const B5: LeanComponent = (props) => (
  <B4 to="afadsf" ddddd as={GatsbyLink} sx={{ m: 1 }} />
);

/*
*** ({ sx, ...rest }) => (
var rest: Pick<LeanProps<T, {
    ddddd: boolean;
}>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof React.ComponentPropsWithRef<T>, "as">, "sx">>


const Box: LeanComponent<{}>
Type 'Pick<LeanProps<T, { ddddd: boolean; }>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof ComponentPropsWithRef<T>, "as">, "sx">> & { ...; }' is not assignable to type 'IntrinsicAttributes & Pick<ComponentPropsWithRef<T>, Exclude<keyof ComponentPropsWithRef<T>, "as">> & { ...; } & BoxProps<...>'.
  Type 'Pick<LeanProps<T, { ddddd: boolean; }>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof ComponentPropsWithRef<T>, "as">, "sx">> & { ...; }' is not assignable to type 'Pick<ComponentPropsWithRef<T>, Exclude<keyof ComponentPropsWithRef<T>, "as">>'.ts(2322)


*/
