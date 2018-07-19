import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const TestingInReact = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Unit Testing, Integration Testing, and Shapshot Testing</Li>
      <Li>Tooling: Enzyme & Jest</Li>
      <Li>Testing Components, Higher-Order Components, Connected Containers</Li>
      <Li>Unit tests Vs integration tests</Li>
      <Li>Code Coverage</Li>
    </Ul>
  </Session>
)

export default TestingInReact
