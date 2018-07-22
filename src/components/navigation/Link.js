import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles'

const ANCHOR_STYLE = `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
`
const BasicLink = styled.a`
  ${ANCHOR_STYLE} ${FONT_FAMILY};
`

const RouterLink = styled(GatsbyLink)`
  ${ANCHOR_STYLE};
`

const Link = ({ to = '', children = '', target = '_blank', ...rest }) => {
  if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
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
