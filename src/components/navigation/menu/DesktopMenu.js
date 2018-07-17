import styled from 'styled-components'
import Link from 'gatsby-link'
import React from 'react'
import Ul, { Li } from '../../Layout/Ul'
import MenuData from './Menu.json'
import { HideSingleComponentUsingCss } from '../../utils'

const Item = ({ children, ...props }) => (
  <Li>
    <Link {...props}>{children}</Link>
  </Li>
)

const DesktopMenuItem = styled(Item)``

DesktopMenuItem.displayName = 'DesktopMenuItem'

const DesktopMenuContainer = styled(Ul)`
  position: absolute;
  right: 20px;
  top: 18px;
`

const DesktopMenu = () => (
  <HideSingleComponentUsingCss xs sm>
    <DesktopMenuContainer inline>
      {MenuData.map(item => (
        <DesktopMenuItem to={item.to}>{item.text}</DesktopMenuItem>
      ))}
    </DesktopMenuContainer>
  </HideSingleComponentUsingCss>
)

export default DesktopMenu
