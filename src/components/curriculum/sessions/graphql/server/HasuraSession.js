import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const HasuraSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Hasura Basics</Li>
      <Li>Using Hasura with new or existing Postgres</Li>
      <Li>Authorization</Li>
      <Li>Authentication</Li>
      <Li>Custom business logic</Li>
      <Li>Remote schemas and event triggers</Li>
    </Ul>
  </Session>
)

export const LearningObjectives = (
  <Ul>
    <Li>
      Learn what is Hasura engine and how you can use it to auto generate
      GraphQL APIs on top of new or existing Postgres databases
    </Li>
    <Li>
      Understand how to use authentication and how to write your own serverless
      business logic
    </Li>
  </Ul>
)

HasuraSession.defaultProps = {
  title: 'Hasura',
}
// TODO remove this when training instance unit is fetched from the API
HasuraSession.coachName = 'Vladimir Novick'

export default HasuraSession
