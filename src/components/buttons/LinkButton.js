import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from '../navigation/Link'
import { defaultButtonStyle } from './Button'
import trackUserBehaviour, { CLICK_ON_CTA } from '../utils/trackUserBehaviour'
import { ExternalLinkIcon, PdfDownload } from '../../components/icons'

function getColorFromProps(props) {
  const { variant, theme } = props
  if (!theme || !theme.buttons) {
    return
  }
  const { color } = props.theme.buttons[variant]
  return color
}

const fontColor = css`
  ${props => {
    const color = getColorFromProps(props)

    return `
    color:${color} !important;
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
  ${props => defaultButtonStyle(getColorFromProps(props))}
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
`

StyledLinkButton.displayName = 'StyledLinkButton'

const LinkButton = ({
  trackUserBehaviour: trackUserBehaviourProp,
  children,
  ...props
}) => (
  <StyledLinkButton
    {...props}
    onClick={e => {
      if (props.variant === 'primary') {
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
    {props.pdf ? <PdfDownload /> : null}
    {props.external ? (
      <ExternalLinkIcon style={{ marginRight: '1.5rem' }} />
    ) : null}
    {children}
  </StyledLinkButton>
)

LinkButton.propTypes = {
  trackUserBehaviour: PropTypes.func,
  variant: PropTypes.string,
}

LinkButton.defaultProps = {
  trackUserBehaviour,
  variant: 'default',
}

export default LinkButton
