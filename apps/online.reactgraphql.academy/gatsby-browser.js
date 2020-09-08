import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';

import { login } from './src/api';
import GraphQLProvider from './src/api/graphql/Provider';
import { createClient } from './src/api/graphql/client';
import theme from './src/config/theme';
import './src/config/site.css';
import MagicProvider from './src/components/auth/MagicProvider';

export const wrapRootElement = ({ element }) => (
  <MagicProvider login={login}>
    {({ getToken }) => (
      <GraphQLProvider client={createClient({ getToken })}>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </GraphQLProvider>
    )}
  </MagicProvider>
);
