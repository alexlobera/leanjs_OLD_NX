import React from 'react';
import { Box, BoxProps } from './Box';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps extends BoxProps {
  variant?: HeadingVariant;
}

type TextVariant = 'p' | 'blockquote';
interface TextProps extends BoxProps {
  variant?: TextVariant;
}

function createTypography<T extends BoxProps, Variant>(variant: Variant) {
  return React.forwardRef((props: T, ref: React.Ref<HTMLHeadingElement>) => (
    <Box
      ref={ref}
      as={props.as || props.variant || variant}
      variant={props.variant || variant}
      {...props}
      __themeKey="styles"
    />
  ));
}

export const H1 = createTypography<HeadingProps, HeadingVariant>('h1');
export const H2 = createTypography<HeadingProps, HeadingVariant>('h2');
export const H3 = createTypography<HeadingProps, HeadingVariant>('h3');
export const H4 = createTypography<HeadingProps, HeadingVariant>('h4');
export const H5 = createTypography<HeadingProps, HeadingVariant>('h5');
export const H6 = createTypography<HeadingProps, HeadingVariant>('h6');
export const Heading = H2;

export const P = createTypography<TextProps, TextVariant>('p');
export const Blockquote = createTypography<TextProps, TextVariant>(
  'blockquote'
);
