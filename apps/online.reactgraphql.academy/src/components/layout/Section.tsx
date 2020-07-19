import React from 'react';

import { Box, BoxProps, LeanComponent } from '../layout';

// interface SectionProps extends BoxProps {
//   top?: boolean;
// }

const Section: LeanComponent = (props) => {
  const { sx = {}, top } = props;
  return <Box {...props} as="section" />;
};

export default Section;
