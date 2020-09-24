import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  maxWidth,
  fontSize,
  space,
  SpaceProps,
} from 'styled-system';

import Box, { BoxProps } from '../Layout/Box';
import { themed } from '../../Utils';
import { Props } from '../../Types/React';

export interface TextProps extends Props, SpaceProps, BoxProps {
  fontFamily?: string;
  color?: string;
  fontWeight?: string;
  lineHeight?: number;
  maxWidth?: string;
  fontSize?: number;
  variant?: string;
  letterSpacing?: string;
  center?: boolean;
}

export const StyledText = styled(Box)<TextProps>(
  space,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  maxWidth,
  fontSize,
  themed('Text'),
  ({ center }) => center && `text-align:center;`,
);

export const textDefaultProps = {
  fontFamily: 'serif',
  color: 'GREY_DARK',
  fontWeight: 'normal',

  lineHeight: 1,
  maxWidth: 'full',
  fontSize: 4,
};

StyledText.defaultProps = textDefaultProps;

export default StyledText;
