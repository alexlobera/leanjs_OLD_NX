import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const CompoundCompAndContextSession = ({ hideTitle }) => (
  <Session
    hideTitle={hideTitle}
    title="Advanced React patterns to create even more reusable
    UIs"
  >
    <Ul>
      <Li>Compound Components, dynamically flow data between components</Li>
      <Li>Patterns and use cases using "context"</Li>
    </Ul>
  </Session>
)

export default CompoundCompAndContextSession
