import React from 'react'
import styled from 'styled-components'

import withWidth, { MEDIUM } from '../utils/WithWidth'
import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import RGALogo from '../logos/RGALogo'
import JoobleLogoLink from '../logos/JoobleLogo'
import Ul, { Li } from './Ul'
import Link from '../navigation/Link'
import { DARK_BLUE, WHITE } from '../../config/styles'
import { P, H3, Span } from '../text'
import {
  BulletIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  LinkedinIcon,
} from '../icons'
import { fontColor } from '../text'
import Box from './Box'

const FooterWrapper = styled(Box)``
FooterWrapper.defaultProps = {
  backgroundColor: [DARK_BLUE, 'transparent'],
}

const StyledFooter = styled(Box)`
  ${fontColor(WHITE)}
`
StyledFooter.defaultProps = {
  backgroundColor: DARK_BLUE,
  pt: 6,
  pb: 5,
  mt: 4,
  box: 'footer',
}

const SocialLink = styled(Link)`
  text-decoration: none;
`
const Footer = ({ width }) => (
  <FooterWrapper>
    <Grid>
      <StyledFooter>
        <Row>
          <Col md={5} mdOffset={1}>
            <ContactForm addContactUsLink={true} />
          </Col>
          <Col md={4} mdOffset={1}>
            {width > MEDIUM && (
              <Row>
                <Col>
                  <H3>Site links</H3>
                </Col>
                <Col md={6}>
                  <Ul variant="unstyled" pt={0}>
                    {[
                      { to: '/react/training', txt: 'React Courses' },
                      { to: '/react/curriculum', txt: 'React Curriculum' },
                      { to: '/graphql/training', txt: 'GraphQL Courses' },
                      { to: '/graphql/curriculum', txt: 'GraphQL Curriculum' },
                      { to: '/blog', txt: 'Blog' },
                    ].map(({ txt, to }) => (
                      <Li key={to}>
                        <Link to={to} className="footer-site-links">
                          {txt}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                </Col>
                <Col md={6}>
                  <Ul variant="unstyled" pt={0}>
                    {[
                      { to: '/about-us', txt: 'About us' },
                      { to: '/community', txt: 'Community' },
                      {
                        to: '/privacy-policy',
                        txt: 'Privacy Policy',
                        extraClass: 'footer-privacy-policy',
                      },
                      { to: '/terms-of-service', txt: 'Terms of service' },
                      { to: '/code-of-conduct', txt: 'Code of conduct' },
                    ].map(({ txt, to, extraClass }) => (
                      <Li key={to}>
                        <Link
                          to={to}
                          className={`footer-site-links ${
                            extraClass ? extraClass : ''
                          }`}
                        >
                          {txt}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                </Col>
              </Row>
            )}
            <Row>
              <Col>
                <Span>Follow us...</Span>
                <Ul variants={['unstyled', 'inline']} mt={1} mb={2}>
                  {[
                    {
                      to: 'https://twitter.com/reactgqlacademy',
                      title: 'React GraphQL Academy Twitter',
                      icon: TwitterIcon,
                    },
                    {
                      to: 'https://www.instagram.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy Instagram',
                      icon: InstagramIcon,
                    },
                    {
                      to: 'https://www.facebook.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy Facebook',
                      icon: FacebookIcon,
                    },
                    {
                      to: 'https://www.linkedin.com/company/17933576/',
                      title: 'React GraphQL Academy LinkedIn',
                      icon: LinkedinIcon,
                    },
                    {
                      to: 'https://www.github.com/reactgraphqlacademy/',
                      title: 'React GraphQL Academy GitHub',
                      icon: GitHubIcon,
                    },
                  ].map(({ to, title, icon }) => (
                    <Li key={to}>
                      <SocialLink
                        title={title}
                        to={to}
                        className="footer-follow-us"
                      >
                        <BulletIcon social icon={icon} />
                      </SocialLink>
                    </Li>
                  ))}
                </Ul>
              </Col>
              <Col>
                <P sm>
                  Copyright &copy; {`2017 - ${new Date().getFullYear()}`}, React
                  GraphQL Academy is a{' '}
                  <Link className="footer-leanjs" to="https://leanjs.com">
                    LeanJS
                  </Link>{' '}
                  product
                </P>
                <RGALogo className="footer-rga-logo" />
                <P pt={4}>
                  Looking for a Job?
                  <br />
                  Search for Developer Careers on Jooble
                </P>
                <P>
                  <JoobleLogoLink />
                </P>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledFooter>
    </Grid>
  </FooterWrapper>
)

export default withWidth()(Footer)
