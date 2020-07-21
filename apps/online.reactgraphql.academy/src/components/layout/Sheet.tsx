import React from 'react';

import { Grid, Box, Card } from '.';

export default function Sheet(props) {
  return (
    <Grid as={Card} columns={12} sx={{ p: 0 }}>
      <Box sx={{ gridColumn: ['1/ -1', '1/ -1', '2  / -2'], pb: 8, pt: 8 }}>
        {props.children}
      </Box>
    </Grid>
  );
}
