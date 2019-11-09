import React from 'react'
import Ul, { Li } from '../../../../layout/Ul'
import Session from '../../Session'

const NodejsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Foundation: npm and Node architecture</Li>
      <Li>ExpressJS: Server, middlewares, and routing</Li>
      <Li>Serverless: deploying an Express API to the cloud</Li>
    </Ul>
  </Session>
)

NodejsSession.defaultProps = {
  title: 'Node.js and cloud fundamentals',
}

export default NodejsSession
