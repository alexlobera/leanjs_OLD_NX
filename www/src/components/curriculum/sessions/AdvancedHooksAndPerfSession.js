import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Advanced Hooks and Performance'

const AdvancedHooksAndPerfSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Advanced Hooks
        <Ul>
          <Li>Hooks Composition Model (custom Hooks)</Li>
          <Li>Hook Reducer</Li>
          <Li>useMemo and useCallback</Li>
        </Ul>
      </Li>
      <Li>
        Performance
        <Ul>
          <Li>Profiling</Li>
          <Li>Re-renderings when updating state</Li>
          <Li>React.memo and immutability</Li>
        </Ul>
      </Li>
      {/* <Li>
        Suspense
        <Ul>
          <Li>Suspense for Code-Splitting</Li>
          <Li>Suspense for Data Fetching</Li>
        </Ul>
      </Li> */}
    </Ul>
  </Session>
)

AdvancedHooksAndPerfSession.defaultProps = {
  title: titleSession,
}

export default AdvancedHooksAndPerfSession
