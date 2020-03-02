import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'GraphQL in React 101'

const ReactGraphQLIntroSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Queries, Mutations, and Playground</Li>
      <Li>
        Apollo Client
        <Ul>
          <Li>ApolloProvider</Li>
          <Li>useQuery and useMutation</Li>
        </Ul>
      </Li>
      <Li>
        Best practices
        <Ul>
          <Li>Query colocation</Li>
          <Li>Fragment composition</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>
      Understand how GraphQL can speed up front-end development by reducing the
      amount of code we write and test
    </Li>
    {showAll && (
      <Li>
        Learn how to start developing data-driven apps with GraphQL and React
        that improve the developer experience.
      </Li>
    )}
  </>
)

ReactGraphQLIntroSession.defaultProps = {
  title: titleSession,
}

export default ReactGraphQLIntroSession
