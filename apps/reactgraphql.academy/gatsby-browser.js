import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';

import { theme } from 'src/config/styles';
import GraphQLProvider from './src/api/graphql/Provider';
import { createClient } from './src/api/graphql/client';
import Layout from './src/components/layout';

/// init GTM for Google Ads
export const onRouteUpdate = ({ location }) => {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(...args);
  }

  gtag('js', new Date());
  gtag('config', 'AW-877316317');
};

const client = createClient();

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GraphQLProvider client={client}>{element}</GraphQLProvider>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
