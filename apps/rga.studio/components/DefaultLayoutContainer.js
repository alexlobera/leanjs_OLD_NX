import React from 'react';
import DefaultLayoutContainer from 'part:@sanity/default-layout/root';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';

const devApiUrl = 'http://localhost:3334/graphql';

const link = ApolloLink.from([
  new BatchHttpLink({
    uri:
      process.env.NODE_ENV !== `development`
        ? 'https://api2.upmentoring.com/graphql'
        : devApiUrl,
    credentials: 'include',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function NewLayoutContainer(props) {
  return (
    <ApolloProvider client={client}>
      <DefaultLayoutContainer {...props} />;
    </ApolloProvider>
  );
}

export default NewLayoutContainer;
