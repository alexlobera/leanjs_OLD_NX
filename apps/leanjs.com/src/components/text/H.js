import React from 'react';
import styled from 'styled-components';
import {
  FONT_FAMILY,
  FONT_SIZE_STANDARD,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LOWERQUARTILE,
  SPACING_SMALL,
  SPACING_MEDIUM,
  FONT_WEIGHT_STANDARD,
  FONT_WEIGHT_MEDIUMBOLD,
  FONT_WEIGHT_BOLD,
  LINE_HEIGHT_EXTRALARGE,
} from '../../config/styles';

import P from './P';

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
export const H1 = styled.h1`
  ${FONT_FAMILY};
  line-height: 1.4;
`;

export const H1Ref = styled(H1)`
  ${REF};
`;

export const H2 = styled.h2`
  ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin-bottom: ${SPACING_MEDIUM};
  font-size: ${FONT_SIZE_LARGE};
  line-height: ${LINE_HEIGHT_EXTRALARGE};
  a {
    font-size: ${FONT_SIZE_LARGE};
  }
`;

export const H2Ref = styled(H2)`
  ${REF};
`;

export const H2a = styled(H2)`
  font-size: ${FONT_SIZE_MEDIUM};
`;

export const H3 = styled.h3`
  ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_MEDIUMBOLD};
  font-size: ${FONT_SIZE_STANDARD};
  a {
    font-size: ${FONT_SIZE_LARGE};
  }
`;
export const H3a = styled.h3`
  ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: ${FONT_SIZE_LOWERQUARTILE};
  line-height: 30px;
`;

export const H3Ref = styled(H3)`
  ${REF};
`;

export const H4 = styled.h4`
  ${FONT_FAMILY};
  font-size: ${FONT_SIZE_STANDARD};
  font-weight: ${FONT_WEIGHT_MEDIUMBOLD};
`;

export const H4Ref = styled(H4)`
  ${REF};
`;

export const H5 = styled.h5`
  ${FONT_FAMILY};
  font-size: ${FONT_SIZE_STANDARD};
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const H5Ref = styled(H5)`
  ${REF};
`;

export const H5a = styled(H5)`
  margin-bottom: ${SPACING_SMALL};
`;

export const SupportingText = styled.div`
  font-size: 22px !important;
  line-height: 2rem;
  ${FONT_FAMILY}
  padding-bottom: 18px;
`;
