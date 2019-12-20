import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Styling in React'

const StylingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>CSS-in-JS compared to other approaches</Li>
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
