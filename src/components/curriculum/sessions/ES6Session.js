import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Modern JavaScript'

const ES6Session = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Modern JavaScript for React - ES6 and beyond</Li>
      <Li>Arrow Functions, Class syntax, Template strings</Li>
      <Li>Destructuring</Li>
      <Li>Default parameters, REST operator, Spread operator</Li>
      <Li>Let and Const vs Var</Li>
      <Li>REST + Spread properties</Li>
      <Li>Iterators and functional programming in JS</Li>
      <Li>Modules</Li>
      <Li>Promises</Li>
      <Li>ES6 exercise using TDD</Li>
    </Ul>
  </Session>
)

export default ES6Session
