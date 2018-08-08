import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import fetch from 'node-fetch'
import raven from 'raven-js'

// TODO REMOVE THE OLD_CHECKOUT CSS WHEN WE REIMPLEMENT IT
import '../components/old_checkout'
import './reset.css'

import { UPMENTORING_API_URL, SENTRY_DSN } from '../config/apps'
import Modal from '../components/old_checkout/components/Modal'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import './index.css'
import favicon from './favicon.ico'

raven.config(SENTRY_DSN).install()

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

const configLink = {
  uri: UPMENTORING_API_URL,
  credentials: 'include',
  fetch,
}

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache(),
})

const Layout = ({ children, data }) => (
  <ThemeProvider theme={gridTheme}>
    <ApolloProvider client={graphqlClient}>
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
          script={[
            {
              type: 'text/javascript',
              src: 'https://unpkg.com/jquery/dist/jquery.min.js',
            },
          ]}
        />
        <Menu />
        <Modal>{children()}</Modal>
        <Footer />
      </React.Fragment>
    </ApolloProvider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

Layout.defaultProps = {
  data: {
    site: {
      siteMetadata: {},
    },
  },
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
