import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';
import { MagicProvider } from '@leanjs/magic-link';
import { GraphQLProvider, createHttpLink } from '@leanjs/graphql-client';
import { fetch } from 'whatwg-fetch';
// import {
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
//   HttpLink,
//   from,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import { login } from './src/api';
import theme from './src/config/theme';
import './src/config/site.css';

// const cache = new InMemoryCache();
// const httpLink = new HttpLink({
//   uri:
//     `${process.env.GATSBY_UPMENTORING_GRAPHQL_API_BASE_URL}/graphql` ||
//     'https://api2.upmentoring.com/graphql',
//   credentials: 'include',
//   fetch,
// });

export const wrapRootElement = ({ element }) => (
  <MagicProvider login={login}>
    {({ getToken }) => {
      // const authLink = setContext(async (_, { headers, ...context }) => {
      //   const token = await getToken();
      //   return {
      //     headers: {
      //       ...headers,
      //       ...(token ? { Authorization: `Bearer ${token}` } : {}),
      //       'x-um-orgid': '@VVNFOjVhYWE5YjA3ZjE0NmU1Y2ZhZmFkMTg5ZQ==',
      //     },
      //     ...context,
      //   };
      // });

      // const client = new ApolloClient({
      //   link: from([authLink, httpLink]),
      //   cache,
      // });

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
          })}
        >
          {/* <ApolloProvider client={client}> */}
          <ThemeProvider theme={theme}>{element}</ThemeProvider>
          {/* </ApolloProvider> */}
        </GraphQLProvider>
      );
    }}
  </MagicProvider>
);
