import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../../Link'
import MenuData from '../Menu.json'
import { RJSALogo } from '../../../logos/RJSALogo'
import ToggleButton from './ToggleButton'

const Item = ({ children, ...props }) => <Link {...props}>{children}</Link>

export const PhoneMenuItem = styled(Item)`
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
`
PhoneMenuItem.displayName = 'PhoneMenuItem'

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.3s ease 0s;
`
Overlay.displayName = 'Overlay'

export const MenuContent = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  right: inherit;
  z-index: 1100;
  width: ${({ width }) => width}px;
  margin-left: ${({ isOpen, width }) => (isOpen ? 0 : `-${width}px`)};
  height: 100%;
  transition: all 0.5s ease 0s;
  background: #373a47;
  padding: 2.5em 1.5em 0;
  box-sizing: border-box;
  overflow: auto;
  color: #b8b7ad;
`
MenuContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
}

const PhoneMenu = ({ width, defaultIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const items = MenuData.reduce((accumulatedItems, currentItem) => {
    if (currentItem.children) {
      return [
        ...accumulatedItems,
        ...currentItem.children.filter(i => !i.hideOnMobile),
      ]
    } else if (!currentItem.hideOnMobile) {
      return [...accumulatedItems, currentItem]
    } else {
      return accumulatedItems
    }
  }, [])

  function closeMenu() {
    setIsOpen(false)
  }

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <ToggleButton toggleMenu={toggleMenu} isOpen={isOpen} />
      {isOpen && <Overlay onClick={toggleMenu} />}
      <MenuContent width={width} isOpen={isOpen}>
        <RJSALogo />
        {items.map(item => (
          <PhoneMenuItem onClick={closeMenu} key={item.to} to={item.to}>
            {item.text}
          </PhoneMenuItem>
        ))}
      </MenuContent>
    </React.Fragment>
  )
}

PhoneMenu.propTypes = {
  defaultIsOpen: PropTypes.bool,
  width: PropTypes.number,
}

PhoneMenu.defaultProps = {
  width: 300,
}

export default PhoneMenu
