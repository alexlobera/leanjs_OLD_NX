import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const HooksSession = ({ title = 'React Hooks' }) => (
  <Session title={title}>
    <Ul>
      <Li>Managing state and side effects with hooks</Li>
    </Ul>
  </Session>
)

export default HooksSession
