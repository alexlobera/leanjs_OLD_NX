import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

import headingVariantProps, { HeadingVariantProps } from './headingVariant';
import Text, { textDefaultProps } from './Text';
import { BoxProps } from '../Layout/Box';

interface HeadingProps extends BoxProps {
  variant?: keyof HeadingVariantProps;
  exclamation?: boolean;
  children?: any;
}

type StyledHeadingProps = StyledComponentProps<any, {}, {}, any> &
  BoxProps &
  HeadingProps;

export const StyledHeading = styled(Text)<StyledHeadingProps>``;

StyledHeading.defaultProps = {
  ...textDefaultProps,
  fontSize: '2',
};

const Heading = ({ children, variant, ...props }: HeadingProps) => (
  <StyledHeading
    box={variant ? variant : undefined}
    variant={variant}
    {...(variant ? headingVariantProps[variant] : {})}
    {...props}
  >
    {children}
  </StyledHeading>
);

StyledHeading.displayName = 'StyledHeading';

export default Heading;
