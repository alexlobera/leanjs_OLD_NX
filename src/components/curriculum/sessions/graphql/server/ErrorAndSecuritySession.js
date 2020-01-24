import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ErrorAndSecuritySession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Error handling
        <Ul>
          <Li>GraphQL Errors explained</Li>
          <Li>Extensions Fields</Li>
          <Li>Handling expected errors as fields</Li>
        </Ul>
      </Li>
      <Li>
        Security
        <Ul>
          <Li>Different attack vectors</Li>
          <Li>Persistent Queries</Li>
          <Li>Query Cost Analysis</Li>
          <Li>Rate limiting</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

ErrorAndSecuritySession.defaultProps = {
  title: 'Error handling and security',
}
// TODO remove this when training instance unit is fetched from the API
ErrorAndSecuritySession.coachName = 'Nik Graf'

export default ErrorAndSecuritySession
