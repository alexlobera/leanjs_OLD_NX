import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultProps,
} from './Button'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

const fontColor = css`
  ${props => {
    const color = props.color

    return `
    color: ${color};
    &:link {
      color: ${color} !important;
    }
    &:visited {
      color: ${color} !important;
    } 
    &:hover {
      color: ${color} !important;
    }
    &:active {
      color: ${color} !important;
    }`
  }}
`

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  ${defaultButtonStyle}
  ${props => props.external && 'justify-content: space-evenly;'};
  ${props => props.margin && 'margin-top: 2rem'}
  ${props =>
    props.pdf &&
    `
    svg {
      margin-right: 0.5rem
    }
    display: flex
    justify-content: space-evenly;
    align-items: center;
    `}
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
    {props.external ? (
      <ExternalLinkIcon style={{ marginRight: '1.5rem' }} />
    ) : null}
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
