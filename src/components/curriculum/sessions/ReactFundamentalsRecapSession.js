import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession =
  'React Fundamentals recap, build a React app from scratch on your own to consolidate:'

const ReactFundamentalsRecapSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Consolidate your new React skills by building a React app from scratch
        using:
        <Ul>
          <Li>React</Li>
          <Li>React Router</Li>
          <Li>Data fetching</Li>
          <Li>Forms</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default ReactFundamentalsRecapSession
