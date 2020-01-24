import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const IntermediateApolloClientSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Building data-driven React applications</Li>
      <Li>
        Advanced GraphQL Queries
        <Ul>
          <Li>Query co-location</Li>
          <Li>Fragment composition</Li>
        </Ul>
      </Li>
      <Li>
        Advanced Mutations:
        <Ul>
          <Li>Error handling</Li>
          <Li>Updating cached queries</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

IntermediateApolloClientSession.defaultProps = {
  title: 'Intermediate Apollo Client',
}
// TODO remove this when training instance unit is fetched from the API
IntermediateApolloClientSession.coachName = 'Vladimir Novick'

export default IntermediateApolloClientSession
