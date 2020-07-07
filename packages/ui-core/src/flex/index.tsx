import React from 'react';
// import styled from 'styled-components';
// import { flexbox } from '@styled-system/flexbox';
import { Box } from '../box';

// const Flex = styled(Box)`
//   background-color: red;
// `;
// Flex.defaultProps = {
//   sx: { display: 'flex' },
// };
// Flex.displayName = 'Flex';

const Flex = ({ sx, ...rest }) => (
  <Box sx={{ display: 'flex', ...sx }} {...rest} />
);

export default React.memo(Flex);
