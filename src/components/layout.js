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

let prefetchDnsUrls = []
let preconnectUrls = ['https://api.upmentoring.com']
let scriptUrls = []

const Layout = ({
  children,
  loadAutopilot = true,
  loadGoogleTagManager = true,
}) => {
  if (loadAutopilot) {
    preconnectUrls = [...preconnectUrls, 'https://api.autopilothq.com']
    prefetchDnsUrls = [
      ...prefetchDnsUrls,
      'https://apenterprise.io',
      'https://unpkg.com',
    ]
    scriptUrls = [
      ...scriptUrls,
      'https://unpkg.com/jquery@3.4.1/dist/jquery.min.js',
    ]
  }
  if (loadGoogleTagManager) {
    prefetchDnsUrls = [
      ...prefetchDnsUrls,
      'https://connect.facebook.net',
      'https://www.google-analytics.com',
    ]
    scriptUrls = [
      ...scriptUrls,
      'https://www.googletagmanager.com/gtag/js?id=AW-877316317',
    ]
  }
  const prefetchDnsLinks = prefetchDnsUrls.map(href => ({
    rel: 'dns-prefetch',
    href,
  }))
  const preconnectLinks = preconnectUrls.map(href => ({
    rel: 'preconnect',
    href,
    crossorigin: 'crossorigin',
  }))
  const scriptTags = scriptUrls.map(src => ({
    type: 'text/javascript',
    src,
    async: true,
  }))

  return (
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
                  // script={[...scriptTags]}
                >
                  {scriptTags.map(props => (
                    <script {...props} />
                  ))}
                  {loadAutopilot && (
                    <script key="plugin-autopilot">
                      {`
          (function(o){var b="https://api.autopilothq.com/anywhere/",t="ec24be3b2c6348a48c647a446b08bb8402fda7caa24b43d3950598d3fef58486",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":true});
        `}
                    </script>
                  )}
                </Helmet>
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
}

export default Layout
