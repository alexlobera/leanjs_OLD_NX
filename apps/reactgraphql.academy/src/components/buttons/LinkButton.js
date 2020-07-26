import React from 'react';

import Link from '../navigation/Link';
import { buttonDefaultSxProp } from './Button';
import { ExternalLinkIcon, PdfDownload } from '../../components/icons';

const buttonVariantProps = {
  primary: {
    color: 'lightText',
    bg: 'primary',
    fontWeight: 'bold',
  },
  secondary: {
    color: 'lightText',
    backgroundColor: 'secondary',
  },
  default: {
    color: 'text',
    bg: 'background',
    boxShadow: 'thin',
    border: '1px solid',
    textShadow: 'bold',
    borderColor: 'secondary',
  },
};

const LinkButton = ({ children, variant = 'default', sx = {}, ...rest }) => (
  <Link
    role="button"
    sx={{
      ...buttonDefaultSxProp,
      display: 'inline-flex',
      textDecoration: 'none',
      px: 4, // TODO REMOVE PX WHEN THE THEME SPACE KEY IS UPDATED WITH THE ONLINE THEME STANDARD
      py: 1, // TODO REMOVE PY WHEN THE THEME SPACE KEY IS UPDATED WITH THE ONLINE THEME STANDARD
      ...(buttonVariantProps[variant] || {}),
      ...sx,
    }}
    {...rest}
  >
    {rest.pdf ? <PdfDownload sx={{ mr: 3 }} /> : null}
    {rest.external ? <ExternalLinkIcon sx={{ mr: 3 }} /> : null}
    {children}
  </Link>
);

export default React.memo(LinkButton);
