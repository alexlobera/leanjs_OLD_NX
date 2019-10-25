import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'src/config/styles'
import CacheProvider from './src/components/cacheProvider'

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
    <CacheProvider>{element}</CacheProvider>
  </ThemeProvider>
)
