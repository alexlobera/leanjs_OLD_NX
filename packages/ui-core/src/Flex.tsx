import React from 'react';
import { Box, LeanComponent, LeanProps, As } from './Box';

// export function Flex<T extends As = 'div'>({ sx, ref, ...rest }: LeanProps<T>) {
//   return <Box sx={{ display: 'flex', ...sx }} {...rest} />;
// }

export const Flex: LeanComponent = (props) => {
  const { sx = {}, ref, ...rest } = props;
  return <Box {...props} sx={{ display: 'flex', ...sx }} />;
};

const B2: LeanComponent = ({ sx = {}, ...rest }) => (
  <Flex {...rest} id="dd" sx={{ display: 'flex', ...sx }} />
);
