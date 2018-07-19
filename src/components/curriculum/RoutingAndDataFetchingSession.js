import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const RoutingAndDataFetchingSession = ({ hideTitle }) => (
  <Session hideTitle={hideTitle} title="Routing and Data Fetching">
    <Ul>
      <Li>
        React Router v4
        <Ul>
          <Li>Declarative routing</Li>
          <Li>Implementing a master-detail web application</Li>
        </Ul>
      </Li>
      <Li>Component lifecycle</Li>
      <Li>
        Data management
        <Ul>
          <Li>Presentational Components Vs. Container Components</Li>
          <Li>Data fetching</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default RoutingAndDataFetchingSession
