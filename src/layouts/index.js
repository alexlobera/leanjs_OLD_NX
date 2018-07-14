import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Grid from '../components/layout/Grid'

import 'normalize.css'

import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'
import theme, { globalStyles } from './rebass-theme'

// Inject global styles required by Rebass
injectGlobal(globalStyles)

const Layout = ({ children, data }) => (
  <Provider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Grid>
        {children()}
      </Grid>
    </div>
  </Provider>
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
