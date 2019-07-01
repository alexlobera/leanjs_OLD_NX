import React from 'react'
import styled from 'styled-components'
import Ul, { Li } from '../layout/Ul'
import Grid, { Row, Col } from '../layout/Grid'
import Link, { styleChildLinkColor } from './Link'

import { LIGHT_BLUE, WHITE, Z_INDEX_MEDIUM } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'

const BreadcrumbContainer = styled.nav`
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX_MEDIUM};
  ul {
    background-color: ${LIGHT_BLUE};
    padding-left: 16px;
    li {
      padding-left: 0px !important;
      padding-right: 4px !important;
      ${styleChildLinkColor(WHITE)} a {
        font-size: 0.9rem;
        text-shadow: 1px -1px 17px #367088;
      }
    }
    li:after {
      padding-left: 4px;
      padding-right: 0;
      color: ${WHITE};
      content: '>';
    }

    li:last-child:after {
      content: '';
    }

    @media (max-width: ${SCREEN_XS_MAX}) {
      li {
        padding: 5px;
      }
    }
  }
`

const Breadcrumb = ({ path }) =>
  path && path.length ? (
    <BreadcrumbContainer ariaLabel="Breadcrumb">
      <Grid>
        <Row>
          <Col>
            <Ul inline>
              {path.map(({ to, label }) => {
                const formatedLabel = label.replace(/(<([^>]+)>)/gi, ' ')

                return (
                  <Li key={to}>
                    {to ? <Link to={to}>{formatedLabel}</Link> : formatedLabel}
                  </Li>
                )
              })}
            </Ul>
          </Col>
        </Row>
      </Grid>
    </BreadcrumbContainer>
  ) : null

export default Breadcrumb
