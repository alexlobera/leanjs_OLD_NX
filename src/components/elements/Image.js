import PropTypes from 'prop-types'
import styled from 'styled-components'

import withLazyLoad from './withLazyLoad'
import Box from '../layout/Box'

const Image = styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`
Image.defaultProps = {
  mt: 0,
  box: 'img',
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  circle: PropTypes.bool,
}

export default withLazyLoad()(Image)
