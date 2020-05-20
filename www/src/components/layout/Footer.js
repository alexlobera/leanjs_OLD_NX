import React from 'react'
import styled from 'styled-components'

import ContactForm from '../form/Contact'
import Grid, { Col, Row } from './Grid'
import RGALogo from '../logos/RGALogo'
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

const FooterWrapper = React.memo((props) => (
  <Box
    sx={{
      backgroundColor: [DARK_BLUE, 'transparent'],
    }}
    {...props}
  />
))

const StyledFooter = React.memo(styled(Box)`
  ${fontColor(WHITE)}
`)

const SocialLink = ({ sx = {}, ...rest }) => (
  <Link sx={{ textDecoration: 'none', ...sx }} {...rest} />
)

const Footer = () => (
  <FooterWrapper>
    <Grid>
      <StyledFooter
        sx={{ backgroundColor: DARK_BLUE, pt: 6, pb: 5, mt: 4 }}
        box="footer"
      >
        <Row>
          <Col md={5} mdOffset={1}>
            <ContactForm
              addContactUsLink={true}
              newsletterAnchorName={'newsletter-footer'}
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <Row>
              <Col>
                <H3>Site links</H3>
              </Col>
              <Col md={6}>
                <Ul variant="unstyled" sx={{ pt: 0 }}>
                  {[
                    { to: '/react/training', txt: 'React Training' },
                    { to: '/react/curriculum', txt: 'React Curriculum' },
                    {
                      to: '/graphql/training',
                      txt: 'GraphQL Training',
                    },
                    { to: '/graphql/curriculum', txt: 'GraphQL Curriculum' },
                    { to: '/blog', txt: 'Blog' },
                    { to: '/about-us', txt: 'About us' },
                    { to: '/reviews', txt: 'Reviews' },
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
                <Ul variant="unstyled" sx={{ pt: 0 }}>
                  {[
                    { to: '/brand', txt: 'Logo & Assets' },
                    { to: '/partners', txt: 'Partners' },
                    { to: '/community', txt: 'Community' },
                    { to: '/locations', txt: 'Locations' },
                    { to: '/code-of-conduct', txt: 'Code of conduct' },
                    {
                      to: '/privacy-policy',
                      txt: 'Privacy Policy',
                      extraClass: 'footer-privacy-policy',
                    },
                    { to: '/terms-of-service', txt: 'Terms of service' },
                    // {
                    //   to: '/jamstack-mini-conference/',
                    //   txt: 'JAMStack MiniConf',
                    // },
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
            <Row>
              <Col>
                <Span>Follow us...</Span>
                <Ul variants={['unstyled', 'inline']} sx={{ mt: 1, mb: 2 }}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledFooter>
    </Grid>
  </FooterWrapper>
)

export default React.memo(Footer)
