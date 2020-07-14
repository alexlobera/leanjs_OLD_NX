import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as LeanLink, LeanProps, As } from '@leanjs/ui-core';

interface Link {
  to: string;
}

function Link<T extends As = 'a'>({ to, ...rest }: LeanProps<T, Link>) {
  return <LeanLink to={to} as={GatsbyLink} {...rest} />;
}

export default Link;
