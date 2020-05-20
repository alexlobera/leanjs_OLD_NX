import React from "react"
import styled from "styled-components"
import {
  SPACING_STANDARD,
  SPACING_MEDIUM,
  SPACING_LARGE,
  MEDIUMGREY,
} from "../../config/styles"
import { SCREEN_SM_MAX } from "../utils"

const Table = styled.div`
  display: table;
  align-items: center;
  margin-right: ${props =>
    props.largeHorizontalSpacing ? SPACING_LARGE : `auto`};
`
const Row = styled.div`
  display: table-row;
  > div {
  }
`
const getLeftPadding = isWideScreen => props =>
  `padding-left: ${
    props.firstTable || props.flushLeft || (props.firstCell && !isWideScreen)
      ? `0`
      : `${isWideScreen ? SPACING_MEDIUM : SPACING_STANDARD}`
  }`

const Cell = styled.div`
  display: table-cell;
  vertical-align: ${props => (props.verticalCenter ? "middle" : "top")};
  padding: ${SPACING_STANDARD};
  ${getLeftPadding(true)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    ${getLeftPadding(false)};
  }
`

const SmallIconAndSentence = props => (
  <Table largeHorizontalSpacing={props.largeHorizontalSpacing}>
    <Row>
      <Cell
        firstCell
        firstTable={props.first}
        flushLeft={props.flushLeft}
        verticalCenter={props.verticalCenter}
      >
        {props.icon}
      </Cell>
      <Cell verticalCenter={props.verticalCenter}>{props.sentence}</Cell>
    </Row>
  </Table>
)

export default SmallIconAndSentence
