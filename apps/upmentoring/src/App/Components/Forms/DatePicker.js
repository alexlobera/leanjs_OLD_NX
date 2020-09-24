import React from 'react';
import moment from 'moment';
import Downshift from 'downshift';
import styled from 'styled-components';

import Calendar from './Calendar';
import TextField from './TextField';

export const getMomentFromValue = (value) =>
  value ? (value.format ? value : moment(value)) : '';

export const Wrapper = styled.div`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || 9999};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
`;

const Datepicker = ({
  input: { value, onChange, ...restInput } = {},
  meta,
  label,
  dateFormat = 'DD-MM-YYYY',
}) => {
  const momentValue = getMomentFromValue(value);

  return (
    <Downshift>
      {({ getInputProps, closeMenu, openMenu, isOpen }) => (
        <div>
          <TextField
            {...getInputProps({
              onFocus: openMenu,
              meta,
              label,
              input: {
                value: momentValue && momentValue.format(dateFormat),
                ...restInput,
              },
            })}
            readOnly
          />
          {isOpen && (
            <Wrapper>
              <Calendar
                onChange={(e) => {
                  onChange(e);
                  closeMenu();
                }}
                date={new Date()}
              />
            </Wrapper>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default Datepicker;
