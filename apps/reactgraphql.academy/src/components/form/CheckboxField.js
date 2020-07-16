import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { DARK_GREY } from '../../config/styles';
import { FlexLabel } from '../text/Label';
import Flex from '../layout/Flex';

const defaultSize = 2;

const Icon = styled.svg`
  fill: none;
  stroke: ${({ color = DARK_GREY }) => color};
  stroke-width: 2px;
  width: 34px;
`;
const HiddenCheckbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  margin: 0.4rem 0.8rem 0.4rem 0;
  border: 1px solid ${({ color }) => (color ? color : DARK_GREY)};
  height: ${(props) => (props.size ? props.size : defaultSize)}em;
  min-width: ${(props) => (props.size ? props.size : defaultSize)}em;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  } // RM: focus needs to be fixed, it works with simple styled input
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
const CheckboxSpan = ({ sx, ...rest }) => <Flex as="span" sx={sx} {...rest} />;

const Checkbox = ({ checked, input, onChange, color, ...props }) => {
  const newOnChange = (e) => {
    input && input.onChange && input.onChange(e);
    onChange && onChange(e);
  };

  return (
    <React.Fragment>
      <HiddenCheckbox {...props} checked={checked} onChange={newOnChange} />
      <StyledCheckbox color={color} checked={checked}>
        <Icon color={color} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </React.Fragment>
  );
};

const LabeledCheckbox = ({ defaultValue, elementOnChecked, ...props }) => {
  const [checked, setChecked] = useState(
    defaultValue || (props.input && props.input.checked) || false
  );

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <FlexLabel>
        <Checkbox
          {...props}
          className={props.className}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <CheckboxSpan
          sx={{
            alignSelf: 'center',
            color: props.color,
          }}
        >
          {props.label}
        </CheckboxSpan>
      </FlexLabel>
      {checked && elementOnChecked}
    </React.Fragment>
  );
};

const LabeledCheckboxField = (props) => (
  <Field {...props} type="checkbox" component={LabeledCheckbox} />
);

export default LabeledCheckboxField;
