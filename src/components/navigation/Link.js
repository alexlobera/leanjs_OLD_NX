/* eslint no-restricted-globals: 0 */

import React from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'
import styled from 'styled-components'
import { Link as DefaultLinkScroll, scroller } from 'react-scroll'
import { FONT_FAMILY } from '../../config/styles'
import { GREY2 } from '../../config/styles'

export const DEFAULT_SCROLL_OFFSET = -125
export const DEFAULT_SCROLL_DURATION = 500

export const ANCHOR_STYLE = `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.5;
    color: ${GREY2};
    ${FONT_FAMILY}
`
const BasicLink = styled.a`
  ${ANCHOR_STYLE};
`
export const styleChildLinkColor = color => `
  a {
    color: ${color};
  }
  a:link {
    color: ${color};
  }
  a:visited {
    color: ${color};
  }
  a:hover {
    color: ${color};
  }
  a:active {
    color: ${color};
  }
`

const RouterLink = styled(GatsbyLink)`
  ${ANCHOR_STYLE};
`

export const LinkScroll = styled(({ to, ...rest }) => (
  <DefaultLinkScroll
    smooth
    duration={DEFAULT_SCROLL_DURATION}
    offset={DEFAULT_SCROLL_OFFSET}
    to={to && to.slice(1, to.length)}
    {...rest}
  />
))`
  ${ANCHOR_STYLE};
`
LinkScroll.displayName = 'LinkScroll'

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
      return (
        <BasicLink {...rest} target={target} href={toHref}>
          {children}
        </BasicLink>
      )
    } else if (toHref && toHref[0] === '#') {
      const { onClick, ...restLinkScrollProps } = rest

      return (
        <LinkScroll
          {...restLinkScrollProps}
          onClick={e => {
            e.preventDefault()
            navigate(toHref)
            onClick && onClick()
          }}
          to={toHref}
        >
          {children}
        </LinkScroll>
      )
    } else if (!to) {
      return <BasicLink {...rest}>{children}</BasicLink>
    } else {
      // this two attrs where causing an anoying error while developing...
      // GatsbyLink does not support strange props
      delete rest.variant

      // The destination URLs need to have trailing slashes for Gatsby prefetching to happen
      const dest =
        to.slice(-1) === '/' || to.indexOf('?') > -1 || to.indexOf('#') > -1
          ? to
          : to + '/'

      return (
        <RouterLink {...rest} to={dest}>
          {children}
        </RouterLink>
      )
    }
  }
}

export default Link
