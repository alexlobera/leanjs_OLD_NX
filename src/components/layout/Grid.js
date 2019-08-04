import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col as FlexboxCol } from 'react-styled-flexboxgrid'
import Flex from './Flex'

const Col = ({ xs, sm, md, lg, style = {}, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
}

const StyledCol = styled(Flex)``
StyledCol.defaultProps = {
  box: Col,
}

export { Row, StyledCol as Col, Grid }

export default Grid
