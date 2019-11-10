import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const SchemaDesignSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Unions, Interfaces, and Enums</Li>
      <Li>GraphQL Aliases</Li>
      <Li>Mutation Payload Design</Li>
      <Li>Schema-First vs Code-First/ Resolver-First</Li>
      <Li>Relay Cursor Connections Specification</Li>
    </Ul>
  </Session>
)

SchemaDesignSession.defaultProps = {
  title: 'Schema design',
}

export default SchemaDesignSession
