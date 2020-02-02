import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
  ${({ theme, sx }) => flexbox({ display: 'flex', ...sx, theme })}
`
// const Flex = styled(Box)(({ theme, sx }) => flexbox({ theme, ...sx }))
// Flex.defaultProps = {
//   sx: {
//     display: 'flex',
//   },
// }

export default Flex
