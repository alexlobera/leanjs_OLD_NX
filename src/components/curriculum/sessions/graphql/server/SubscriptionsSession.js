import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const SubscriptionsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Connection and disconnection strategies</Li>
      <Li>Publishing data</Li>
      <Li>Scaling subscriptions</Li>
    </Ul>
  </Session>
)

SubscriptionsSession.defaultProps = {
  title: 'GraphQL Subscriptions',
}
// TODO remove this when training instance unit is fetched from the API
SubscriptionsSession.coachName = 'Eve Porcello'

export default SubscriptionsSession
