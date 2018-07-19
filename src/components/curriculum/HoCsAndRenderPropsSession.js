import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const HoCsAndRenderPropsSession = ({ hideTitle }) => (
  <Session hideTitle={hideTitle} title="FP & Advanced React Patterns I">
    <Ul>
      <Li>
        Functional programming (FP)
        <Ul>
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
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default HoCsAndRenderPropsSession
