import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const GraphQLClientFundamentalsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Query and Mutation principles</Li>
      <Li>Do I need a GraphQL client?</Li>
      <Li>
        Apollo Client
        <Ul>
          <Li>Creating and connecting the React client</Li>
          <Li>Fetching data: queries and mutations</Li>
          <Li>Caching fundamentals</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

GraphQLClientFundamentalsSession.defaultProps = {
  title: 'Apollo Client Fundamentals',
}
// TODO remove this when training instance unit is fetched from the API
GraphQLClientFundamentalsSession.coachName = 'Vladimir Novick'

export default GraphQLClientFundamentalsSession
