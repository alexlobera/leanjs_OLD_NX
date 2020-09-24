import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  FontFamilyProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  order,
  OrderProps,
  alignSelf,
  AlignSelfProps,
  alignItems,
  AlignItemsProps,
  borderColor,
  BorderColorProps,
  border,
  BorderProps,
  borderRight,
  BorderRightProps,
  borderLeft,
  BorderLeftProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  letterSpacing,
  LetterSpacingProps,
  maxWidth,
  MaxWidthProps,
  display,
  DisplayProps,
} from 'styled-system';

import { themed } from '../../Utils';
import { fontFamily } from '../../Config/theme';

export type BoxProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  FontFamilyProps &
  ColorProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  AlignItemsProps &
  BorderColorProps &
  BorderProps &
  BorderRightProps &
  BorderLeftProps &
  TextAlignProps &
  LineHeightProps &
  LetterSpacingProps &
  DisplayProps &
  MaxWidthProps & {
    children?: ReactNode;
    box?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  };

const Primitive = (props: any) => {
  const C = props.as || 'div';
  const filteredProps = Object.keys(props).reduce(
    (accProps: any, key: string) => {
      if (key.slice(-1) !== '$') {
        accProps[key] = props[key];
      }
      return accProps;
    },
    {},
  );

  return <C {...filteredProps} />;
};

export const StyledBox = styled(Primitive)<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  space,
  width,
  fontSize,
  fontFamily,
  color,
  flex,
  order,
  alignSelf,
  alignItems,
  borderColor,
  border,
  borderRight,
  borderLeft,
  textAlign,
  lineHeight,
  letterSpacing,
  maxWidth,
  display,
  themed('Box'),
);

// TODO type properly this component
const Box = React.forwardRef(({ children, ...rest }: any, ref: any) => {
  const props = {
    ...rest,
    as: rest.box || rest.as || rest.undefined,
  };

  return (
    <StyledBox {...props} ref={ref}>
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';
Box.defaultProps = {
  fontFamily$: 'serif',
};

export default Box;
