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
  margin: 1em 0;
  border: 1px solid black;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')}
  height: ${props => (props.size ? props.size : defaultSize)}em;
  width: ${props => (props.size ? props.size : defaultSize)}em;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink; !important
  } // RM: focus needs to be fixed, it works with simple styled input
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`
const LabelText = styled.span`
  margin-left: 1em;
  align-self: center;
`

const Checkbox = ({ checked, label, ...props }) => (
  <React.Fragment>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} label={label} {...props}>
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
          className={props.className}
          checked={checked}
          onChange={handleCheckboxChange}
          {...props}
        />
        <LabelText>{props.label}</LabelText>
      </Label>
    </React.Fragment>
  )
}

export default CheckBoxContainer
