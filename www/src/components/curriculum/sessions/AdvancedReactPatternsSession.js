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
    </Ul>
  </Session>
)

AdvancedReactPatternsSession.defaultProps = {
  title: titleSession,
}

export default AdvancedReactPatternsSession
