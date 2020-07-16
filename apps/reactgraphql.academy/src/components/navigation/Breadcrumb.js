import React from 'react';
import styled from 'styled-components';
import Ul, { Li } from '../layout/Ul';
import Box from '../layout/Box';
import Grid, { Row, Col } from '../layout/Grid';
import Link, { styleChildLinkColor } from './Link';

import { WHITE, LIGHT_BLUE, Z_INDEX_MEDIUM } from '../../config/styles';
import { SCREEN_XS_MAX } from '../utils';

const BreadcrumbContainer = React.memo(styled(Box)`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX_MEDIUM};
  ul {
    background-color: ${({ bgColor = LIGHT_BLUE }) => bgColor};
    padding-left: 16px;
    li {
      padding: 5px 4px 7px 0 !important;
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
`);

const Breadcrumb = ({ path, bgColor }) =>
  path && path.length ? (
    <BreadcrumbContainer
      sx={{ top: ['67px', '90px'] }}
      box="nav"
      bgColor={bgColor}
      ariaLabel="Breadcrumb"
    >
      <Grid>
        <Row>
          <Col>
            <Ul variant="inline">
              {path.map(({ to, label }) => {
                const formatedLabel = label.replace(/(<([^>]+)>)/gi, ' ');

                return (
                  <Li key={to}>
                    {to ? (
                      <Link className="breadcrumb" to={to}>
                        {formatedLabel}
                      </Link>
                    ) : (
                      formatedLabel
                    )}
                  </Li>
                );
              })}
            </Ul>
          </Col>
        </Row>
      </Grid>
    </BreadcrumbContainer>
  ) : null;

export default React.memo(Breadcrumb);
