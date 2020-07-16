import React from 'react';
import styled from 'styled-components';

import { StyledBox } from '../layout/Box';

const fontSize = ({ fontSize }) => ({ theme: { fontSizes = [] } = {} }) =>
  `font-size: ${fontSizes[fontSize]};`;

const REF = `
  :hover {
    a {
      visibility: visible;
      cursor: pointer;
    }
  }
  a {
    visibility: hidden;
  }
`;

export const H1 = ({ sx = {}, ...rest }) => (
  <StyledBox
    sx={{
      fontWeight: 'bold',
      fontSize: 8,
      mt: 0,
      ...sx,
    }}
    as="h1"
    {...rest}
  />
);

export const H1Ref = styled(H1)`
  ${REF};
`;

const StyledH2 = styled(StyledBox)`
  :first-child {
    padding-top: 0;
  }
  a {
    ${fontSize({ fontSize: 6 })}
  }
`;
export const H2 = ({ sx = {}, ...rest }) => (
  <StyledH2
    sx={{
      fontWeight: 'bold',
      lineHeight: 6,
      fontSize: 6,
      mt: 0,
      mb: 5,
      pt: 5,
      ...sx,
    }}
    box="h2"
    {...rest}
  />
);

export const H2Ref = styled(H2)`
  ${REF};
`;

const StyledH3 = styled(StyledBox)`
  a {
    ${fontSize({ fontSize: 4 })}
  }
  :first-child {
    margin-top: 0;
  }
`;
export const H3 = ({ sx = {}, ...rest }) => (
  <StyledH3
    sx={{ fontSize: 5, mt: 4, lineHeight: 4, ...sx }}
    box="h3"
    {...rest}
  />
);

export const H3Ref = styled(H3)`
  ${REF};
`;

const StyledH4 = styled(StyledBox)`
  :first-child {
    margin-top: 0;
  }
`;
export const H4 = ({ sx = {}, ...rest }) => (
  <StyledH4
    sx={{
      fontSize: 4,
      lineHeight: 3,
      mt: 3,
      fontWeight: 'bold',
      ...sx,
    }}
    box="h4"
    {...rest}
  />
);

export const H4Ref = styled(H4)`
  ${REF};
`;

export const H5 = ({ sx = {}, ...rest }) => (
  <StyledBox
    sx={{
      fontSize: 2,
      lineHeight: 1,
      pt: 2,
      fontWeight: 'bold',
      ...sx,
    }}
    as="h5"
    {...rest}
  />
);

export const H5Ref = styled(H5)`
  ${REF};
`;
