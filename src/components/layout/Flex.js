import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
  ${flexbox}
`
Flex.defaultProps = {
  display: 'flex',
}

export default Flex
