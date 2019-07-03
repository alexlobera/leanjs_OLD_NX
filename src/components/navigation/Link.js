/* eslint no-restricted-globals: 0 */

import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import { Link as DefaultLinkScroll, scroller } from 'react-scroll'
import { DARK_GREY } from '../../config/styles'
import Box from '../layout/Box'

export const DEFAULT_SCROLL_OFFSET = -125
export const DEFAULT_SCROLL_DURATION = 500

export const ANCHOR_STYLE = css`
  cursor: pointer;
  text-decoration: ${({ underline = true }) =>
    underline ? 'underline' : 'none'};
  text-shadow: 0px 0px 1px ${DARK_GREY};
`

const StyledLink = styled(Box)`
  ${ANCHOR_STYLE};
`

export const styleChildLinkColor = color => `
  a:not([role='button']) {
    color: ${color};
    text-shadow: 0px 0px 1px ${color};
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
  }
  
`

DefaultLinkScroll.defaultProps = {
  smooth: true,
  duration: DEFAULT_SCROLL_DURATION,
  offset: DEFAULT_SCROLL_OFFSET,
  box: DefaultLinkScroll,
}

class Link extends React.Component {
  componentDidMount() {
    const hash = location.hash.substr(1)
    if (hash && hash === this.props.name) {
      // adds smooth scrolling to anchor links
      setTimeout(() => {
        window.scrollTo(0, 0)
        scroller.scrollTo(hash, {
          smooth: true,
          duration: DEFAULT_SCROLL_DURATION,
          offset: DEFAULT_SCROLL_OFFSET,
        })
      }, 100)
    }
  }

  render() {
    const { to = '', children = '', ...rest } = this.props
    const toHref = to || rest.href
    if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
      const { target = '_blank' } = rest
      rest.rel = target === '_blank' ? 'noopener' : undefined
      return (
        <StyledLink {...rest} box="a" target={target} href={toHref}>
          {children}
        </StyledLink>
      )
    } else if (toHref && toHref[0] === '#') {
      const { onClick, ...restLinkScrollProps } = rest

      return (
        <StyledLink
          {...restLinkScrollProps}
          onClick={e => {
            onClick && onClick()
          }}
          to={toHref.substr(1)}
          box={DefaultLinkScroll}
        >
          {children}
        </StyledLink>
      )
    } else if (!toHref) {
      return (
        <StyledLink {...rest} box="a">
          {children}
        </StyledLink>
      )
    } else {
      // this two attrs where causing an anoying error while developing...
      // GatsbyLink does not support strange props
      delete rest.variant

      // The destination URLs need to have trailing slashes for Gatsby prefetching to happen
      const dest =
        toHref.slice(-1) === '/' ||
        toHref.indexOf('?') > -1 ||
        toHref.indexOf('#') > -1
          ? toHref
          : toHref + '/'

      return (
        <StyledLink {...rest} to={dest} box={GatsbyLink}>
          {children}
        </StyledLink>
      )
    }
  }
}

export default Link
