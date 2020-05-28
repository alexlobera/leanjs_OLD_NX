import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ConsolidationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Build a GraphQL API from scratch:
        <Ul>
          <Li>Bring your own project or build one suggested by the training</Li>
          <Li>
            Get started migrating your existing REST APIs to GraphQL and get
            advice from our expert coaches.
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

ConsolidationSession.defaultProps = {
  title: 'Consolidation project part 1',
}

export default ConsolidationSession
