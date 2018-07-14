import React from 'react'
import {
  Grid,
  Row as FlexboxRow,
  Col as FlexboxCol,
} from 'react-styled-flexboxgrid'
import styled from 'styled-components'

const Col = ({ xs, sm, md, lg, center, style = {}, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }

  if (center) {
    style.display = 'flex'
    style.justifyContent = 'center'
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
}

const Row = styled(FlexboxRow)`
  margin-left: 0;
  margin-right: 0;
`

export { Row, Col, Grid }

export default Grid
