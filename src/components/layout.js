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
import { useStaticQuery } from 'gatsby'

import selectUpcomingTrainings from './training/selectUpcomingTrainings'
import {
  createTrainingPath,
  formatMeetup,
  selectLocationImage,
} from './training/dataUtils'

import './reset.css'
import './layout.css'
import { UPMENTORING_API_URL, SENTRY_DSN } from '../config/apps'
import Menu from '../components/navigation/menu'
import Footer from '../components/layout/Footer'
import favicon from './favicon.ico'
import AcceptCookies from '../components/layout/AcceptCookies'
import { theme } from '../config/styles'
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

  const data = useStaticQuery(graphql`
    query layoutTraining {
      site {
        siteMetadata {
          title
          description
        }
      }
      upmentoring {
        eventsConnection(
          filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
          orderBy: { sort: startDate, direction: ASC }
        ) {
          edges {
            node {
              id
              title
              startDate
              utcOffset
              endDate
              city
              cityCountry
            }
          }
        }
        trainingInstancesConnection(
          filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
          orderBy: { sort: startDate, direction: ASC }
        ) {
          edges {
            node {
              id
              startDate
              utcOffset
              endDate
              city
              cityCountry
              daysOfTheWeek
              address
              venueName
              mapUrl
              price
              currency
              training {
                id
                type
                slug
                description {
                  title
                  objectives
                }
              }
            }
          }
        }
      }
    }
  `)

  const cityIndex = {}
  const formatTraining = ({ node }) => {
    const { type, slug, description } = node.training || {}
    const { title = '' } = description || {}
    const { city = '', id } = node
    const key = `${city}${type}${slug}`
    cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

    return {
      ...node,
      title,
      type,
      toPath: createTrainingPath({
        type,
        city,
        index: cityIndex[key],
        id,
        slug,
      }),
      image: selectLocationImage({ city }),
    }
  }

  const trainings = data.upmentoring.trainingInstancesConnection.edges.map(
    formatTraining
  )

  const meetups = data.upmentoring.eventsConnection.edges.map(formatMeetup)

  return (
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
            {typeof children === 'function'
              ? children({
                  trainings: selectUpcomingTrainings({
                    trainings: [...trainings, ...meetups],
                  }),
                })
              : children}
            <Footer />
            <AcceptCookies />
          </React.Fragment>
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
