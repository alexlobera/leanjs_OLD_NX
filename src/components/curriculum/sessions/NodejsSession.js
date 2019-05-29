import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const NodejsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Foundation: npm and Node architecture</Li>
      <Li>ExpressJS: Server, middlewares, and routing</Li>
    </Ul>
  </Session>
)

export default NodejsSession
