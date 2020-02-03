import React from 'react'
import { Grid, Row, Col as FlexboxCol } from 'react-styled-flexboxgrid'
import Flex from './Flex'

const Col = React.memo(({ xs, sm, md, lg, style = {}, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
})

// const StyledCol = styled(Flex)``
const StyledCol = React.memo(props => <Flex box={Col} {...props} />)

export { Row, StyledCol as Col, Grid }

export default Grid
