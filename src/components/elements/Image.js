import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import withLazyLoad from './withLazyLoad'
import Box from '../layout/Box'

const defaultProps = {
  sx: {
    mt: 0,
  },
  box: 'img',
}

const Image = withLazyLoad()(styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`)
Image.defaultProps = defaultProps

const StyledGatsbyImage = styled(Box)``
StyledGatsbyImage.defaultProps = {
  ...defaultProps,
  box: GatsbyImage,
}

export default props => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage

  return <Component {...props} />
}
