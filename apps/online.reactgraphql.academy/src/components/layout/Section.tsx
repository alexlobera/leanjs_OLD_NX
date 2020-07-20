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
      sx={{
        ...(top
          ? {
              pt: 0,
              mt: '-50px',
            }
          : { pt: 7 }),
        pb: 7,
        display: 'block',
        ...sx,
      }}
      as="section"
    />
  );
};

export default Section;
