import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Real-World Testing in React'

const TestingInReactSession2 = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Unit Testing Vs. Integration Testing in React</Li>
      <Li>Mocking and Dependency Injection in React </Li>
      <Li>Mocking and testing GraphQL in React</Li>
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

export default TestingInReactSession2
