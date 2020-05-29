import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ToolingAndPracticesSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        GraphQL Adoption strategies
        <Ul>
          <Li>How to Make a Business Case for GraphQL</Li>
          <Li>Dealing efficiently with backend sources we don’t control</Li>
          <Li>Using GraphQL to query legacy sources (REST, gRPC, SOAP, etc)</Li>
        </Ul>
      </Li>
      <Li>
        Productivity tools
        <Ul>
          <Li>How to work together on a shared graph</Li>
          <Li>Keeping complete Type-safety</Li>
        </Ul>
      </Li>
      <Li>
        Running GraphQL on production
        <Ul>
          <Li>Finding your GraphQL performance bottlenecks easily</Li>
          <Li>
            Monitoring your GraphQL server using your existing infrastructure
          </Li>
          <Li>
            New versioning paradigm in GraphQL - supporting multiple clients
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>
      Learn how to adopt GraphQL incrementally in large organizations with
      legacy code
    </Li>
    {showAll && (
      <>
        <Li>Learn productivity tools for devs and teams</Li>
        <Li>Understand how to monitor and scale GraphQL APIs</Li>
      </>
    )}
  </>
)

ToolingAndPracticesSession.defaultProps = {
  title: 'Advanced tooling and practices',
}
// TODO remove this when training instance unit is fetched from the API
ToolingAndPracticesSession.coachName = 'Uri Goldshtein'

export default ToolingAndPracticesSession
