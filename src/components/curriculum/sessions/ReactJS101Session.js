import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactJS101Session = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        JavaScript Fundamentals
        <Ul>
          <Li>Object, Array, and falsy</Li>
          <Li>Inheritance in JS</Li>
          <Li>Context Vs. scope</Li>
          <Li>Functions, anonymous functions, and arrow functions</Li>
          <Li>Array.map and Array.filter</Li>
        </Ul>
      </Li>
      <Li>
        React intro
        <Ul>
          <Li>Introducing JSX</Li>
          <Li>Components and Props</Li>
          <Li>State and classes</Li>
          <Li>Lifting State Up</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default ReactJS101Session
