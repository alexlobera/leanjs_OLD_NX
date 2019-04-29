import React, { useState } from 'react'
import styled from 'styled-components'

import FieldInput from './FieldInput'
import Label from '../text/Label'
const defaultSize = 2

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`
const HiddenCheckbox = styled(FieldInput).attrs({
  type: 'checkbox',
})`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const StyledCheckbox = styled.div`
  border: 1px solid black;
    margin: 1em 0;
  height: ${props => (props.size ? props.size : defaultSize)}em;
  width: ${props => (props.size ? props.size : defaultSize)}em;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink; !important
  }
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`
const LabelText = styled.span`
  margin-left: 1em;
  align-self: center;
`

const Checkbox = ({ className, checked, label, ...props }) => (
  <React.Fragment>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} label={label}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </React.Fragment>
)

const CheckBoxContainer = props => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = event => setChecked(event.target.checked)

  return (
    <React.Fragment>
      <Label flex>
        <Checkbox
          {...props}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <LabelText>{props.label}</LabelText>
      </Label>
    </React.Fragment>
  )
}

export default CheckBoxContainer
