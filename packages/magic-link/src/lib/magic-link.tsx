import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MagicLinkProps {}

const StyledMagicLink = styled.div`
  color: pink;
`;

export const MagicLink = (props: MagicLinkProps) => {
  return (
    <StyledMagicLink>
      <h1>Welcome to magic-link!</h1>
    </StyledMagicLink>
  );
};

export default MagicLink;
