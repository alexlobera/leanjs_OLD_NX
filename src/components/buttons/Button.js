import { Button } from 'rebass'
import styled from 'styled-components'

export default styled(Button)`
  font-size: ${props => {
    if (props.extraLarge) {
      return 20
    } else if (props.large) {
      return 16
    } else {
      return 12
    }
  }}px;
`
