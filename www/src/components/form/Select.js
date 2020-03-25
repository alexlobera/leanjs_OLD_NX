import React from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'

import Label from '../text/label'
import Flex from '../layout/Flex'
import ArrowIcon from '../icons/ArrowIcon'
import Input from './Input'

const Select = ({
  input = {},
  label,
  meta,
  placeholder,
  items = [],
  sx = {},
  sxInput = {},
  onChange,
  ...rest
}) => {
  const selectedItem =
    items &&
    items.find(
      item => item && (item === input.value || item.value === input.value)
    )

  const inputText = selectedItem
    ? typeof selectedItem === 'string'
      ? selectedItem
      : selectedItem.title
    : undefined

  return (
    <Downshift
      {...input}
      onInputValueChange={inputValue => {
        input.onChange && input.onChange(inputValue)
        onChange && onChange(inputValue)
      }}
      selectedItem={input.value}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <Flex sx={{ ...sx, mt: 1, flexDirection: 'column' }}>
            {label && (
              <Label sx={{ mb: 3 }} {...getLabelProps()} htmlFor={input.name}>
                {label}
              </Label>
            )}
            <InputWrapper isOpen={isOpen}>
              <Input
                formGroupSx={{ pt: 0, pb: 0 }}
                readOnly={true}
                placeholder="Please select"
                {...getInputProps({
                  name: input.name,
                  value: inputText,
                  placeholder,
                })}
              />
              <button {...getToggleButtonProps()}>
                <ArrowIcon width={20} />
              </button>
            </InputWrapper>
          </Flex>
          {isOpen && (
            <Menu {...getMenuProps()}>
              {items.map((item, index) => {
                let value, title
                if (typeof item === 'string') {
                  title = value = item
                } else {
                  value = item.value
                  title = item.title
                }

                return (
                  <Items
                    highlighted={highlightedIndex === index}
                    selected={selectedItem === value}
                    {...getItemProps({
                      key: title,
                      index,
                      item: value,
                    })}
                  >
                    {title}
                  </Items>
                )
              })}
            </Menu>
          )}
        </div>
      )}
    </Downshift>
  )
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  button {
    margin-left: -40px;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 25px;
    width: 20px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    svg {
      margin-top: 5px;
      transform: rotate(${({ isOpen }) => (isOpen ? '-90' : '90')}deg);
    }
  }
`

const Menu = styled.ul`
  width: 198px;
  border: 1px solid #222;
  margin: 0px;
  margin-top: 2px;
  padding: 0px;
  position: absolute;
  z-index: 9;
  background-color: white;
`

const Items = styled.li`
  ${({ highlighted, selected }) => {
    if (highlighted) {
      return `
        background: mistyrose;
      `
    }
    if (selected) {
      return `
        background: linen;
      `
    }
  }};
  cursor: pointer;
  padding: 8px;
  margin: 8px 0;
  list-style: none;
  text-decoration: none;
`

export default Select
