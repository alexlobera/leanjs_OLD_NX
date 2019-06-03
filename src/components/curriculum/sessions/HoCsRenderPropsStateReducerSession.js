import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const HoCsRenderPropsStateReducerSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Functional programming (FP)
        <Ul>
          <Li>Closures</Li>
          <Li>Composition</Li>
        </Ul>
      </Li>
      <Li>
        Advanced React patterns to reuse functionality across components
        <Ul>
          <Li>Higher-Order Components (HOCs)</Li>
          <Li>
            Declarative composition using the Render Props (AKA function as
            children)
          </Li>
          <Li>
            State Reducer pattern - how and when to apply to React components
          </Li>
          <Li>
            Hooks - Managing state and side effects with Hooks (The future of
            React!)
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default HoCsRenderPropsStateReducerSession
