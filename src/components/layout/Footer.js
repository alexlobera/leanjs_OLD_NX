import React from 'react'
import styled from 'styled-components'

import Grid, { Col, Row } from './Grid'
import ReactJSAcademyLogo from '../logos/ReactJSAcademy'
import Ul, { Li } from './Ul'
import Link from '../navigation/Link'

const StyledFooter = styled.footer`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  border-top: 1px solid #ccc;
`

const Footer = () => (
  <StyledFooter>
    <Grid>
      <Row>
        <Col xs={6}>
          <ReactJSAcademyLogo />
        </Col>
        <Col xs={6} style={{ paddingTop: '15px', textAlign: 'right' }}>
          <Ul inline>
            <Li>
              <Link>On-site Corporate Training</Link>
            </Li>
            <Li>
              <Link>Sponsors & Partners</Link>
            </Li>
            <Li>Copyright 2018</Li>
          </Ul>
        </Col>
      </Row>
    </Grid>
  </StyledFooter>
)

export default Footer
