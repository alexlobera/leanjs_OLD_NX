import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Thinking in React'

const ThinkingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>The Imperative to Declarative shift</Li>
      <Li>UI as a function of state and props</Li>
      <Li>React component tree, host tree, and virtual tree</Li>
      <Li>Lifting state up</Li>
      <Li>One-way top-down data flow</Li>
      <Li>React composition model</Li>
      <Li>React developer tools</Li>
    </Ul>
  </Session>
)

export const LearningObjectives = ({ showAll = true }) => (
  <>
    <Li>
      Understand the difference between declarative and imperative programming
    </Li>
    {showAll && (
      <>
        <Li>Learn how to breaking down your UI into components.</Li>
        <Li>
          Comprehend what's state, which components should hold it, and when to
          lift it up
        </Li>
      </>
    )}
  </>
)

export default ThinkingInReactSession
