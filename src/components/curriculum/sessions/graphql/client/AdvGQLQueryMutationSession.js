import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const AdvGQLQueryMutationSession = ({ title }) => (
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

AdvGQLQueryMutationSession.defaultProps = {
  title: 'Advanced Queries & Mutations in React',
}

export default AdvGQLQueryMutationSession
