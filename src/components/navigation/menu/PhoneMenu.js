import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Link from '../Link'
import React from 'react'
import MenuData from './Menu.json'
import { RJSALogo } from '../../logos'
import './PhoneMenu.css'

const Item = ({ children, ...props }) => <Link {...props}>{children}</Link>

const PhoneMenuItem = styled(Item)`
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
`

PhoneMenuItem.displayName = 'PhoneMenuItem'

class PhoneMenu extends React.Component {
  state = {
    isOpen: false,
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state
    const { closeMenu } = this

    return (
      <Menu isOpen={isOpen}>
        <RJSALogo />
        {MenuData.map((item, i) => (
          <PhoneMenuItem onClick={closeMenu} key={i} to={item.to}>
            {item.text}
          </PhoneMenuItem>
        ))}
      </Menu>
    )
  }
}

export default PhoneMenu
