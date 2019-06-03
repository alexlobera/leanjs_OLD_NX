import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const DesignSystemSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Using styled-systems in React with variants and templates</Li>
      <Li>
        Creating a consistent design system with colours, fonts and spacing
      </Li>
      <Li>Extending the 'Box' pattern within styled-systems via props</Li>
    </Ul>
  </Session>
)

export default DesignSystemSession
