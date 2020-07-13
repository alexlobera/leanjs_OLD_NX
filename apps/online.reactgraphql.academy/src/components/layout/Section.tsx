import React, { FunctionComponent } from 'react';

import { Box, BoxProps } from '../layout';

interface SectionProps extends BoxProps {
  top?: boolean;
}

const Section: FunctionComponent<SectionProps> = ({
  sx = {},
  top,
  ...rest
}) => {
  return (
    <Box
      box="section"
      sx={{ ...(top ? { marginTop: '-50px' } : {}), ...sx }}
      {...rest}
    />
  );
};

export default Section;
