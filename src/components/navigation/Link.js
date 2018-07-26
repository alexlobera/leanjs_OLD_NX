import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
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

const RouterLink = styled(GatsbyLink)`
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
    return (
      <RouterLink {...rest} to={to}>
        {children}
      </RouterLink>
    )
  }
}

export default Link
