import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const FederationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Overview of microservice architecture
        <Ul>
          <Li>The scale cube</Li>
          <Li>GraphQL microservices</Li>
        </Ul>
      </Li>
      <Li>Federated services with Apollo Server</Li>
      <Li>GraphQL gateway</Li>
      <Li>Resolving types</Li>
      <Li>Entities</Li>
      <Li>Auth strategies</Li>
    </Ul>
  </Session>
)

export const LearningObjectives = (
  <Ul>
    <Li>
      Understand of how to orchestrate a collection of GraphQL APIs under a
      single GraphQL gateway
    </Li>
    <Li>Scale your graph across teams</Li>
    <Li>
      Incorporate developer tools to encourage team collaboration and code
      quality
    </Li>
  </Ul>
)

FederationSession.defaultProps = {
  title: 'Apollo Federation',
}
// TODO remove this when training instance unit is fetched from the API
FederationSession.coachName = 'Eve Porcello'

export default FederationSession
