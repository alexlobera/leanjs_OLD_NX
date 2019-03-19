import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayFiveSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Testing GraphQL queries and mutations:
        <Ul>
          <Li>Integration tests</Li>
          <Li>Mocking</Li>
        </Ul>
      </Li>
      <Li>
        Real time:
        <Ul>
          <Li>Polling</Li>
          <Li>GraphQL subscriptions</Li>
        </Ul>
      </Li>
      <Li>
        Replacing Redux with GraphQL
        <Ul>
          <Li>Strategy and best practices</Li>
          <Li>Apollo Local state vs React Context</Li>
        </Ul>
      </Li>
      <Li>GraphQL Tooling to speed up front-end development</Li>
    </Ul>
  </Session>
)

export default DayFiveSessions
