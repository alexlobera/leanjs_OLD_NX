import React from 'react';
import styled from 'styled-components';

import Link from '../navigation/Link';
import { buttonVariantProps, buttonDefaultSxProp } from './Button';
import { ExternalLinkIcon, PdfDownload } from '../../components/icons';

// // TODOSX MOVE THIS TO SX DEFAULT PROP
const StyledLinkButton = styled(Link)`
  text-decoration: none;
`;
StyledLinkButton.displayName = 'StyledLinkButton';

const LinkButton = ({
  // trackUserBehaviour: trackUserBehaviourProp,
  children,
  variant = 'default',
  sx = {},
  ...rest
}) => (
  <StyledLinkButton
    role="button"
    sx={{
      ...buttonDefaultSxProp,
      display: 'inline-flex',
      ...(buttonVariantProps[variant] || {}),
      ...sx,
    }}
    {...rest}
  >
    {rest.pdf ? <PdfDownload sx={{ mr: 3 }} /> : null}
    {rest.external ? <ExternalLinkIcon sx={{ mr: 3 }} /> : null}
    {children}
  </StyledLinkButton>
);

export default React.memo(LinkButton);
