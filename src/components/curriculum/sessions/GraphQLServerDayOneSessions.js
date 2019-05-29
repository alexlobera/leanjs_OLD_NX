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
              <Li>Types</Li>
              <Li>Fields</Li>
              <Li>Queries</Li>
              <Li>Mutations</Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
      <Li>
        Building a GraphQL API
        <Ul>
          <Li>Resolvers</Li>
          <Li>Rapid GraphQL development with mocked schemas</Li>
          <Li>Schema design Vs resolver design</Li>
          <Li>Relay Cursor Connections Specification</Li>
        </Ul>
      </Li>
      <Li>
        Data sources
        <Ul>
          <Li>Wrapping existent REST APIs & microservices with GraphQL</Li>
          <Li>Connecting GraphQL to databases</Li>
        </Ul>
      </Li>
      <Li>
        Security design
        <Ul>
          <Li>Authentication</Li>
          <Li>Authorization</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayOneSessions
