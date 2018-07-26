import styled from 'styled-components'
import Link from '../../navigation/Link'
import React from 'react'
import Ul, { Li as defaultLi } from '../../layout/Ul'
import MenuData from './Menu.json'
import { HideSingleComponentUsingCss } from '../../utils'
import { WHITE } from '../../../config/styles'

const Li = styled(defaultLi)`
  margin: 0 !important;
  color: ${WHITE};
  a {
    color: ${WHITE};
  }
  a:link {
    color: ${WHITE};
  }
  a:visited {
    color: ${WHITE};
  }
  a:hover {
    color: ${WHITE};
  }
  a:active {
    color: ${WHITE};
  }
`

const Item = ({ children, ...props }) => (
  <Li>
    <Link {...props}>{children}</Link>
  </Li>
)

const DesktopMenuItem = styled(Item)`
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
