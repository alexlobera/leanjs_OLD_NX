import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const StylingInReactSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>CSS Vs. CSS-in-JS</Li>
      <Li>Styled-components</Li>
      <Li>
        Component libraries comparison: SemanticUI, MaterialUI, Rebass, and
        React-Bootstrap
      </Li>
      <Li>Storybook</Li>
    </Ul>
  </Session>
)

export default StylingInReactSession
