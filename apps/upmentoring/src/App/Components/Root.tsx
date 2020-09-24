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
// import { ThemeProvider } from '@leanjs/ui-core';

import App from './App';
// import theme from '../Config/theme';
import { MagicProvider } from '@leanjs/magic-link';
import Modal from './Communication/Modal';
import { API_BASE_URL } from '../Config';
import { login } from '../../Auth/Api';

const cache = new InMemoryCache({});

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
    <MagicProvider magicKey={process.env.NX_MAGIC_LINK_PK_KEY} login={login}>
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
        });

        return (
          <ApolloProvider client={client}>
            {/* <ThemeProvider theme={theme}> */}
            <Modal>
              <Switch>
                <Route component={App} />
              </Switch>
            </Modal>
            {/* </ThemeProvider> */}
          </ApolloProvider>
        );
      }}
    </MagicProvider>
  </Router>
);

export default Root;
