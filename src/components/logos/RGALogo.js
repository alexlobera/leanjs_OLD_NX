import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import './RGALogo.css'
import Box from '../layout/Box'

const RGALogo = ({ className, ...rest }) => (
  <Link
    {...rest}
    className={`${className} navigation`}
    to="/"
    title="React GraphQL Academy"
  >
    <div className="rga-logo" />
  </Link>
)

const StyledLogo = styled(Box)``
StyledLogo.defaultProps = {
  box: RGALogo,
}

export default StyledLogo
