import React from 'react'
import styled from 'styled-components'

import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import ReactJSAcademyLogo from '../logos/ReactJSAcademy'
import Ul, { Li } from './Ul'
import DefaultLink from '../navigation/Link'
import { BLUE2, WHITE, BROWN } from '../../styles'

const StyledFooter = styled.footer`
  background-color: ${BLUE2};
  padding: 60px 0 40px 0;
  color: ${WHITE};
  h2 {
    color: ${WHITE};
  }
`

const Link = styled(DefaultLink)`
  color: ${WHITE};
`

const LinkList = styled(Ul)`
  padding-left: 0;
  list-style: none;
  margin-left: 0;
`

const Footer = () => (
  <Grid>
    <StyledFooter>
      <Row>
        <Col lg={5} lgOffset={1}>
          <ContactForm />
        </Col>
        <Col lg={4} lgOffset={1}>
          <Row>
            <Col md={6}>
              <LinkList>
                <Li>
                  <Link to="/about-us#corporate-training">
                    Corporate Training
                  </Link>
                </Li>
                {/* <Li>
                                    <Link>Sponsors & Partners</Link>
                                </Li> */}
              </LinkList>
            </Col>
            <Col md={6}>
              <LinkList>
                <Li>
                  <Link>Privacy Policy</Link>
                </Li>
                <Li>
                  <Link to="terms-of-service">Terms of service</Link>
                </Li>
              </LinkList>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              Copyright &copy; 2018, ReactJS Academy is a{' '}
              <Link to="https://leanjs.com">LeanJS</Link> product
            </Col>
            <Col md={6}>
              <ReactJSAcademyLogo />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledFooter>
  </Grid>
)

export default Footer
