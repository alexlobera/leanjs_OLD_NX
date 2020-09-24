import React from 'react';
import { navigate } from 'gatsby';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';
import { MagicProvider } from '@leanjs/magic-link';
import { GraphQLProvider, createHttpLink } from '@leanjs/graphql-client';
import { fetch } from 'whatwg-fetch';
import Cookies from 'js-cookie';
////
import { login } from './src/api';
import theme from './src/config/theme';
import './src/config/site.css';

export const wrapRootElement = ({ element }) => (
  <MagicProvider login={login}>
    {({ getToken, logout }) => {
      return (
        <GraphQLProvider
          link={createHttpLink({
            headers: {
              'x-um-orgid': '@VVNFOjVhYWE5YjA3ZjE0NmU1Y2ZhZmFkMTg5ZQ==',
              Authorization: async () => {
                const token = await getToken();
                return token ? `Bearer ${token}` : '';
              },
            },
            uri:
              `${process.env.GATSBY_UPMENTORING_GRAPHQL_API_BASE_URL}/graphql` ||
              'https://api2.upmentoring.com/graphql',
            fetcher: fetch,
            onError: ({ networkError }) => {
              if (networkError.statusCode === 401) {
                Cookies.remove('__user');
                logout();
                navigate('/login');
              }
            },
          })}
        >
          <ThemeProvider theme={theme}>{element}</ThemeProvider>
        </GraphQLProvider>
      );
    }}
  </MagicProvider>
);
