import React from 'react';
import { Box, LeanProps, As } from './Box';

function createTypography(variant: string) {
  return React.forwardRef(
    <T extends As & string = 'h2'>(props: LeanProps<T>, ref) => (
      <Box
        {...props}
        ref={ref}
        as={props.as || props.variant || variant}
        variant={
          props.variant
            ? props.variant
            : typeof props.as === 'string'
            ? props.as
            : variant
        }
        __themeKey="styles"
      />
    )
  );
}

export const H1 = createTypography('h1');
export const H2 = createTypography('h2');
export const H3 = createTypography('h3');
export const H4 = createTypography('h4');
export const H5 = createTypography('h5');
export const H6 = createTypography('h6');
export const Heading = H2;

export const P = createTypography('p');
export const Span = createTypography('span');
export const Blockquote = createTypography('blockquote');
