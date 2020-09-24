import React from 'react';
import styled from 'styled-components';
import {
  Table,
  Thead,
  Tbody,
  Tr as ResponsiveTr,
  Th as ResponsiveTh,
  Td as ResponsiveTd,
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { fontFamily, lineHeight, fontWeight } from 'styled-system';

const withoutStyledProps = (Component) => ({
  fontFamily,
  lineHeight,
  fontWeight,
  ...rest
}) => <Component {...rest} />;

const Tr = styled(withoutStyledProps(ResponsiveTr))`
  ${fontFamily}
`;

const Th = styled(withoutStyledProps(ResponsiveTh))`
  ${fontFamily}
`;

const Td = styled(withoutStyledProps(ResponsiveTd))`
  ${fontWeight};
  ${lineHeight};
  ${fontFamily}
`;
const baseProps = { fontFamily: 'serif', lineHeight: 2, fontWeight: 'normal' };

Tr.defaultProps = baseProps;
Td.defaultProps = baseProps;
Th.defaultProps = baseProps;

export { Table, Thead, Tbody, Tr, Th, Td };
