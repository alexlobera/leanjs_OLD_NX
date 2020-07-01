import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const GraphQLClientConsolidationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>GraphQL Tooling to speed up front-end development</Li>
      <Li>
        Bring your own project or use one suggested by the training to
        consolidate:
        <Ul>
          <Li>Client configuration</Li>
          <Li>Data fetching</Li>
          <Li>Caching</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
);

GraphQLClientConsolidationSession.defaultProps = {
  title: 'GraphQL Client consolidation project',
};

export default GraphQLClientConsolidationSession;
