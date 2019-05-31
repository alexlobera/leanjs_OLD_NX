import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'

const SvgLogo = () => <div className="rga-logo" />

const LinkLogo = styled(Link)`
  width: 160px;
  display: inline-block;
  text-decoration: none;

  svg {
    width: 100%;
  }
`

export const RGALogo = () => (
  <LinkLogo to="/" title="React GraphQL Academy">
    <SvgLogo />
  </LinkLogo>
)
