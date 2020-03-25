import React from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'

import Label from '../text/label'
import Flex from '../layout/Flex'
import Box from '../layout/Box'
import ArrowIcon from '../icons/ArrowIcon'
import Input from './Input'

const Select = ({
  input = {},
  value,
  label,
  meta,
  placeholder,
  items = [],
  sx = {},
  sxInput = {},
  sxLabel = {},
  sxMenu = {},
  onChange,
  ...rest
}) => {
  const inputValue = (input && input.value) || value
  const selectedItem =
    items &&
    items.find(
      item => item && (item === inputValue || item.value === inputValue)
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
      selectedItem={inputValue}
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
        toggleMenu,
      }) => {
        return (
          <div>
            <Flex
              sx={{
                mt: 1,
                flexDirection: 'column',
                alignItems: 'center',
                ...sx,
              }}
            >
              {label && (
                <Label
                  sx={{ mb: 3, ...sxLabel }}
                  {...getLabelProps()}
                  htmlFor={input.name}
                >
                  {label}
                </Label>
              )}
              <InputWrapper isOpen={isOpen}>
                <Input
                  onClick={toggleMenu}
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
              <Menu {...getMenuProps()} {...sxMenu}>
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
        )
      }}
    </Downshift>
  )
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  input {
    cursor: pointer;
  }
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

// const Menu = styled(Box)`
//   width: 198px;
//   border: 1px solid #222;
//   margin: 0px;
//   margin-top: 2px;
//   padding: 0px;
//   position: absolute;
//   z-index: 9;
//   background-color: white;
// `
const Menu = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      zIndex: 9,
      backgroundColor: 'background',
      width: ['auto', '198px'],
      border: ['none', '1px solid'],
      borderColor: 'secondary',
      m: 0,
      mt: '2px',
      p: 0,
      position: ['inherit', 'absolute'],
      ...sx,
    }}
    {...rest}
  />
)

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
