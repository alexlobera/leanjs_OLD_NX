import React from 'react';
import { Box, BoxProps, As } from './Box';
// import { Box, LeanProps, As } from './Box';

export function Link<T extends As = 'a'>({ a, ...props }: BoxProps<T>) {
  return (
    <Box as="a" variant="a" {...props} __sx={{ mt: 1 }} __themeKey="styles" />
  );
}

// // 🎉 it works! fff fails
// const B = (props) => <Link fff />;
// // 🎉 it works! fff fails
// interface P {}
// const B2 = (props: P) => <Link {...props} fff className="ssdaf" />;
// // 🎉 it works! fff fails
// const B3 = ({ a, ...rest }) => <Link {...rest} fff sx={{ m: 1 }} />;
