import React from 'react';
import { Box, LeanComponent } from './Box';

export const Section: LeanComponent = (props) => {
  const { sx = {}, variant } = props;

  return (
    <Box
      as="section"
      {...props}
      sx={{
        ...(variant
          ? { variant: `sections.${variant}` }
          : { pt: 7, pb: 7, display: 'block' }),
        ...sx,
      }}
    />
  );
};
