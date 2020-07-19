import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as LeanLink, LeanProps, As } from '@leanjs/ui-core';

interface Link {
  to: string;
}

function Link<T extends As = 'a'>(props: LeanProps<T, Link>) {
  return <LeanLink as={GatsbyLink} {...props} />;
}

export default Link;
