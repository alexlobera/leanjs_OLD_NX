import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Advanced UI Patterns'

const AdvancedUIPatterns = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Themes and Variants</Li>
      <Li>Compound Components and Context</Li>
      <Li>
        React Composition Model Best Practices:
        <Ul>
          <Li>Minimal API Surface Area</Li>
          <Li>Optimize for change</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default AdvancedUIPatterns
