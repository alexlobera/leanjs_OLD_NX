import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Link as DefaultLinkScroll } from 'react-scroll'
import { FONT_FAMILY } from '../../config/styles'
import { GREY2 } from '../../config/styles'

export const DEFAULT_SCROLL_OFFSET = -125

export const ANCHOR_STYLE = `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    font-size: 18px;
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

export const LinkScroll = styled(({ to, secondary, ...rest }) => (
  <DefaultLinkScroll
    smooth
    duration={500}
    offset={DEFAULT_SCROLL_OFFSET}
    to={to && to.slice(1, to.length)}
    {...rest}
  />
))`
  ${ANCHOR_STYLE};
`
LinkScroll.displayName = 'LinkScroll'

const Link = ({ to = '', children = '', ...rest }) => {
  const toHref = to || rest.href
  if (toHref && toHref.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = rest
    return (
      <BasicLink {...rest} target={target} href={toHref}>
        {children}
      </BasicLink>
    )
  } else if (to && to[0] === '#') {
    const { onClick, ...restLinkScrollProps } = rest

    return (
      <Route
        render={({ history }) => (
          <LinkScroll
            {...restLinkScrollProps}
            onClick={() => {
              history.push(to)
              onClick && onClick()
            }}
            to={to}
          >
            {children}
          </LinkScroll>
        )}
      />
    )
  } else if (!to) {
    return <BasicLink {...rest}>{children}</BasicLink>
  } else {
    // this two attrs where causing an anoying error while developing...
    // GatsbyLink does not support strange props
    delete rest.cta
    delete rest.secondary

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

export default Link
