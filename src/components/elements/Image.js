import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import withLazyLoad from './withLazyLoad'
import {Box} from '@leanjs/academy-ui'

// const defaultProps = {
//   // TODOSX DO WE NEED THIS PROP?
//   //   sx: {
//   //     mt: 0,
//   //   },
//   box: 'img',
// }

const Image = withLazyLoad()(styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`)
Image.defaultProps = {
  box: 'img',
}

// const StyledImage = styled(Box)`
//   ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
//   ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
// `
// const Image = withLazyLoad()(props => <StyledImage box="img" {...props} />)

// const StyledGatsbyImage = styled(Box)``
const StyledGatsbyImage = props => <Box box={GatsbyImage} {...props} />
// StyledGatsbyImage.defaultProps = {
//   box: GatsbyImage,
// }

export default props => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage

  return <Component {...props} />
}
