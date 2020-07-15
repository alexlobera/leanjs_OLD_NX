import React from 'react';
import styled, { ThemeProps } from 'styled-components';

import {
  css,
  Theme,
  ThemeUIExtendedCSSProperties as SxProp,
} from '@theme-ui/css';
export { SxProp };

// type WithAs<P, T extends As> = P &
//   Omit<PropsOf<T>, 'as' | keyof P> & {
//     as?: T;
//   };

type WithAs<P, T extends As> = P &
  Omit<PropsOf<T>, 'as'> & {
    as?: T;
  };

export type BoxProps<T extends As = 'div'> = {
  sx?: SxProp;
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

export type LeanComponent<P = {}, TT extends As = 'div'> = <T extends As = TT>(
  props: LeanProps<T, P>
) => JSX.Element;
// & {
//   displayName?: string;
//   propTypes?: React.WeakValidationMap<P>;
//   defaultProps?: Partial<P>;
// };

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

// const B = ({ ...rest }) => <Box sx={{ m: 1 }} as="p" {...rest} />;

// const B2 = <T extends As = 'div'>({ ...rest }: LeanProps<T>) => (
//   <Box {...rest} sx={{ m: 1, ...(rest.sx || {}) }} />
// );

// const B3 = <T extends As>({ sx, ...rest }: LeanProps<T>) => (
//   <B2 to="adf" adfds as={GatsbyLink} sx={{ m: 1 }} />
// );

// works
// const B4: LeanComponent = (props) => (
//   <B2 {...props} sx={{ m: 1, ...props.sx }} />
// );

// const B4: LeanComponent<{ ddddd: boolean }> = ({ sx, ...rest }) => (
//   <Box {...rest} box="div" sx={{ m: 1, ...sx }} />
// );

// const B42: LeanComponent<{ ddddd: boolean }> = (props) => {
//   const { sx = {}, ...rest } = props;
//   return <Box {...props} ff as="div" sx={{ m: 1, ...sx }} />;
// };

// const B5: LeanComponent = (props) => (
//   <B4 to="afadsf" ddddd as={GatsbyLink} sx={{ m: 1 }} />
// );

/*
*** ({ sx, ...rest }) => (
var rest: Pick<LeanProps<T, {
    ddddd: boolean;
}>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof React.ComponentPropsWithRef<T>, "as">, "sx">>


const Box: LeanComponent<{}>
Type 'Pick<LeanProps<T, { ddddd: boolean; }>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof ComponentPropsWithRef<T>, "as">, "sx">> & { ...; }' is not assignable to type 'IntrinsicAttributes & Pick<ComponentPropsWithRef<T>, Exclude<keyof ComponentPropsWithRef<T>, "as">> & { ...; } & BoxProps<...>'.
  Type 'Pick<LeanProps<T, { ddddd: boolean; }>, "ref" | "as" | "children" | "variant" | "box" | "__themeKey" | "ddddd" | Exclude<Exclude<keyof ComponentPropsWithRef<T>, "as">, "sx">> & { ...; }' is not assignable to type 'Pick<ComponentPropsWithRef<T>, Exclude<keyof ComponentPropsWithRef<T>, "as">>'.ts(2322)


*/
