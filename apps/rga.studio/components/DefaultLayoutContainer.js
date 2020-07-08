import React from 'react';
import DefaultLayoutContainer from 'part:@sanity/default-layout/root';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';

const link = ApolloLink.from([
  new BatchHttpLink({
    uri: 'https://api0.upmentoring.com/api/graphql',
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
