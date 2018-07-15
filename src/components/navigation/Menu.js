import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Link from 'gatsby-link'
import React from 'react'

import './Menu.css'

const Item = ({ children, ...props }) => (
    <Link {...props}>{children}</Link>
)

const MenuItem = styled(Item)`
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
    color: white;
`

MenuItem.displayName = 'MenuItem'

export { MenuItem }
export default Menu