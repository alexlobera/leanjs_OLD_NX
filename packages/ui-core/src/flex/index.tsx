import React from 'react';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
// import { Box } from '@leanjs/ui-core';
import { Box } from '../box';

const Flex = styled(Box)`
  ${({ theme, sx }) => flexbox({ theme, ...sx })}
`;
Flex.defaultProps = {
  sx: { display: 'flex' },
};
Flex.displayName = 'Flex';

export default React.memo(Flex);
