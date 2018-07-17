import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Link from 'gatsby-link'
import React from 'react'
import MenuData from './Menu.json'
import './PhoneMenu.css'

const Item = ({ children, ...props }) => <Link {...props}>{children}</Link>

const PhoneMenuItem = styled(Item)`
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
`

PhoneMenuItem.displayName = 'PhoneMenuItem'

const PhoneMenu = () => (
  <Menu>
    {MenuData.map(item => (
      <PhoneMenuItem to={item.to}>{item.text}</PhoneMenuItem>
    ))}
  </Menu>
)

export default PhoneMenu
