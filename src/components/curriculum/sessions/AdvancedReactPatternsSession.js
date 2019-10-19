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
        Advanced React patterns
        <Ul>
          <Li>
            Hooks (The future of React!)
            <Ul>
              <Li>Managing state and side effects with hooks</Li>
              <Li>Hook Reducer</Li>
              <Li>Custom hooks</Li>
            </Ul>
          </Li>
          <Li>
            Previous patterns
            <Ul>
              <Li>Higher-Order Components (HOCs)</Li>
              <Li>
                Declarative composition using the Render Props (AKA function as
                children)
              </Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default AdvancedReactPatternsSession
