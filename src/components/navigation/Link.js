import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const ANCHOR_STYLE = `
    cursor: pointer;
    color: blue;
    text-decoration: underline;
`
const BasicLink = styled.a`
  ${ANCHOR_STYLE};
`

const RouterLink = styled(GatsbyLink)`
  ${ANCHOR_STYLE};
`

const Link = ({ to = '', children = '', target = '_self', ...rest }) => {
  if (to && to.match(/^(https:\/\/*|http:\/\/*)/)) {
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
