import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Styling in React'

const StylingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>
        CSS approaches:
        <Ul>
          <Li>CSS at run time vs CSS at build time</Li>
          <Li>Inline style vs CSS-in-JS</Li>
        </Ul>
      </Li>
      <Li>
        UI component libraries comparison: SemanticUI, MaterialUI, Rebass, and
        React-Bootstrap
      </Li>
      <Li>Styled-components</Li>
      <Li>Storybook</Li>
    </Ul>
  </Session>
)

export default StylingInReactSession
