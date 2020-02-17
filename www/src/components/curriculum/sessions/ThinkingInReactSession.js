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
    <Li>Learn the difference between declarative and imperative programming</Li>
    {showAll && (
      <>
        <Li>
          Comprehend the value of breaking down your UI into reusable
          components.
        </Li>
        <Li>
          Understand which components should hold state and how to share and
          manipulate state in React
        </Li>
      </>
    )}
  </>
)

export default ThinkingInReactSession
