import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { typography, shadow } from 'styled-system'

import Link from '../navigation/Link'
import {
  defaultButtonStyle,
  buttonVariantProps,
  buttonDefaultProps,
} from './Button'
// Richard are we using this trackUserBehaviourProp on Google Analytics or Google Tag Manager?
// import trackUserBehaviour, { CLICK_ON_CTA } from '../utils/trackUserBehaviour'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

const fontColor = css`
  ${props => {
    const color = props.color

    return `
    // color:${color} !important;
    text-shadow: 0px 0px 1px ${color} !important;
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
  ${fontColor}
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
  ${typography}
  ${shadow}
`

StyledLinkButton.displayName = 'StyledLinkButton'

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  variant,
  ...props
}) => (
  <StyledLinkButton
    {...props}
    {...(variant ? buttonVariantProps[variant] : {})}
    // Richard are we using this trackUserBehaviourProp on Google Analytics or Google Tag Manager?
    // onClick={e => {
    //   if (props.variant === 'primary') {
    //     trackUserBehaviourProp({
    //       event: CLICK_ON_CTA,
    //       payload: {
    //         to: props.to || 'Not Provided',
    //       },
    //     })
    //   }
    //   props.onClick && props.onClick(e)
    // }}
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
  // Richard are we using this trackUserBehaviourProp on Google Analytics or Google Tag Manager?
  // trackUserBehaviour,
  ...buttonDefaultProps,
}

export default LinkButton
