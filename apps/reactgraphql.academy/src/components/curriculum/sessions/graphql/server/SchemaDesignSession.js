import React from 'react';
import Ul, { Li } from '../../../../layout/Ul';
import Session from '../../Session';

const SchemaDesignSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        GraphQL schema design process
        <Ul>
          <Li>Where to start?</Li>
          <Li>Domain-driven Design</Li>
        </Ul>
      </Li>
      <Li>
        Queries
        <Ul>
          <Li>Naming top-level Query Fields in GraphQL</Li>
          <Li>Naming Conventions for Fields</Li>
          <Li>Naming Conventions leveraging Aliases</Li>
        </Ul>
      </Li>
      <Li>Nullable vs Non-nullable Fields in GraphQL</Li>
      <Li>
        Mutations
        <Ul>
          <Li>Updating Connections</Li>
          <Li>Tradeoffs when updating multiple Properties on one Entity</Li>
        </Ul>
      </Li>
      <Li>
        Error handling
        <Ul>
          <Li>GraphQL Errors explained</Li>
          <Li>Handling expected errors as fields</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
);

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>Be aware of the multiple attack vectors that exist in GraphQL APIs</Li>
    {showAll && (
      <>
        <Li>
          Get a good understanding of which measurements tackle which of the
          attack vectors to help you use them appropriately
        </Li>
        <Li>
          Establish a good understanding of the ergonomics of global and
          field-based errors to decide which are a better fit for your API
        </Li>
      </>
    )}
  </>
);

SchemaDesignSession.defaultProps = {
  title: 'Schema Design',
};
// TODO remove this when training instance unit is fetched from the API
SchemaDesignSession.coachName = 'Nik Graf';

export default SchemaDesignSession;
