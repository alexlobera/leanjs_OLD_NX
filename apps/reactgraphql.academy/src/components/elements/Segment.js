import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';
import { BROWN, WHITE, DARK_GREY } from '../../config/styles';
import { fontColor } from '../text';

const StyledSegment = styled(Box)`
  position: relative;
  ${({ variant, small }) => {
    const isImportant = !!small;
    switch (variant) {
      case 'primary':
        return `
          ${fontColor(WHITE, isImportant)}
        `;
      case 'secondary':
        return `
          ${fontColor(DARK_GREY, isImportant)}
        `;
      default:
        return '';
    }
  }}
`;

const Segment = ({ sx = {}, ...rest }) => {
  let smallProps = {};
  if (rest.small) {
    smallProps.pt = [0, 5];
    smallProps.pb = [0, 5];
    smallProps.pl = [1, 5];
    smallProps.pr = [1, 5];
  }

  return (
    <StyledSegment
      sx={{
        pt: [0, 7],
        pb: [0, 7],
        pl: 0,
        pr: 0,
        ...(segmentVariantProps[rest.variant] || {}),
        ...smallProps,
        ...sx,
      }}
      {...rest}
    />
  );
};

Segment.displayName = 'Segment';
Segment.defaultProps = {
  variant: 'secondary',
};

const segmentVariantProps = {
  primary: {
    pt: [2, 6],
    pb: [2, 6],
    backgroundColor: 'darkBackground',
    border: [null, `1px solid ${BROWN}`],
    borderColor: BROWN,
  },
  secondary: {
    backgroundColor: WHITE,
    boxShadow: [null, 'box'],
  },
};

export default Segment;
