import styled from 'styled-components'
import Link from '../../navigation/Link'
import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import MenuData from './Menu.json'
import { HideSingleComponentUsingCss } from '../../utils'

const Item = ({ children, ...props }) => (
  <Li>
    <Link {...props}>{children}</Link>
  </Li>
)

const DesktopMenuItem = styled(Item)`
  color: white;
`

DesktopMenuItem.displayName = 'DesktopMenuItem'

const DesktopMenuContainer = styled(Ul)`
  float: right;
`

const DesktopMenu = () => (
  <HideSingleComponentUsingCss xs sm>
    <Ul inline>
      {MenuData.map((item, i) => (
        <DesktopMenuItem key={i} to={item.to}>
          {item.text}
        </DesktopMenuItem>
      ))}
    </Ul>
  </HideSingleComponentUsingCss>
)

export default DesktopMenu
