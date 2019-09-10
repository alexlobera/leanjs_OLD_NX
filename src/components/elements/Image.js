import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import withLazyLoad from './withLazyLoad'
import Box from '../layout/Box'

const Image = withLazyLoad()(styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`)

Image.defaultProps = {
  mt: 0,
  box: 'img',
}

export default props => {
  const Component = !(props.fluid || props.fixed) ? Image : GatsbyImage

  return <Component {...props} />
}
