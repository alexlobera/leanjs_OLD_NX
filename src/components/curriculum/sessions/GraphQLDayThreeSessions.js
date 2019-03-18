import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayThreeSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Data sources
        <Ul>
          <Li>Wrapping existent REST APIs & microservices with GraphQL</Li>
          <Li>
            MongoDB
            <Ul>
              <Li>Thinking in Documents</Li>
              <Li>Using MongoDB and GraphQL</Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
      <Li>
        GraphQL in production
        <Ul>
          <Li>Monitoring</Li>
          <Li>Logging</Li>
          <Li>Error Handling</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayThreeSessions
