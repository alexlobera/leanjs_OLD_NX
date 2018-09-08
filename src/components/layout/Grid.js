import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col as FlexboxCol } from 'react-styled-flexboxgrid'
import { SCREEN_SM_MAX } from '../utils'

const Col = ({ xs, sm, md, lg, center, end, style = {}, order, ...rest }) => {
  const sizes = {
    xs: xs || 12,
    sm: sm || xs || 12,
    md: md || sm || xs || 12,
    lg: lg || md || sm || xs || 12,
  }

  return <FlexboxCol {...rest} {...sizes} style={style} />
}

const StyledCol = styled(Col)`
  ${({ center }) => center ? `
    display: flex;
    justify-content: center;

  ` : null
  }
  ${({ end }) => end ? `
    display: flex;
    align-items: flex-end;
  ` : null
  }
  ${({ smOrder }) => smOrder ? `
    @media (max-width: ${SCREEN_SM_MAX}) {
      order: ${smOrder};
    }
  ` : null
  }
`

export { Row, StyledCol as Col, Grid }

export default Grid
