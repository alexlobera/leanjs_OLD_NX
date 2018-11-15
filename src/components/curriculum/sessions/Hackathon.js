import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const Hackathon = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Create teams</Li>
      <Li>Discussion about architecture, features and tools</Li>
      <Li>Real-world Project - work in teams to build apps</Li>
      <Li>
        Practice extreme programming and get support from the coaches and
        mentors
      </Li>
      <Li>Demos</Li>
    </Ul>
  </Session>
)

export default Hackathon
