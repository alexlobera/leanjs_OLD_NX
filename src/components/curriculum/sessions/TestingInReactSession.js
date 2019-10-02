import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Testing in React'

const TestingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Unit Testing, Integration Testing, and Snapshot Testing</Li>
      <Li>Mocking and Dependency Injection in React </Li>
      <Li>Best practices to facilitate code refactoring</Li>
      <Li>Code Coverage</Li>
      <Li>
        Tooling:
        <Ul>
          <Li>React Testing Library</Li>
          <Li>Jest</Li>
          <Li>Enzyme</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default TestingInReactSession
