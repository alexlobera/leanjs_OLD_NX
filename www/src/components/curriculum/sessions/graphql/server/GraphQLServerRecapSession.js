import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const GraphQLServerRecapSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>GraphQL server-side tooling</Li>
      <Li>
        Build a GraphQL API for your own project or use one suggested by the
        training to consolidate:
        <Ul>
          <Li>Server configuration</Li>
          <Li>Schema design</Li>
          <Li>Error handling & security design</Li>
          <Li>Deployment of you GraphQL API to the cloud</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

GraphQLServerRecapSession.defaultProps = {
  title: 'GraphQL API final project',
}

export default GraphQLServerRecapSession
