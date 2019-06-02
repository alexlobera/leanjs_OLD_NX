import React from 'react'
import Ul, { Li } from '../../layout/Ul'
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
          <Li>
            Using the Redux middleware, and building your own Redux middlewares
          </Li>
          <Li>
            Thunks, actions that dispatch actions. Implementing loading
            indicators using thunks
          </Li>
          <Li>Using selectors to write more robust and performant code.</Li>
          {/* <Li>
            Sagas Vs thunks. Exercise, reimplement the previous thunk loading
            indicator with <code>redux-saga</code>
          </Li> */}
        </Ul>
      </Li>
      <Li>Time travel in Redux using Redux DevTools</Li>
    </Ul>
  </Session>
)

export default AdvancedReduxSession
