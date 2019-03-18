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
          <Li>Unions</Li>
          <Li>Type extensions</Li>
          <Li>Fragments</Li>
          <Li>Schema modularity to avoid a monolithic schema</Li>
          <Li>Publishing and registering the schema</Li>
        </Ul>
      </Li>
      <Li>
        Performance
        <Ul>
          <Li>Data Loaders</Li>
          <Li>Query batching</Li>
          <Li>Cache backend</Li>
          <Li>Persisted queries</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DayTwoSessions
