import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'src/config/styles'
import GraphQLProvider from './src/api/graphql/Provider'
import graphqlClient from './src/api/graphql/client'

// init GTM for Google Ads
export const onRouteUpdate = ({ location }) => {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'AW-877316317')
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GraphQLProvider client={graphqlClient}>{element}</GraphQLProvider>
  </ThemeProvider>
)
