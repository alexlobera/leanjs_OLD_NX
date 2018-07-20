import React from 'react'
import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { BLUE2, CALLTOACTIONRED } from '../../styles'

const StyleButtonFontSize = props => {
  if (props.extraLarge) {
    return 20
  } else if (props.large) {
    return 16
  } else {
    return 12
  }
}

export default styled(({ extraLarge, large, ...props }) => (
  <Button {...props} />
))`
  font-size: ${StyleButtonFontSize}px;
  background-color: ${props => (props.cta ? CALLTOACTIONRED : BLUE2)}
  width: 280px;
  height: 55px;
  border-radius: 0;
  font-family: Barlow;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
`

export const ButtonSecondary = styled(({ extraLarge, large, ...props }) => (
  <ButtonOutline {...props} />
))`
  font-size: ${StyleButtonFontSize}px;
`
