import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import fetch from 'node-fetch'
import raven from 'raven-js'
import { graphql, StaticQuery } from 'gatsby'

import './reset.css'
import './layout.css'
// import LayoutStyle from './layout.style'
import { UPMENTORING_API_URL, SENTRY_DSN } from '../config/apps'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import favicon from './favicon.ico'
import AcceptCookies from '../components/layout/AcceptCookies'
import { theme } from '../config/styles'
import { UpcomingTrainings } from '../components/training'
import FONT_BARLOW_400_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-400.woff2'
import FONT_BARLOW_500_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-500.woff2'
import FONT_BARLOW_800_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-800.woff2'

raven.config(SENTRY_DSN).install()

const configLink = {
  uri: UPMENTORING_API_URL,
  credentials: 'include',
  fetch,
}

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache(),
})

const makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem = [
  FONT_BARLOW_400_LATIN_EXT_WOFF2,
  FONT_BARLOW_500_LATIN_EXT_WOFF2,
  FONT_BARLOW_800_LATIN_EXT_WOFF2,
]
const preloadUrls = makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem.map(
  url => ({
    rel: 'preload',
    href: url,
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'crossorigin',
  })
)

// [Alex 2019-05-04] Do we need to add https://www.googletagmanager.com to this list if <script data-react-helmet="true" type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=AW-877316317" async="" is already on the head of the page?
const prefetchDnsUrls = [
  'https://www.googletagmanager.com',
  'https://api.autopilothq.com',
  'https://connect.facebook.net',
  'https://www.google-analytics.com',
  'https://apenterprise.io',
  'https://unpkg.com',
].map(href => ({
  rel: 'dns-prefetch',
  href,
}))

const preconnectUrls = [
  'https://api.upmentoring.com',
  'https://api.autopilothq.com',
].map(href => ({
  rel: 'preconnect',
  href,
  crossorigin: 'crossorigin',
}))

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={graphqlClient}>
            <React.Fragment>
              <Helmet
                title={data && data.site && data.site.siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content:
                      data && data.site && data.site.siteMetadata.description,
                  },
                  {
                    name: 'keywords',
                    content:
                      data && data.site && data.site.siteMetadata.keywords,
                  },
                ]}
                link={[
                  ...preloadUrls,
                  ...preconnectUrls,
                  ...prefetchDnsUrls,
                  { rel: 'icon', type: 'image/x-icon', href: `${favicon}` },
                ]}
                script={[
                  {
                    type: 'text/javascript',
                    src:
                      'https://www.googletagmanager.com/gtag/js?id=AW-877316317',
                    async: true,
                  },
                ]}
              />
              <Menu />
              {typeof children === 'function' ? (
                <UpcomingTrainings>{children}</UpcomingTrainings>
              ) : (
                children
              )}
              <Footer />
              <AcceptCookies />
            </React.Fragment>
          </ApolloProvider>
        </ThemeProvider>
      </React.Fragment>
    )}
  />
)

export default Layout
