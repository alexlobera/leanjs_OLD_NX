import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const GraphQLClientFundamentalsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Fetching data with GraphQL queries</Li>
      <Li>Changing data using GraphQL mutations</Li>
      <Li>Caching GraphQL data</Li>
      <Li>Authentication</Li>
      <Li>Error handling</Li>
    </Ul>
  </Session>
);

export const LearningObjectives = ({ showAll = true }) => (
  <Li>Learn how to consume GraphQL APIs in React using Apollo Client</Li>
);

GraphQLClientFundamentalsSession.defaultProps = {
  title: 'Apollo Client Fundamentals',
};
// TODO remove this when training instance unit is fetched from the API
GraphQLClientFundamentalsSession.coachName = 'Vladimir Novick';

export default GraphQLClientFundamentalsSession;
