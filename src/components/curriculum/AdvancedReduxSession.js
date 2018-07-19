import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const AdvancedReduxSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Functional programming (FP)
        <Ul>
          <Li>Composing functions</Li>
          <Li>Currying, thunks and higher-order functions</Li>
        </Ul>
      </Li>
      <Li>
        Advanced Redux:
        <Ul>
          <Li>Introducing the Redux middleware</Li>
          <Li>Exercise, build your own Redux middleware</Li>
          <Li>Thunks. Actions that dispatch actions</Li>
          <Li>Exercise, implement loading indicators using thunks</Li>
        </Ul>
      </Li>
      <Li>Time travel in Redux using Redux DevTools</Li>
    </Ul>
  </Session>
)

export default AdvancedReduxSession
