import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const StylingInReactSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>CSS Vs. JS</Li>
      <Li>Styled-components</Li>
      <Li>
        Component libraries comparison: SemanticUI, MaterialUI, Rebass, and
        React-Bootstrap
      </Li>
    </Ul>
  </Session>
)

export default StylingInReactSession
