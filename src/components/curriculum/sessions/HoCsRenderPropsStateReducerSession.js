import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const HoCsRenderPropsStateReducerSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Functional programming (FP)
        <Ul>
          <Li>Function composition in JavaScript</Li>
          <Li>Composing React components</Li>
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
          <li>
            State Reducer pattern - how and when to apply to React components
          </li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default HoCsRenderPropsStateReducerSession
