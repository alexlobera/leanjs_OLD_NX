import React from 'react';
import { Box, BoxProps, As } from './Box';
import { getVariantProps } from './utils';

interface UlProps {
  variant?: string;
  variants?: string[];
}

const UlContext = React.createContext({ variant: '', variants: [] });

function Ul<T extends As = 'ul'>(props: BoxProps<T, UlProps>) {
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

// TODO MOVE ALL THE STYLE TO THE THEME
const ulVariantSxProp = {
  inline: {
    m: 0,
    p: 0,
    display: 'flex',
    alignItems: 'center',
  },
  unstyled: {
    ml: 0,
    listStyle: 'none',
    pl: 0,
  },
};

const liVariantSxProp = {
  inline: {
    p: '8px',
    m: 0,
    display: 'inline-block',
  },
  unstyled: {
    // TODO the following doesn't work, should we create a styled system function?
    // listStyleType: 'none',
    //lineHeight: '1.5rem',
    mb: '7px',
  },
};

function Li<T extends As = 'li'>(props: BoxProps<T>) {
  const { variant, variants } = React.useContext(UlContext);

  return (
    <Box
      as="li"
      {...props}
      sx={{
        py: 1,
        lineHeight: '1.5rem',
        ...getVariantProps(variant || variants, liVariantSxProp),
        ...props.sx,
      }}
    />
  );
}

export { Ul, Ol, Li };
