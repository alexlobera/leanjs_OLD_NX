import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const CompoundCompAndContextSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Compound Components, dynamically flow data between components</Li>
      <Li>Patterns and use cases using "context"</Li>
    </Ul>
  </Session>
)

export default CompoundCompAndContextSession
