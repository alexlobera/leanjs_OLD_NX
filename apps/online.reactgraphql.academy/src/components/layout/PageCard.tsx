import React from 'react';

import { Grid, Box, Card } from './';

export default function PageCard(props) {
  return (
    <Grid as={Card} columns={12} sx={{ p: 0 }}>
      <Box sx={{ gridColumn: ['1/ 12', '2  / -2'], pb: 8, pt: 8 }}>
        {props.children}
      </Box>
    </Grid>
  );
}
