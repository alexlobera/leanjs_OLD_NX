import React from 'react'
import { Grid, Row, Col as FlexboxCol } from 'react-styled-flexboxgrid'

const Col = ({ xs, sm, md, lg, center, end, style = {}, ...rest }) => {
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

  if (end) {
    style.display = 'flex'
    style.alignItems = 'flex-end'
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
}

export { Row, Col, Grid }

export default Grid
