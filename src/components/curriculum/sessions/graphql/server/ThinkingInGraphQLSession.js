import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ThinkingInGraphQLSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Switching from REST to GraphQL
        <Ul>
          <Li>What GraphQL is and what it is not</Li>
          <Li>Advantages of GraphQL over REST</Li>
        </Ul>
      </Li>
      <Li>
        Schema fundamentals
        <Ul>
          <Li>Schema Definition Language (SDL)</Li>
          <Li>Types and Fields</Li>
          <Li>Queries and Mutations</Li>
        </Ul>
      </Li>
      <Li>
        GraphQL API
        <Ul>
          <Li>Query validation and execution</Li>
          <Li>Resolvers</Li>
          <Li>Rapid GraphQL development with mocked data</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>
      Understand the main functionalities and responsibilities of a GraphQL
      Server
    </Li>
    {showAll && (
      <>
        <Li>
          Learn how to migrate an existent REST API to GraphQL and start
          “thinking in graphs”
        </Li>
        <Li>
          Start identifying potential problems when running real-world GraphQL
          APIs
        </Li>
      </>
    )}
  </>
)

ThinkingInGraphQLSession.defaultProps = {
  title: 'Thinking in GraphQL',
}
// TODO remove this when training instance unit is fetched from the API
ThinkingInGraphQLSession.coachName = 'Alex Lobera'

export default ThinkingInGraphQLSession
