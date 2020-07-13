import React, { FunctionComponent } from 'react';
import { Box, BoxProps } from './Box';

export interface LinkProps extends BoxProps {}

export const Link: FunctionComponent<
  LinkProps & React.HTMLProps<HTMLLinkElement>
> = ({ sx, as = 'a', ...rest }) => (
  <Box variant="a" __themeKey="styles" as={as} sx={sx} {...rest} />
);
