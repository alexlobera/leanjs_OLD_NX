import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Performance'

const ReactPerformanceSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Profiling</Li>
      <Li>
        Avoiding renderings
        <Ul>
          <Li>Encapsulated state</Li>
          <Li>React.memo and immutability</Li>
        </Ul>
      </Li>
      <Li>Windowing</Li>
    </Ul>
  </Session>
)

export default ReactPerformanceSession
