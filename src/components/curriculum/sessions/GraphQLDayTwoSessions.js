import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DayTwoSessions = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Recap project, build a GraphQL API from scratch</Li>
      <Li>
        Advanced schema
        <Ul>
          <Li>Extensions, Unions, Interfaces, and Enums</Li>
          <Li>Schema directives</Li>
          <Li>Schema Link</Li>
          <Li>Schema modularity to avoid a monolithic schema</Li>
        </Ul>
      </Li>
      <Li>
        Performance
        <Ul>
          <Li>Data Loaders</Li>
          <Li>Caching</Li>
          <Li>Persisted queries</Li>
          <Li>Query batching</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayTwoSessions
