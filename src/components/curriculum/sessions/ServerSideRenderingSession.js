import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ServerSideRenderingSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Webpack</Li>
      <Li>Nodejs + React + React Router</Li>
      <Li>Universal Redux</Li>
      <Li>GraphQL SSR</Li>
      <Li>Styled-componets SSR</Li>
    </Ul>
  </Session>
)

export default ServerSideRenderingSession
