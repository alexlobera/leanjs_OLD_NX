import styled from 'styled-components'
import Link, { styleChildLinkColor } from '../../navigation/Link'
import React from 'react'
import DefaultUl, { Li } from '../../layout/Ul'
import MenuData from './Menu.json'
import { HideComponentsUsingCss } from '../../utils'
import { WHITE } from '../../../config/styles'

const Ul = styled(DefaultUl)`
  > li {
    margin: 0 !important;
    padding-left: 10px;
    padding-right: 12px;
    color: ${WHITE};
    ${styleChildLinkColor(WHITE)};
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

const DesktopMenu = () => (
  <HideComponentsUsingCss xs sm>
    <Ul inline>
      {MenuData.map((item, i) => (
        <DesktopMenuItem key={i} to={item.to}>
          {item.text}
        </DesktopMenuItem>
      ))}
    </Ul>
  </HideComponentsUsingCss>
)

export default DesktopMenu
