import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as LeanLink, LeanProps, As } from '@leanjs/ui-core';

interface Link {
  to: string;
}

function Link<T extends As = 'a'>(props: LeanProps<T, Link>) {
  const { sx = {} } = props;
  return (
    <LeanLink
      as={GatsbyLink}
      to={props.to}
      children={props.children}
      sx={{ ...sx, mt: 0 }}
    />
  );
}

export default Link;
