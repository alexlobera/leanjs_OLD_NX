import styled from 'styled-components'

import Box from '../layout/Box'

const P = styled(Box)`
  text-align: ${props => props.align || 'left'};
  ${props => props.small && `font-size 0.9rem`};
  > a {
    ${props => props.small && `font-size 0.9rem`};
  }
`
P.defaultProps = {
  m: 0,
  lineHeight: 2,
  pb: 3,
  box: 'p',
}

export default P
