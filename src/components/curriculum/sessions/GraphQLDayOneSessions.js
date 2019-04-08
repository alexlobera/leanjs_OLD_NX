import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayOneSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Nodejs
        <Ul>
          <Li>Foundation: npm and Node architecture</Li>
          <Li>ExpressJS: Server, middlewares, and routing</Li>
        </Ul>
      </Li>
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
          <Li>graphql-express and Apollo</Li>
          <Li>Rapid GraphQL development with mocked schemas</Li>
          <Li>Resolvers</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayOneSessions
