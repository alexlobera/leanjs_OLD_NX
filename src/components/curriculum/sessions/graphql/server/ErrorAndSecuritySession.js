import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ErrorAndSecuritySession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Error handling
        <Ul>
          <Li>GraphQL errors explained</Li>
          <Li>Extensions fields</Li>
          <Li>Handling expected errors as fields</Li>
        </Ul>
      </Li>
      <Li>
        Security
        <Ul>
          <Li>Different attack vectors</Li>
          <Li>Persisted queries</Li>
          <Li>Query cost analysis</Li>
          <Li>Rate limiting</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>Be aware of the multiple attack vectors that exist in GraphQL APIs</Li>
    {showAll && (
      <>
        <Li>
          Get a good understanding on which measurements tackle which of the
          attack vectors to help you use them appropriately
        </Li>
        <Li>Differentiate between expected and unexpected errors</Li>
        <Li>
          Establish a good understanding of the ergonomics of global and field
          based errors to decide which are a better fit for your API
        </Li>
      </>
    )}
  </>
)

ErrorAndSecuritySession.defaultProps = {
  title: 'Error handling and security',
}
// TODO remove this when training instance unit is fetched from the API
ErrorAndSecuritySession.coachName = 'Nik Graf'

export default ErrorAndSecuritySession
