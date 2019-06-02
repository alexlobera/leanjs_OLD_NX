import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactPerformanceSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Profiling</Li>
      <Li>
        Avoiding rendering
        <Ul>
          <Li>componentShouldUpdate</Li>
          <Li>React.PureComponent</Li>
          <Li>React.memo</Li>
        </Ul>
      </Li>
      <Li>Windowing</Li>
      <Li>Memoization</Li>
      <Li>Code splitting with React.lazy and Suspense</Li>
    </Ul>
  </Session>
)

export default ReactPerformanceSession
