import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../utils/WithWidth'
import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import { RJSALogo } from '../logos/RJSALogo'
import Ul, { Li } from './Ul'
import Link, { styleChildLinkColor } from '../navigation/Link'
import { blue1, WHITE } from '../../config/styles'
import { SCREEN_SM_MAX } from '../utils'
import { P, H3, Span } from '../text'
import { BulletIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../icons'

const StyledFooter = styled.div`
  footer {
    background-color: ${blue1()};
    padding: 50px 0 40px 0;
    color: ${WHITE};
    h2 {
      color: ${WHITE};
    }
    ${styleChildLinkColor(WHITE)};
  }

  @media (max-width: ${SCREEN_SM_MAX}) {
    background-color: ${blue1()};
  }
`

const LinkList = styled(Ul)`
  padding-left: 0;
  list-style: none;
  margin-left: 0;
`

const SocialMenu = styled(Ul)`
  > li {
    padding: 0;
  }
  margin: 1rem 0;
`

const SocialLink = styled(Link)`
  text-decoration: none;
`
const Footer = ({ width }) => (
  <StyledFooter>
    <Grid>
      <footer>
        <Row>
          <Col md={5} mdOffset={1}>
            <ContactForm addContactUsLink={true} />
          </Col>
          <Col md={4} mdOffset={1}>
            {width > MEDIUM && (
              <Row>
                <Col md={12}>
                  <H3>Site links</H3>
                </Col>
                <Col md={6}>
                  <LinkList>
                    <Li>
                      <Link to="/react/training">React Courses</Link>
                    </Li>
                    <Li>
                      <Link to="/react/curriculum">React Curriculum</Link>
                    </Li>
                    <Li>
                      <Link to="/graphql/training">GraphQL Courses</Link>
                    </Li>
                    <Li>
                      <Link to="/graphql/curriculum">GraphQL Curriculum</Link>
                    </Li>
                    <Li>
                      <Link to="/blog">Blog</Link>
                    </Li>
                  </LinkList>
                </Col>
                <Col md={6}>
                  <LinkList>
                    <Li>
                      <Link to="/about-us">About us</Link>
                    </Li>
                    <Li>
                      <Link to="/community">Community</Link>
                    </Li>
                    <Li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </Li>
                    <Li>
                      <Link to="/terms-of-service">Terms of service</Link>
                    </Li>
                    <Li>
                      <Link to="/code-of-conduct">Code of conduct</Link>
                    </Li>
                  </LinkList>
                </Col>
              </Row>
            )}
            <Row>
              <Col md={12}>
                <Span>Follow us...</Span>
                <SocialMenu unstyled inline>
                  <Li>
                    <SocialLink
                      title="React GraphQL Academy Twitter"
                      to="https://twitter.com/reactgqlacademy"
                    >
                      <BulletIcon social icon={TwitterIcon} />
                    </SocialLink>
                  </Li>
                  <Li>
                    <SocialLink
                      title="React GraphQL Academy Instagram"
                      to="https://www.instagram.com/reactgraphqlacademy/"
                    >
                      <BulletIcon social icon={InstagramIcon} />
                    </SocialLink>
                  </Li>
                  <Li>
                    <SocialLink
                      title="React GraphQL Academy Facebook"
                      to="https://www.facebook.com/reactgraphqlacademy/"
                    >
                      <BulletIcon social icon={FacebookIcon} />
                    </SocialLink>
                  </Li>
                </SocialMenu>
              </Col>
              <Col md={12}>
                <P sm>
                  Copyright &copy; {`2017 - ${new Date().getFullYear()}`}, React
                  GraphQL Academy is a{' '}
                  <Link to="https://leanjs.com">LeanJS</Link> product
                </P>
              </Col>
              <Col md={12}>
                <RJSALogo />
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Grid>
  </StyledFooter>
)

export default withWidth()(Footer)
