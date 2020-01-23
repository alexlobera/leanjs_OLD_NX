import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const SchemaDesignSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        GraphQL Schema Design Process
        <Ul>
          <Li>Where to start?</Li>
          <Li> Domain-driven Design</Li>
        </Ul>
      </Li>
      <Li>
        Queries
        <Ul>
          <Li>Naming Conventions for Fields</Li>
          <Li>Naming Conventions leveraging Aliases</Li>
          <Li>Pagination using the Connection Specification</Li>
          <Li>Extending GraphQL Connections</Li>
          <Li>Naming top-level Query Fields in GraphQL</Li>
        </Ul>
      </Li>
      <Li>Nullable vs Non-nullable Fields in GraphQL</Li>
      <Li>
        Mutations
        <Ul>
          <Li>Input and Payload Structure</Li>
          <Li>Domain Driven</Li>
          <Li>Updating Connections</Li>
          <Li>Tradeoffs when updating multiple Properties on one Entity</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

SchemaDesignSession.defaultProps = {
  title: 'Schema Design',
}
// TODO remove this when training instance unit is fetched from the API
SchemaDesignSession.coachName = 'Nik Graf'

export default SchemaDesignSession
