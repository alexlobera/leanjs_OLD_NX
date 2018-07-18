import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import 'normalize.css'
import './reset.css'
import styled from 'styled-components'
import withWidth, { MEDIUM } from 'react-width'
import { Provider } from 'rebass'
import { ThemeProvider, injectGlobal } from 'styled-components'

import Ul, { Li } from '../components/Layout/Ul'
import Link from '../components/navigation/Link'
import rebassTheme, { globalStyles } from './rebass-theme'
import Grid, { Col, Row } from '../components/layout/Grid'
import ReactJSAcademyLogo from '../components/logos/ReactJSAcademy'
import { DesktopMenu, PhoneMenu } from '../components/navigation/menu'

// Inject global styles required by Rebass
injectGlobal(globalStyles)

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: 46, // rem
      md: 64, // rem
      lg: 64, // rem
    },
  },
}

const Header = styled.div`
  padding: 15px;
`

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

const Layout = ({ children, data, width }) => {
  console.log('layout width', width, MEDIUM)
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'
  return (
    <ThemeProvider theme={gridTheme}>
      <Provider theme={rebassTheme}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header>
          <ReactJSAcademyLogo />
          {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
            <PhoneMenu />
          ) : (
            <DesktopMenu />
          )}
        </Header>
        {children()}
        <Footer />
      </Provider>
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
