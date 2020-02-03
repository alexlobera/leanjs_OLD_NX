import React from 'react'
import styled from 'styled-components'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultSxProp,
} from './Button'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

// TODOSX MOVE THIS TO SX DEFAULT PROP
const StyledLinkButton = styled(Link)`
  ${defaultButtonStyle}
  text-decoration: none;
`
StyledLinkButton.displayName = 'StyledLinkButton'

// const {
//   sx: buttonDefaultSxProp = {},
//   ...buttonDefaultRestProps
// } = buttonDefaultProps

// StyledLinkButton.defaultProps = {
//   ...buttonDefaultRestProps,
//   sx: {
//     ...sx,
//     display: 'inline-flex',
//     alignItems: 'center',
//   },
// }

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
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
      alignItems: 'center',
      ...(buttonVariantProps[variant] || {}),
      ...sx,
    }}
    {...rest}
  >
    {rest.pdf ? <PdfDownload sx={{ mr: 3 }} /> : null}
    {rest.external ? <ExternalLinkIcon sx={{ mr: 3 }} /> : null}
    {children}
  </StyledLinkButton>
)

// LinkButton.defaultProps = {
//   variant: 'default',
// }

export default React.memo(LinkButton)
