import React from 'react'
import styled from 'styled-components'
import Ul, { Li } from '../layout/Ul'
import Grid, { Row, Col } from '../layout/Grid'
import Link from './Link'

import { reactBlue } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'

const BreadcrumbContainer = styled.div`
  position: absolute;
  top: 103px;
  left: 0;
  width: 100%;
  z-index: 999;
`

const BreadcrumbUl = styled(Ul)`
  background-color: ${reactBlue()};
  padding-left: 16px;
  li a {
    font-size: 16px;
  }

  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      padding: 5px;
    }
  }
`

const Breadcrumb = ({ path }) =>
  path && path.length ? (
    <BreadcrumbContainer>
      <Grid>
        <Row>
          <Col>
            <BreadcrumbUl inline>
              {path.map(({ to, label }, i) => (
                <Li>{to ? <Link to={to}>{label}</Link> : label}</Li>
              ))}
            </BreadcrumbUl>
          </Col>
        </Row>
      </Grid>
    </BreadcrumbContainer>
  ) : null

export default Breadcrumb
