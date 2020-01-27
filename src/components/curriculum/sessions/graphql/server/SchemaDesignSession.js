import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

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
          <Li>Naming conventions for fields</Li>
          <Li>Naming conventions leveraging aliases</Li>
          <Li>Pagination using the Connection Specification</Li>
          <Li>Extending GraphQL connections</Li>
          <Li>Naming top-level query fields in GraphQL</Li>
        </Ul>
      </Li>
      <Li>Nullable vs non-nullable fields in GraphQL</Li>
      <Li>
        Mutations
        <Ul>
          <Li>Input and payload structure</Li>
          <Li>Domain Driven</Li>
          <Li>Updating connections</Li>
          <Li>Tradeoffs when updating multiple properties on one entity</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export const LearningObjectives = (
  <Ul>
    <Li>
      Feel comfortable designing a GraphQL schema based on established patterns
      like the Input Object Mutations or Connection Specification
    </Li>
    <Li>
      Understand the tradeoffs between various patterns and where it's
      appropriate to apply them
    </Li>
  </Ul>
)

SchemaDesignSession.defaultProps = {
  title: 'Schema Design',
}
// TODO remove this when training instance unit is fetched from the API
SchemaDesignSession.coachName = 'Nik Graf'

export default SchemaDesignSession
