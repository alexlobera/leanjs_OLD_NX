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
import { UPMENTORING_API_URL, SENTRY_DSN } from '../config/apps'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import favicon from './favicon.ico'
import AcceptCookies from '../components/layout/AcceptCookies'
import { theme } from '../config/styles'
import { QueryUpcomingTrainings } from '../components/training'
import FONT_BARLOW_400_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-400.woff2'
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

const Layout = ({ children, loadAutopilot = true }) => {
  let prefetchDnsUrls = [
    'https://connect.facebook.net',
    'https://www.google-analytics.com',
  ]
  let preconnectUrls = ['https://api.upmentoring.com']
  let scriptUrls = []

  if (loadAutopilot) {
    preconnectUrls = [...preconnectUrls, 'https://api.autopilothq.com']
  }

  const prefetchDnsLinks = prefetchDnsUrls.map(href => ({
    rel: 'dns-prefetch',
    href,
  }))
  const preconnectLinks = preconnectUrls.map(href => ({
    crossorigin: 'crossorigin',
    rel: 'preconnect',
    href,
  }))
  const scriptTags = scriptUrls.map(src => (
    <script type="text/javascript" async="true" src={src} key={src} />
  ))

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
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
                  htmlAttributes={{
                    lang: 'en',
                  }}
                  title={data && data.site && data.site.siteMetadata.title}
                  meta={[
                    {
                      name: 'description',
                      content:
                        data && data.site && data.site.siteMetadata.description,
                    },
                  ]}
                  link={[
                    ...preloadUrls,
                    ...prefetchDnsLinks,
                    ...preconnectLinks,
                    {
                      rel: 'icon',
                      type: 'image/x-icon',
                      href: `${favicon}`,
                    },
                  ]}
                >
                  {scriptTags}
                </Helmet>
                <Menu />
                {typeof children === 'function' ? (
                  <QueryUpcomingTrainings>{children}</QueryUpcomingTrainings>
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
}

export default Layout
