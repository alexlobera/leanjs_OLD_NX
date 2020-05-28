import React from "react";
import { Form as StateForm } from "react-final-form";
import { Config } from "final-form";
import Box, { BoxProps } from "@leanui/box";

export * from "./validators";
export { Field } from "react-final-form";

interface AnyObject {
  [key: string]: any;
}

interface FormProps<FormValues = AnyObject> extends BoxProps, Config {
  children: (props: FormValues) => React.ReactNode;
}

interface ExtendedBoxProps {
  onSubmit: Config["onSubmit"];
}

const Form = ({ children, ...rest }: FormProps) => {
  return (
    <StateForm
      {...rest}
      render={({ handleSubmit, ...renderRest }) => (
        <Box<ExtendedBoxProps> box="form" onSubmit={handleSubmit}>
          {children(renderRest)}
        </Box>
      )}
    />
  );
};

export default React.memo(Form);
