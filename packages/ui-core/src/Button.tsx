import React, { ReactNode, MouseEvent } from 'react';
import { Box, BoxProps, As } from './Box';

interface ButtonProps {
  // variant?: keyof typeof buttonVariantProps;
  loadingElement?: ReactNode;
  //   disabled?: boolean;
  //   type?: string;
  // onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const buttonDefaultSxProp = {
  py: 3,
  px: 6,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: 'light',
  borderRadius: 2,
  border: 0,
  textAlign: 'center' as AlignSetting, // is there a better way to fix the type here?
  fontSize: 2,
  letterSpacing: '0.6px',
};

// TODO add styles for disabled prop true
// export const buttonVariantProps = {
//   primary: {
//     color: 'inverseText',
//     bg: 'primary',
//     fontWeight: 'bold',
//   },
//   secondary: {
//     color: 'inverseText',
//     backgroundColor: 'secondary',
//   },
//   default: {
//     color: 'text',
//     bg: 'background',
//     boxShadow: 'thin',
//     border: '1px solid',
//     textShadow: 'bold',
//     borderColor: 'secondary',
//   },
// };

export const Button = function <T extends As = 'button'>(
  props: BoxProps<T, ButtonProps>
) {
  const {
    children,
    loadingElement,
    onClick,
    variant = 'default',
    as,
    type = 'button',
    ref,
    ...rest
  } = props;
  return (
    <Box
      type={as ? undefined : type}
      role={as ? 'button' : undefined}
      as={as || 'button'}
      __sx={{
        ...buttonDefaultSxProp,
        // ...(buttonVariantProps[variant] || {}),
        // ...sx,
      }}
      __themeKey="buttons"
      {...props}
      variant={variant}
      onClick={rest.disabled ? undefined : onClick}
      children={loadingElement ? loadingElement : children}
    />
  );
};

// // 🎉 works well, fff fails
// const B = (props) => <Button fff id="aad" onClick={(e) => {}} />;
// // ❌ this doesn't work since it doesnt fail when spreading {...props}
// interface F {
//     test: boolean
// }
// const B2 = (props: F) => <Button {...props} fff id="aad" onClick={(e) => {}} />;

Button.displayName = 'Button';
