import styled from 'styled-components'
import Box from '../layout/Box'

const Span = styled(Box)`
  ${props => props.lineThrough && `text-decoration: line-through`};
`
Span.defaultProps = {
  box: 'span',
}

export default Span
