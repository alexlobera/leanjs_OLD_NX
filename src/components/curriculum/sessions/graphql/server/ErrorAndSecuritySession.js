import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ErrorAndSecuritySession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Error handling</Li>
      <Li>Authentication</Li>
      <Li>Authorization</Li>
    </Ul>
  </Session>
)

ErrorAndSecuritySession.defaultProps = {
  title: 'Error handling & security design',
}

export default ErrorAndSecuritySession
