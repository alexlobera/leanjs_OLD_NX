import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ConsolidationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Consolidate your GraphQL API
        <Ul>
          <Li>Improve your previous schema design decisions</Li>
          <Li>Deploy your GraphQL</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

ConsolidationSession.defaultProps = {
  title: 'Consolidation project part 2',
}

export default ConsolidationSession
