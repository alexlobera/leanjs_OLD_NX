import React from 'react'
import styled from 'styled-components'

import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import ReactJSAcademyLogo from '../logos/ReactJSAcademy'
import Ul, { Li } from './Ul'
import Link from '../navigation/Link'
import { BLUE2, WHITE, BROWN } from '../../styles'

const StyledFooter = styled.footer`
  background-color: ${BLUE2};
  border: solid 1px ${BROWN};
  padding: 60px 0 40px 0;
  h2 {
    color: ${WHITE};
  }
`

const Footer = () => (
  <Grid>
    <StyledFooter>
      <Row>
        <Col lg={5} lgOffset={1}>
          <ContactForm />
        </Col>
        <Col lg={4} lgOffset={1}>
          <ReactJSAcademyLogo />
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
    </StyledFooter>
  </Grid>
)

export default Footer
