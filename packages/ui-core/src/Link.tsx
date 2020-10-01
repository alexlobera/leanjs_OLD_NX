import React from 'react';
import { Box, BoxProps, As } from './Box';
// import { Link as RRLink } from 'react-router-dom';

export function Link<T extends As = 'a'>(props: BoxProps<T>) {
  return (
    <Box as="a" variant="a" {...props} __sx={{ mt: 1 }} __themeKey="styles" />
  );
}

// // 🎉 it works! fff fails
// const B = (props) => <Link fff />;
// // 🎉 it works! fff fails
// interface P {
//   a: boolean;
// }
// const B2 = (props: P) => <Link {...props} fff className="ssdaf" />;
// // 🎉 it works! fff fails
// //import { Link as RRLink } from 'react-router-dom';
// const B3 = ({ a, ...rest }: P) => <Link {...rest} as={RRLink} sx={{ m: 1 }} />;
