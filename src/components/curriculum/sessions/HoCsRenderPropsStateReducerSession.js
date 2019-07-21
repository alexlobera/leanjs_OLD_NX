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
            Hooks (The future of React!)
            <Ul>
              <Li>Managing state and side effects with hooks</Li>
              <Li>Custom hooks</Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default HoCsRenderPropsStateReducerSession
