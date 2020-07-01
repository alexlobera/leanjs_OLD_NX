import React from 'react';
import { css } from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';

const Flex = ({ sx = {}, ...rest }) => (
  <Box
    css={css`
      ${({ theme, sx }) => flexbox({ theme, ...sx })}
    `}
    sx={{ display: 'flex', ...sx }}
    {...rest}
  />
);

export default React.memo(Flex);
