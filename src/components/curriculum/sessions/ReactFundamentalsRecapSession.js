import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactFundamentalsRecapSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>React</Li>
      <Li>React Router</Li>
      <Li>Data fetching</Li>
    </Ul>
  </Session>
)

export default ReactFundamentalsRecapSession
