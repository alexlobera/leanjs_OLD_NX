import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const DesignThinkingSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>UX and how it applies to development</Li>
      <Li>Communicating with different types of designers effectively</Li>
      <Li>Tools and techniques for smooth handover</Li>
      <Li>
        Breaking designs down to Atoms, Molecules, Organisms and Templates
      </Li>
      <Li>How design systems can help design and development</Li>
    </Ul>
  </Session>
)

export default DesignThinkingSession
