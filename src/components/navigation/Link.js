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

const Link = props =>
  props.to ? <RouterLink {...props} /> : <BasicLink {...props} />

export default Link
