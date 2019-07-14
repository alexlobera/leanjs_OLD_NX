import styled from 'styled-components'

import { PINK } from '../../config/styles'
import Box from '../layout/Box'

const Alert = styled(Box)`
  ${props => (props.danger ? `background-color: ${PINK};` : null)}
`
Alert.defaultProps = {
  my: 1,
  pl: 1,
  pr: 1,
  py: 3,
}

export default Alert
