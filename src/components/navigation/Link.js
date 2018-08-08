import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import { Link as DefaultLinkScroll } from 'react-scroll'
import { FONT_FAMILY } from '../../config/styles'
import { GREY2 } from '../../config/styles'

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

export const LinkScroll = styled(DefaultLinkScroll)`
  ${ANCHOR_STYLE};
`

const Link = ({ to = '', children = '', ...rest }) => {
  if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
    const { target = '_blank' } = rest
    return (
      <BasicLink {...rest} target={target} href={to}>
        {children}
      </BasicLink>
    )
  } else if (to && to[0] === '#') {
    return (
      <BasicLink href={to} {...rest}>
        {children}
      </BasicLink>
    )
  } else if (!to) {
    return <BasicLink {...rest}>{children}</BasicLink>
  } else {
    // this two attrs where causing an anoying error while developing...
    // GatsbyLink does not support strange props
    delete rest.cta
    delete rest.secondary
    return (
      <RouterLink {...rest} to={to}>
        {children}
      </RouterLink>
    )
  }
}

export default Link
