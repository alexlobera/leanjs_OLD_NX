import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultProps,
} from './Button'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

const StyledLinkButton = styled(Link)`
  ${defaultButtonStyle}
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`

StyledLinkButton.displayName = 'StyledLinkButton'

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  variant,
  ...props
}) => (
  <StyledLinkButton
    role="button"
    {...props}
    {...(variant ? buttonVariantProps[variant] : {})}
  >
    {props.pdf ? <PdfDownload /> : null}
    {props.external ? <ExternalLinkIcon mr={3} /> : null}
    {children}
  </StyledLinkButton>
)

LinkButton.propTypes = {
  variant: PropTypes.string,
}

LinkButton.defaultProps = {
  ...buttonDefaultProps,
}

export default LinkButton
