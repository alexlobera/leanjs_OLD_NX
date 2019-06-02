import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const Hackathon = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>GraphQL lecture</Li>
      <Li>Discussion about architecture, features and tools</Li>
      <Li>
        Practice extreme programming and get support from the coaches and
        mentors
      </Li>
      <Li>Trainees demos</Li>
    </Ul>
  </Session>
)

export default Hackathon
