import React from 'react';

// import { fontColor } from '../text';
import { getVariantProps } from './utils';
import { Box, LeanProps, As } from './Box';

const defaultPadding = {
  pl: [1, 4],
  pr: [1, 4],
  pt: [1, 4],
  pb: [1, 4],
};

const cardVariants = ({
  borderColor = 'react',
  borderStyle = 'solid',
} = {}) => ({
  primary: {
    border: `3px ${borderStyle}`,
    borderColor: borderColor,
    ...defaultPadding,
  },
  secondary: {
    borderLeft: `3px ${borderStyle}`,
    borderLeftColor: borderColor,
    pl: [2, 4],
  },
  default: {
    boxShadow: 'box',
    backgroundColor: 'background',
    ...defaultPadding,
  },
});

// const StyledCard = styled(Box)`
//   ${({ theme = {} }) =>
//     fontColor(theme.colors ? theme.colors.text : undefined, true)}
// `;

export function Card<T extends As = 'div'>(props: LeanProps) {
  // function Card <T extends As = 'div'> ({ borderColor, borderStyle, sx = {}, children, ...rest }) => {
  //   let smallSxProps = {};
  //   if (rest.small) {
  //     smallSxProps.pt = [1, 3];
  //     smallSxProps.pb = [1, 3];
  //     smallSxProps.pl = [1, 3];
  //     smallSxProps.pr = [1, 3];
  //   }
  // const { borderColor, borderxStyle, sx = {}, ...rest } = props;

  return (
    <Box
      {...props}
      // {...rest} // replace {...props} with {...rest} when TS is fixed
      sx={{
        position: 'relative',
        ...getVariantProps(
          props.variant || 'default',
          // cardVariants({ borderColor, borderStyle })
          cardVariants()
        ),
        ...(props.sx || {}),
      }}
    />
  );
}

Card.displayName = 'Card';

export default React.memo(Card);
