import React from 'react';

import { Box, BoxProps, LeanComponent } from '../layout';

interface SectionProps extends BoxProps {
  top?: boolean;
}

const Section: LeanComponent<SectionProps> = (props) => {
  const { sx = {}, top } = props;
  return (
    <Box
      {...props}
      box="section"
      sx={{ ...(top ? { marginTop: '-50px' } : {}), ...sx }}
    />
  );
};

export default Section;
