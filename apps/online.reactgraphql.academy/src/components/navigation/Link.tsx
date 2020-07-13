import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as LeanLink, LinkProps } from '@leanjs/ui-core';

const Link = ({ sx, ...rest }: LinkProps) => (
  <LeanLink to="" as={GatsbyLink} sx={sx} {...rest} />
);

export default Link;
