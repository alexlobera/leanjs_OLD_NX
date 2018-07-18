import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'

const StyleButtonFontSize = props => {
  if (props.extraLarge) {
    return 20
  } else if (props.large) {
    return 16
  } else {
    return 12
  }
}

export default styled(Button)`
  font-size: ${StyleButtonFontSize}px;
`
export const ButtonSecondary = styled(ButtonOutline)`
  font-size: ${StyleButtonFontSize}px;
`
