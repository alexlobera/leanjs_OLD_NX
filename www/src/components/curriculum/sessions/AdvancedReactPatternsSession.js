import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Functional Programming & Advanced React patterns'

const AdvancedReactPatternsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Functional programming (FP) applied to JavaScript
        <Ul>
          <Li>Closure</Li>
          <Li>Memoization</Li>
          <Li>Composition</Li>
        </Ul>
      </Li>
      <Li>
        Previous Patterns
        <Ul>
          <Li>Higher-Order Components (HOCs)</Li>
          <Li>Refactoring previous patterns to Hooks and vice versa</Li>
        </Ul>
      </Li>
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

export default AdvancedReactPatternsSession
