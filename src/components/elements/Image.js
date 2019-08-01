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

export default withLazyLoad()(Image)
