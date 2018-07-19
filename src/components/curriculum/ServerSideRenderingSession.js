import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const ServerSideRenderingSession = ({ hideTitle }) => (
  <Session hideTitle={hideTitle} title="Server Side Rendering (SSR) with React">
    <Ul>
      <Li>Nodejs + React + React Router</Li>
      <Li>Universal Redux</Li>
      <Li>GraphQL SSR</Li>
      <Li>Styled-componets SSR</Li>
    </Ul>
  </Session>
)

export default ServerSideRenderingSession
