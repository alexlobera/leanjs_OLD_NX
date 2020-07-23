import React from 'react';
import { Link } from '@leanjs/ui-link';
import { Button } from '../form';

export const LinkButton = (props) => (
  <Button
    as={Link}
    {...props}
    sx={{ ...(props.sx || {}), textDecoration: 'none' }}
  />
);

export default Link;
