import React, { useState } from 'react'
import styled from 'styled-components'
import { Field } from 'react-final-form'

import Label from '../text/Label'

const defaultSize = 2

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({
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
  height: ${props => (props.size ? props.size : defaultSize)}em;
  width: ${props => (props.size ? props.size : defaultSize)}em;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink; !important
  } // RM: focus needs to be fixed, it works with simple styled input
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`
const Span = styled.span`
  margin-left: 1em;
  align-self: center;
`

const Checkbox = ({ checked, type, input, ...props }) => {
  const onChange = e => {
    input && input.onChange && input.onChange(e)
    props.onChange && props.onChange(e)
  }

  return (
    <React.Fragment>
      <HiddenCheckbox {...props} checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </React.Fragment>
  )
}

export const CheckboxField = props => (
  <Field {...props} type="checkbox" component={Checkbox} />
)

const LabeledCheckboxField = props => {
  const [checked, setChecked] = useState(props.defaultValue || false)

  const handleCheckboxChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <React.Fragment>
      <Label flex>
        <CheckboxField
          {...props}
          className={props.className}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <Span>{props.label}</Span>
      </Label>
    </React.Fragment>
  )
}

export default LabeledCheckboxField
