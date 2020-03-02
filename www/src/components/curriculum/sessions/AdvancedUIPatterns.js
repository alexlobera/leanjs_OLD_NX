import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Advanced UI Patterns'

const AdvancedUIPatterns = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Themes</Li>
      <Li>Compound Components</Li>
    </Ul>
  </Session>
)

export default AdvancedUIPatterns
