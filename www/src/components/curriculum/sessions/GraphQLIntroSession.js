import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const GraphQLIntroSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Queries</Li>
      <Li>Mutations</Li>
      <Li>
        Apollo Client
        <Ul>
          <Li>Render Props pattern</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default GraphQLIntroSession
