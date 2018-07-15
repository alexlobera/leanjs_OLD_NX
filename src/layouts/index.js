import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import 'normalize.css'
import './reset.css'
import styled from 'styled-components'
import { Provider } from 'rebass'
import { ThemeProvider, injectGlobal } from 'styled-components'

import rebassTheme, { globalStyles } from './rebass-theme'
import Grid, { Col, Row } from '../components/layout/Grid'
import ReactJSAcademyLogo from '../components/logos/ReactJSAcademy'
import Menu, { MenuItem } from '../components/navigation/Menu'

// Inject global styles required by Rebass
injectGlobal(globalStyles)

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: 46, // rem
      md: 64, // rem
      lg: 64 // rem
    }
  }
}

const Header = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`

const StyledFooter = styled.footer`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
`

const Footer = () => (
  <StyledFooter>
    <Grid>
      <Row>
        <Col xs={6}>
          <ReactJSAcademyLogo />
        </Col>
        <Col xs={6} style={{ paddingTop: "15px", textAlign: "right" }}>
          Copyright 2018
        </Col>
      </Row>
    </Grid>
  </StyledFooter>
)

const Layout = ({ children, data }) => (
  <ThemeProvider theme={gridTheme}>
    <Provider theme={rebassTheme}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Menu>
        <MenuItem to="/bootcamp">Bootcamp</MenuItem>
        <MenuItem to="/part-time">Part-time</MenuItem>
        <MenuItem to="/community">Community</MenuItem>
        <MenuItem to="/about-us">About us</MenuItem>
        <MenuItem to="/partners-sponsors">Partners & Sponsors</MenuItem>
      </Menu>
      <Header>
        <Grid>
          <ReactJSAcademyLogo />
        </Grid>
      </Header>
      {children()}
      <Footer />
    </Provider>
  </ThemeProvider>
)

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
