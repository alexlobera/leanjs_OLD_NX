import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const IntroReactSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>The Imperative to Declarative Shift</Li>
      <Li>Componentization</Li>
      <Li>
        What is React made up of
        <Ul>
          <Li>Props & State</Li>
          <Li>One way data binding</Li>
          <Li>Components with and without state. Classes Vs. Functions</Li>
        </Ul>
      </Li>
      <Li>
        Virtual DOM and JSX
        <Ul>
          <Li>React Components, Elements, and Instances</Li>
          <Li>JSX and React.createElement</Li>
        </Ul>
      </Li>
      <Li>Developer tools</Li>
    </Ul>
  </Session>
)

export default IntroReactSession
