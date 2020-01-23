import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const FederationSession = ({ title, coach }) => (
  <Session title={title}>
    <Ul>
      <Li>Understanding Federation</Li>
      <Li>Building Federated Services</Li>
    </Ul>
  </Session>
)

FederationSession.defaultProps = {
  title: 'Apollo Federation',
}
// TODO remove this when training instance unit is fetched from the API
FederationSession.coachName = 'Eve Porcello'

export default FederationSession
