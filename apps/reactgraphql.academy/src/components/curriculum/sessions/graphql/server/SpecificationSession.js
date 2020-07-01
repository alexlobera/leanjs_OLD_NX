import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const SessionSpec = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Schemas and Types
        <Ul>
          <Li>SDL-first Vs code-first</Li>
          <Li>Execution context</Li>
          <Li>
            Types:
            <Ul>
              <Li>Scalar Types </Li>
              <Li>Enumeration Types </Li>
              <Li>Input Types</Li>
              <Li>Interfaces</Li>
              <Li>Inline Fragments </Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
      <Li>
        GraphQL specifications
        <Ul>
          <Li>The GraphQL spec</Li>
          <Li>Should my API comply with other GraphQL specifications?</Li>
          <Li>GraphQL Cursor Connections Specification</Li>
          <Li>Global Object Identification</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
);

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>
      Learn how to connect your GraphQL API to different data sources such as a
      REST API or a database
    </Li>
    {showAll && (
      <>
        <Li>
          Design standard GraphQL schemas compliant with different GraphQL
          specifications like the "connection spec"
        </Li>
      </>
    )}
  </>
);

SessionSpec.defaultProps = {
  title: 'GraphQL schema and specs',
};

export default SessionSpec;
