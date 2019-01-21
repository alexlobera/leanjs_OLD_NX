import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const IntroReduxSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Introduction to functional programming
        <Ul>
          <Li>Data and behaviour</Li>
          <Li>Data in, data out</Li>
          <Li>Mutations</Li>
          <Li>Pure functions</Li>
        </Ul>
      </Li>
      <Li>
        Redux Principles
        <Ul>
          <Li>Store, Reducers, Actions</Li>
          <Li>Unique source of truth</Li>
        </Ul>
      </Li>
      <Li>React-Redux: Provider and Connect</Li>

      <Li>
        Build your own version of
        <code>Redux</code> using TDD
      </Li>
      <Li>Fetching data from the server to Redux</Li>
      <Li>Configure Redux from scratch in a React app</Li>
    </Ul>
  </Session>
)

export default IntroReduxSession
