import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const ES6Session = ({ hideTitle }) => (
  <Session hideTitle={hideTitle} title="ES6 and ESNEXT">
    <Ul>
      <Li>
        Understanding language updates - difference between ES6, ES7, and ESNEXT
      </Li>
      <Li>Arrow Functions, Class syntax, Template strings</Li>
      <Li>Destructuring</Li>
      <Li>Default parameters, Rest operator, Spread operator</Li>
      <Li>Let and Const vs Var</Li>
      <Li>Rest + Spread properties</Li>
      <Li>ES6 iterators and functional programming in JS</Li>
      <Li>Modules</Li>
      <Li>Promises</Li>
      <Li>ES6 exercise using TDD</Li>
    </Ul>
  </Session>
)

export default ES6Session
