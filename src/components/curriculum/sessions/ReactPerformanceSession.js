import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Performance'

const ReactPerformanceSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Performance
        <Ul>
          <Li>Profiling</Li>
          <Li>
            Avoiding renderings
            <Ul>
              <Li>React.memo</Li>
              <Li>React.PureComponent</Li>
              <Li>componentShouldUpdate</Li>
            </Ul>
          </Li>
          <Li>Windowing</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default ReactPerformanceSession
