import React from "react"
import {
  Grid,
  Row as FlexboxRow,
  Col as FlexboxCol,
} from "react-styled-flexboxgrid"
import styled from "styled-components"

import { SPACING_STANDARD, SPACING_MEDIUM } from "../../config/styles"
import {
  SCREEN_SM_MIN,
  SCREEN_MD_MIN,
  SCREEN_XS_MIN,
  SCREEN_MD_MAX,
} from "../utils"

const media = (size, css) => {
  switch (size) {
    case "xs":
      return `@media(min-width: ${SCREEN_XS_MIN}) { ${css} }`
    case "sm":
      return `@media(min-width: ${SCREEN_SM_MIN}) { ${css} }`
    case "md":
      return `@media(min-width: ${SCREEN_MD_MIN}) { ${css} }`
    case "lg":
      return `@media(min-width: ${SCREEN_MD_MAX}) { ${css} }`
  }
}

const validSizes = ["xs", "sm", "md", "lg"]
const justifyContent = align =>
  `justify-content: ${align === "center" ? "center" : "flex-end"}`
const Col = styled(({ xs, sm, md, lg, align, style = {}, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }
  return <FlexboxCol {...rest} {...sizes} style={style} />
})`
  ${({ align }) =>
    align
      ? `display:flex;` +
        (typeof align === "string"
          ? justifyContent(align)
          : validSizes
              .map(size =>
                align[size] ? media(size, justifyContent(align[size])) : ""
              )
              .join(";"))
      : ``};
`

const Row = styled(FlexboxRow)`
  margin-left: 0;
  margin-right: 0;

  margin-top: ${SPACING_STANDARD};
  margin-bottom: ${props => (props.lastOnPage ? 0 : SPACING_STANDARD)};
  ${media(
    "md",
    `
    margin-top: ${SPACING_MEDIUM};
    margin-bottom: ${props => (props.lastOnPage ? 0 : SPACING_MEDIUM)};
  `
  )};
`

const SingleColRow = props => (
  <Row>
    <Col md={8} {...props}>
      {props.children}
    </Col>
  </Row>
)

const SingleCellGrid = props => (
  <Grid>
    <SingleColRow {...props} />
  </Grid>
)

export { Row, Col, Grid, SingleColRow, SingleCellGrid }

export default Grid
