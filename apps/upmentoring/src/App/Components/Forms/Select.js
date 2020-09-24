import React from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';
import Label from './Label';
import Flex from '../Layout/Flex';
import { StyledTextField } from './TextField';

const Select = ({
  input = {},
  label = '',
  meta = null,
  placeholder = null,
  items = [],
  onAutocompleteChange = (e) => {
    // replace with TS
  },
  multiple = false,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef();

  const selectedText =
    items && items.reduce
      ? items.reduce((acc, item) => {
          if (item && item.value === input.value) {
            return item.title;
          } else if (item && item === input.value) {
            return item;
          } else {
            return acc;
          }
        }, '')
      : '';

  const inputText =
    inputRef.current && inputRef.current === document.activeElement
      ? inputValue
      : selectedText;

  const onSelectChange = (selectedItem) => {
    const value = selectedItem ? selectedItem.value : '';
    const text = selectedItem ? selectedItem.title : '';
    if (!multiple) {
      setInputValue(text);
    }
    input && input.onChange && input.onChange(value);
    rest.onChange && rest.onChange(value, selectedItem);
  };

  return (
    <Downshift {...input} onChange={onSelectChange} selectedItem={input.value}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        toggleMenu,
        openMenu,
        clearSelection,
      }) => {
        return (
          <div style={{ position: 'relative' }}>
            <Flex flexDirection="column">
              {label && (
                <Label {...getLabelProps()} htmlFor={input.name}>
                  {label}
                </Label>
              )}
              <Input isOpen={isOpen}>
                <StyledTextField
                  ref={inputRef}
                  pr={4}
                  mr={0}
                  maxWidth="none"
                  width="100%"
                  readOnly={true}
                  placeholder="Please select"
                  {...getInputProps({
                    name: input.name,
                    placeholder,
                    ...(onAutocompleteChange
                      ? {
                          onChange: (e) => {
                            onAutocompleteChange(e);
                            setInputValue(e.target.value);
                          },
                          onClick: () => !isOpen && openMenu(),
                          disable: false,
                          readOnly: false,
                        }
                      : {
                          onClick: toggleMenu,
                        }),
                    value: inputText,
                    onBlur: () => {
                      const selected = selectedText === inputText;
                      if (!selected && !multiple) {
                        const value = '';
                        onSelectChange(value);
                        onAutocompleteChange &&
                          onAutocompleteChange({ target: { value } });
                        clearSelection();
                      }
                    },
                  })}
                />
                <button {...getToggleButtonProps()}>&gt;</button>
              </Input>
              {meta && meta.error && meta.touched && (
                <ErrorMessage>{meta.error}</ErrorMessage>
              )}
            </Flex>
            {isOpen && (
              <Menu {...getMenuProps()}>
                {items.map((item, index) => {
                  let value, title;
                  if (typeof item === 'string') {
                    title = value = item;
                  } else {
                    value = item.value;
                    title = item.title;
                  }

                  return (
                    <Items
                      highlighted={highlightedIndex === index}
                      selected={
                        selectedItem === value ||
                        (selectedItem && selectedItem.value === value)
                      }
                      {...getItemProps({
                        key: title,
                        index,
                        item: { value, title },
                      })}
                    >
                      {title}
                    </Items>
                  );
                })}
              </Menu>
            )}
          </div>
        );
      }}
    </Downshift>
  );
};

const Input = styled.div`
  position: relative;
  display: flex;
  button {
    margin-left: -30px;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 25px;
    width: 20px;
    transform: rotate(${({ isOpen }) => (isOpen ? '-90' : '90')}deg);
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const Menu = styled.ul`
  width: 100%;
  border: 1px solid #222;
  margin: 0px;
  margin-top: 4px;
  padding: 0px;
  position: absolute;
  z-index: 9;
  background-color: white;
  overflow-y: scroll;
  max-height: 300px;
`;

const Items = styled.li`
  ${({ highlighted, selected }) => {
    if (highlighted) {
      return `
        background: mistyrose;
      `;
    }
    if (selected) {
      return `
        background: linen;
      `;
    }
  }};
  padding: 5px;
  list-style: none;
  text-decoration: none;
`;

export default Select;
