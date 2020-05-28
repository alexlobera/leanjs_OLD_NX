import React from "react"
import styled from "styled-components"
import Link, { ScrollingLink } from "../navigation/Link"
import { DEFAULT_BUTTON_STYLES, getForegroundColor } from "./Button"
import { NEW_WINDOW } from "../../resources/icons"
import { FONT_WEIGHT_STANDARD, SPACING_MEDIUM } from "../../config/styles"
import { backgroundIcon } from "../../resources/styles"

// NB cunning destructure method to remove invalid DOM properties before passing them to the underlying dom element
// and thereby generating a React warning, as per https://github.com/styled-components/styled-components/issues/1268
const LinkButton = styled(({ hasArrows, dark, scroll, ...rest }) => {
  const Component = scroll ? ScrollingLink : Link
  return <Component {...rest} />
})`
  ${DEFAULT_BUTTON_STYLES};
  text-decoration: none !important;
  display: inline-block;
  text-align: center;
  font-weight: ${FONT_WEIGHT_STANDARD};
  &:link {
    color: ${getForegroundColor} !important;
  }
  &:visited {
    color: ${getForegroundColor} !important;
  }
  &:hover {
    color: ${getForegroundColor} !important;
  }
  &:active {
    color: ${getForegroundColor} !important;
  }
  margin-right: ${SPACING_MEDIUM};
  ${props => (props.external ? backgroundIcon(NEW_WINDOW) : null)};
`

LinkButton.passProps = false

export default LinkButton
