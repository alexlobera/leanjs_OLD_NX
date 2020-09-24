import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import theme from '../Config/theme';
import { ThemeProvider } from '../Config/styled-components';
import MagicProvider from '../../Auth/Components/MagicProvider';
import Modal from './Communication/Modal';
import { API_BASE_URL } from '../Config';
import { login } from '../../Auth/Api'

const cache = new InMemoryCache({});

function requireSignup(email: string) {
  return ![
    'alex@leanjs.com',
    'lena@leanjs.com',
    'ingrid@leanjs.com',
    'franciscogomestv@gmail.com',
  ].find((e) => e === email);
}

// const login = (token: string) =>
//   fetch(`${API_BASE_URL}/auth`, {
//     credentials: 'include',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

const httpLink = new HttpLink({
  uri: `${API_BASE_URL}/graphql`,
  credentials: 'include',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => toast(message));
  if (networkError) {
    toast(networkError.message);
  }
});

const Root = () => (
  <Router>
    <ToastContainer />
    <MagicProvider requirePreSignup={requireSignup} login={login}>
      {({ getToken }: any) => {
        const authLink = setContext(async (_, { headers, ...context }) => {
          const token = await getToken();
          return {
            headers: {
              ...headers,
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
              'x-um-orgid': '@VVNFOjVhYWE5YjA3ZjE0NmU1Y2ZhZmFkMTg5ZQ==',
            },
            ...context,
          };
        });

        const client = new ApolloClient({
          link: from([authLink, errorLink, httpLink]),
          cache,
          //   defaultOptions: {
          //     watchQuery: {
          //       fetchPolicy: 'cache-and-network',
          //     },
          //   },
        });

        return (
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <Modal>
                <Switch>
                  <Route component={App} />
                </Switch>
              </Modal>
            </ThemeProvider>
          </ApolloProvider>
        );
      }}
    </MagicProvider>
  </Router>
);

export default Root;
