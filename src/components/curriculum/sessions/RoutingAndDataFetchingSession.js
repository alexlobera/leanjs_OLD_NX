import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Routing and Data Fetching'

const RoutingAndDataFetchingSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>
        React Router
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
