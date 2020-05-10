import React, { useEffect } from "react";
import DefaultLayoutContainer from "part:@sanity/default-layout/root";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://api0.upmentoring.com/api/graphql",
  credentials: "include"
});

function NewLayoutContainer(props) {
  return (
    <ApolloProvider client={client}>
      <DefaultLayoutContainer {...props} />;
    </ApolloProvider>
  );
}

export default NewLayoutContainer;
