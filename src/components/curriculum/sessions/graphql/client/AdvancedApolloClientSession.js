import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const AdvancedApolloClientSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Managing local state</Li>
      <Li>Using fragments for code reuse</Li>
      <Li>Pagination</Li>
      <Li>Improving performance</Li>
      <Li>Advanced networking with Apollo Link</Li>
    </Ul>
  </Session>
)

export const LearningObjectives = (
  <Ul>
    <Li>
      Learn how to use Apollo Client to improve code reusability and performance
    </Li>
    <Li>
      Adapt your app to more use cases by customizing networking and extending
      GraphQL local state
    </Li>
  </Ul>
)

AdvancedApolloClientSession.defaultProps = {
  title: 'Intermediate Apollo Client',
}
// TODO remove this when training instance unit is fetched from the API
AdvancedApolloClientSession.coachName = 'Vladimir Novick'

export default AdvancedApolloClientSession
