import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { blue1, CALLTOACTIONRED, FONT_FAMILY, WHITE } from '../../config/styles'
import { DEFAULT_BUTTON_STYLE } from './Button'
import trackUserBehaviour, { CLICK_ON_CTA } from '../utils/trackUserBehaviour'
import { ExternalLinkIcon } from '../../components/icons'

const fontColor = color => `
  color: ${color} !important;
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
  }
`

const StyledLinkButton = styled(Link)`
svg {
  0.5rem;
}
${DEFAULT_BUTTON_STYLE}
${FONT_FAMILY}
  background-color: ${props => {
    if (props.secondary) {
      return WHITE
    } else if (props.cta) {
      return CALLTOACTIONRED
    } else {
      return blue1()
    }
  }};
  font-weight: ${props => (props.cta ? 800 : 400)};
  box-shadow: ${props =>
    props.secondary
      ? '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
      : '0 18px 29px -2px rgba(0, 0, 0, 0.26)'};
  ${props => (props.secondary ? fontColor(blue1()) : fontColor(WHITE))}
  border: ${props => props.secondary && `solid 1px ${blue1()}`};
  display: ${props => (props.block ? 'block' : 'inline-block')};
  text-decoration: none;
  ${props => (props.external && `
    justify-content: space-evenly;
  `)};
`

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  ...props
}) => (
  <StyledLinkButton
    {...props}
    onClick={e => {
      if (props.cta) {
        trackUserBehaviourProp({
          event: CLICK_ON_CTA,
          payload: {
            to: props.to || 'Not Provided',
          },
        })
      }
      props.onClick && props.onClick(e)
    }}
  >
    {props.external ? <ExternalLinkIcon style={{margin: '0.5rem 0.5rem 0.5rem 0'}} /> : null}
    {children}
  </StyledLinkButton>
)

LinkButton.propTypes = {
  trackUserBehaviour: PropTypes.func,
}

LinkButton.defaultProps = {
  trackUserBehaviour,
}

export default LinkButton
