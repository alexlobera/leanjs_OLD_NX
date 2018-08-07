import React from 'react'
import styled from 'styled-components'

import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import { RJSALogo } from '../logos'
import Ul, { Li } from './Ul'
import Link, { styleChildLinkColor } from '../navigation/Link'
import { blue1, WHITE } from '../../config/styles'
import { SCREEN_XS_MAX } from '../utils'
import { P } from '../text'
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

  @media (max-width: ${SCREEN_XS_MAX}) {
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
`

const SocialLink = styled(Link)`
  text-decoration: none;
`
const Footer = () => (
  <StyledFooter>
    <Grid>
      <footer>
        <Row>
          <Col md={5} mdOffset={1}>
            <ContactForm />
          </Col>
          <Col md={4} mdOffset={1}>
            <Row>
              <Col md={6}>
                <LinkList>
                  <Li>
                    <Link to="/curriculum">Curriculum</Link>
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-bootcamp">
                      React bootcamp
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/react-native-bootcamp">React Native</Link>
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-part-time-course">
                      Part-time course
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/about-us">About us</Link>
                  </Li>
                  <Li>
                    <Link to="/about-us#corporate-team-training">
                      Corporate Training
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/react-redux-graphql-training">
                      Training list
                    </Link>
                  </Li>
                  <Li>
                    <Link to="/code-of-conduct">Code of conduct</Link>
                  </Li>
                  {/* <Li>
                                    <Link>Sponsors & Partners</Link>
                                </Li> */}
                </LinkList>
              </Col>
              <Col md={6}>
                <LinkList>
                  <Li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </Li>
                  <Li>
                    <Link to="/terms-of-service">Terms of service</Link>
                  </Li>
                  <Li>
                    <Link
                      style={{ fontSize: '16px' }}
                      to="mailto:hello@reactjs.academy"
                    >
                      hello@reactjs.academy
                    </Link>
                  </Li>
                </LinkList>
                <P>Follow us...</P>
                <SocialMenu unstyled inline>
                  <Li>
                    <SocialLink to="https://twitter.com/reactjsacademy">
                      <BulletIcon social icon={TwitterIcon} />
                    </SocialLink>
                  </Li>
                  <Li>
                    <SocialLink to="https://www.instagram.com/reactjsacademy/">
                      <BulletIcon social icon={InstagramIcon} />
                    </SocialLink>
                  </Li>
                  <Li>
                    <SocialLink to="https://www.facebook.com/reactjsacademy/">
                      <BulletIcon social icon={FacebookIcon} />
                    </SocialLink>
                  </Li>
                </SocialMenu>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <P sm>
                  Copyright &copy; 2018, ReactJS Academy is a{' '}
                  <Link to="https://leanjs.com">LeanJS</Link> product
                </P>
              </Col>
              <Col md={6}>
                <RJSALogo />
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Grid>
  </StyledFooter>
)

export default Footer
