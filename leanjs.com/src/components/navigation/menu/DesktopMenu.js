import styled from "styled-components"
import React from "react"

import Link, { styleChildLinkColor } from "../../navigation/Link"
import ContactButton from "../../buttons/ContactButton"
import Ul, { Li as defaultLi } from "../../layout/Ul"
import MenuData from "./Menu.json"
import { HideSingleComponentUsingCss } from "../../utils"
import { WHITE, SPACING_STANDARD } from "../../../config/styles"

const Li = styled(defaultLi)`
  margin: 0 !important;
  ul > & {
    padding-right: ${SPACING_STANDARD};
  }
  color: ${WHITE};
  ${styleChildLinkColor(WHITE)};
`

const Item = ({ children, ...props }) => (
  <Li>
    <Link {...props}>{children}</Link>
  </Li>
)

const DesktopMenuItem = styled(Item)`
  margin: 0;
`

const MenuWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`

DesktopMenuItem.displayName = "DesktopMenuItem"

// 'wide' prop necessary because otherwise Li styles override Item styles for some reason (in production only)
const DesktopMenu = () => (
  <HideSingleComponentUsingCss xs sm>
    <MenuWrapper>
      <Ul inline wide>
        {MenuData.map((item, i) => (
          <DesktopMenuItem className="menu-item-desktop" key={i} to={item.to}>
            {item.text}
          </DesktopMenuItem>
        ))}
        <Li>
          <ContactButton className="menu-contact-desktop" />
        </Li>
      </Ul>
    </MenuWrapper>
  </HideSingleComponentUsingCss>
)

export default DesktopMenu
