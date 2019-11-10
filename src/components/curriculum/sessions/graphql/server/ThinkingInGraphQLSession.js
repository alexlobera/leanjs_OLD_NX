import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const ThinkingInGraphQLSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Switching from REST to GraphQL</Li>
      <Li>
        Schema fundamentals
        <Ul>
          <Li>Types and Fields</Li>
          <Li>Queries and Mutations</Li>
        </Ul>
      </Li>
      <Li>
        Building a GraphQL API
        <Ul>
          <Li>Resolvers</Li>
          <Li>Rapid GraphQL development with mocked data</Li>
          <Li>Wrapping existent REST APIs with GraphQL</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

ThinkingInGraphQLSession.defaultProps = {
  title: 'Thinking in GraphQL',
}

export default ThinkingInGraphQLSession
