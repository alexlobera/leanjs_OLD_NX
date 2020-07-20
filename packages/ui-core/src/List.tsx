import React from 'react';
import { Box, LeanProps, As } from './Box';
import { getVariantProps } from './utils';

interface UlProps {
  variant?: string;
  variants?: string[];
}

// interface UlContext {
//     variant?: string;
//     variants?: string[];
//   }
const UlContext = React.createContext({ variant: '', variants: [] });

function Ul<T extends As = 'ul'>(props: LeanProps<T, UlProps>) {
  return (
    <UlContext.Provider
      value={{ variant: props.variant, variants: props.variants }}
    >
      <Box
        as="ul"
        {...props}
        sx={{
          ...getVariantProps(props.variant || props.variants, ulVariantSxProp),
          ...props.sx,
        }}
      />
    </UlContext.Provider>
  );
}

const Ol = (props) => <Ul as="ol" {...props} />;

const ulVariantSxProp = {
  inline: {
    m: 0,
    p: 0,
  },
  unstyled: {
    ml: 0,
  },
};

const liVariantSxProp = {
  inline: {
    p: '8px',
    m: 0,
    display: 'inline-block',
    // TODO the following doesn't work, should we create a styled system function?
    '> li': {
      backgroundColor: 'red',
    },
    // should we instead create a function for
    // firstChildML : 0
    // should we instead create a function for
    // firstChild : { // concern this make composability more difficult
    //     mt: 0
    // }
  },
  unstyled: {
    // TODO the following doesn't work, should we create a styled system function?
    // listStyleType: 'none',
    mb: '7px',
  },
};

function Li<T extends As = 'li'>(props: LeanProps<T>) {
  const { variant, variants } = React.useContext(UlContext);

  return (
    <Box
      as="li"
      {...props}
      sx={{
        py: 1,
        ...getVariantProps(variant || variants, liVariantSxProp),
        ...props.sx,
      }}
    />
  );
}

export { Ul, Ol, Li };
