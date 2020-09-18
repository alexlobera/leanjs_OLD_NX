import React from 'react';

import { Grid, Box } from '.';

const sheetVariantProps = {
  transparent: {
    bg: 'transparent',
    pb: 0,
    pt: 0,
  },
  default: {
    boxShadow: 'box',
    bg: 'background',
    pb: [4, 8],
    pt: [4, 8],
    px: [2, 0],
  },
};

export default function Sheet(props) {
  const variantSx = sheetVariantProps[props.variant || 'default'] || {};
  return (
    <Grid
      {...props}
      columns={12}
      sx={{
        ...variantSx,
        ...props.sx,
      }}
    >
      <Box sx={{ gridColumn: ['1/ -1', '1/ -1', '2  / -2'] }}>
        {props.children}
      </Box>
    </Grid>
  );
}
