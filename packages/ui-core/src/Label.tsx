import React from 'react';
import { Box, LeanProps, As } from './Box';

// import { Flex } from './Flex';

export function Label<T extends As>(props: LeanProps<T>) {
  return <Box as="label" {...props} />;
}

// export function FlexLabel<T extends As>(props: LeanProps<T>) {
//   return <Flex box="label" {...props} />;
// }

export default Label;
