import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import fetch from 'node-fetch'
import raven from 'raven-js'

import './reset.css'
import { UPMENTORING_API_URL, SENTRY_DSN } from '../config/apps'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import './index.css'
import favicon from './favicon.ico'
import { RunkitProvider } from '../components/blog/Runkit'

raven.config(SENTRY_DSN).install()

const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: null, // rem
      md: null, // rem
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

const Layout = ({ children, data }) => {
  return (
    <RunkitProvider>
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
                {
                  type: 'text/javascript',
                  src:
                    'https://www.googletagmanager.com/gtag/js?id=AW-877316317',
                  async: true,
                },
              ]}
            />
            <Menu />
            {children()}
            <Footer />
          </React.Fragment>
        </ApolloProvider>
      </ThemeProvider>
    </RunkitProvider>
  )
}

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
