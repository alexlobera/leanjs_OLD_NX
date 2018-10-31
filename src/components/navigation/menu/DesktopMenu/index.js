import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link, { styleChildLinkColor } from '../../../navigation/Link'
import React from 'react'
import DefaultUl, { Li } from '../../../layout/Ul'
import MenuData from '../Menu.json'
import { HideComponentsUsingCss } from '../../../utils'
import { WHITE } from '../../../../config/styles'
import ItemSubmenu from './ItemSubmenu'

const Ul = styled(DefaultUl)`
  > li {
    margin: 0 !important;
    padding-left: 10px;
    padding-right: 12px;
    color: ${WHITE};
    ${styleChildLinkColor(WHITE)};
  }
`

class Item extends React.Component {
  render() {
    const { text, submenuItems, ...props } = this.props

    return (
      <Li>
        {submenuItems ? (
          <ItemSubmenu items={submenuItems} text={text} to={props.to} />
        ) :
          <Link {...props}>{text}</Link>
        }
      </Li>
    )
  }
}

export const DesktopMenuItem = styled(Item)`
  margin: 0 0 0 6px;
`
DesktopMenuItem.displayName = 'DesktopMenuItem'

const DesktopMenu = () => (
  <HideComponentsUsingCss xs sm>
    <Ul inline>
      {MenuData.map((item) => (
        <DesktopMenuItem key={item.to} to={item.to} text={item.text} submenuItems={item.children} />
      ))}
    </Ul>
  </HideComponentsUsingCss>
)

export default DesktopMenu
