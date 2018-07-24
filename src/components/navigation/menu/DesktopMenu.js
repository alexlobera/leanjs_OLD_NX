import styled from 'styled-components'
import Link from '../../navigation/Link'
import React from 'react'
import Ul, { Li as defaultLi } from '../../Layout/Ul'
import MenuData from './Menu.json'
import { HideSingleComponentUsingCss } from '../../utils'

const Li = styled(defaultLi)`
  margin: 0 !important;
`

const Item = ({ children, ...props }) => (
  <Li>
    <Link {...props}>{children}</Link>
  </Li>
)

const DesktopMenuItem = styled(Item)`
  color: white;
  margin: 0;
`

DesktopMenuItem.displayName = 'DesktopMenuItem'

const DesktopMenuContainer = styled(Ul)``

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
