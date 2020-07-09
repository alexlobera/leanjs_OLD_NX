import React from 'react';
import { Form as StateForm } from 'react-final-form';
import { Config } from 'final-form';
import { Box, BoxProps } from '@leanjs/ui-core';

export * from './validators';
export { Field } from 'react-final-form';

interface AnyObject {
  [key: string]: any;
}

interface ExtendedBoxProps {
  onSubmit: Config['onSubmit'];
  autoComplete?: 'on' | 'off';
  noValidate?: boolean;
  name?: string;
}

interface FormProps<FormValues = AnyObject>
  extends BoxProps,
    ExtendedBoxProps,
    Config {
  children?: (props: FormValues) => React.ReactNode;
  render?: (props: FormValues) => React.ReactNode;
}

export const Form = ({
  children,
  render,
  autoComplete,
  noValidate,
  name,
  sx,
  ...rest
}: FormProps) => {
  const renderProp = render || children;

  return (
    <StateForm
      {...rest}
      render={({ handleSubmit, ...renderRest }) => (
        <Box
          autoComplete={autoComplete}
          noValidate={noValidate}
          sx={sx}
          as="form"
          name={name}
          onSubmit={handleSubmit}
        >
          {renderProp(renderRest)}
        </Box>
      )}
    />
  );
};
