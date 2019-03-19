import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayFourSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Apollo Client fundamentals
        <Ul>
          <Li>Apollo Client</Li>
          <Li>Query and Mutation principles</Li>
        </Ul>
      </Li>
      <Li>
        Advanced GraphQL Queries
        <Ul>
          <Li>Query co-location</Li>
          <Li>Fragment composition</Li>
          <Li>Extending the Schema on the client</Li>
        </Ul>
      </Li>
      <Li>
        Advanced Mutations:
        <Ul>
          <Li>Error handling</Li>
          <Li>Optimistic UI</Li>
          <Li>Updating cached queries</Li>
        </Ul>
      </Li>
      <Li>
        Performance
        <Ul>
          <Li>Prefetching data</Li>
          <Li>Query batching</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayFourSessions
