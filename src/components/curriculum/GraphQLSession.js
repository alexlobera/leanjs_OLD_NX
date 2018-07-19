import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const GraphQLSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        GraphQL
        <Ul>
          <Li>
            Understand the fundamental differences between a REST API and a
            GraphQL API
          </Li>
          <Li>GraphQL Queries & Mutations</Li>
          <Li>Relay Connections</Li>
        </Ul>
      </Li>
      <Li>
        Apollo client
        <Ul>
          <Li>Connecting an Apollo client to a GraphQL server</Li>
          <Li>
            Implement infinite scrolling in a React app using Apollo on the
            client-side and a Relay connection on the server-side
          </Li>
          <Li>
            Update the state of your React app using mutations and Apollo client
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default GraphQLSession
