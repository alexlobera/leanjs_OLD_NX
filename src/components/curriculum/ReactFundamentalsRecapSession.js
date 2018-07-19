import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const ReactFundamentalsRecapSession = ({ hideTitle }) => (
  <Session
    hideTitle={hideTitle}
    title="React Fundamentals recap, build a React app from scratch on your own to
    consolidate:"
  >
    <Ul>
      <Li>React</Li>
      <Li>React Router</Li>
      <Li>Data fetching</Li>
    </Ul>
  </Session>
)

export default ReactFundamentalsRecapSession
