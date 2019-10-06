import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayOneSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Thinking in GraphQL
        <Ul>
          <Li>Switching from REST to GraphQL</Li>
          <Li>
            Schema
            <Ul>
              <Li>Types and Fields</Li>
              <Li>Queries and Mutations</Li>
              <Li>Unions, Interfaces, and Enums</Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
      <Li>
        Schema design
        <Ul>
          <Li>Schema-First vs Code-First/ Resolver-First</Li>
          <Li>Relay Cursor Connections Specification</Li>
        </Ul>
      </Li>
      <Li>
        Building a GraphQL API
        <Ul>
          <Li>Resolvers</Li>
          <Li>Rapid GraphQL development with mocked data</Li>
          <Li>Wrapping existent REST APIs with GraphQL</Li>
        </Ul>
      </Li>
      <Li>
        Error handling & security design
        <Ul>
          <Li>Error handling</Li>
          <Li>Authentication</Li>
          <Li>Authorization</Li>
        </Ul>
      </Li>
      <Li>
        GraphQL beyond the API
        <Ul>
          <Li>From GraphQL to TypeScript</Li>
          <Li>From SQL to GraphQL and more with Hasura.io (TBC)</Li>
          <Li>From traditional ORMs to GraphQL and more with Prisma (TBC)</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayOneSessions
