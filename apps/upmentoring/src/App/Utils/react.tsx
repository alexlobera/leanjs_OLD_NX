import React from 'react';

export const addDefaultProps = (Component: any, defaultProps: any) =>
  React.forwardRef(({ children, ...rest }: any, ref: any) => (
    <Component {...defaultProps} {...rest} ref={ref}>
      {children}
    </Component>
  ));
