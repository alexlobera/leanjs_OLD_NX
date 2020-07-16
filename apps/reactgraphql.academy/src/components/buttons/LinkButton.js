import React from 'react';

import Link from '../navigation/Link';
import { buttonVariantProps, buttonDefaultSxProp } from './Button';
import { ExternalLinkIcon, PdfDownload } from '../../components/icons';

const LinkButton = ({ children, variant = 'default', sx = {}, ...rest }) => (
  <Link
    role="button"
    sx={{
      ...buttonDefaultSxProp,
      display: 'inline-flex',
      textDecoration: 'none',
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
