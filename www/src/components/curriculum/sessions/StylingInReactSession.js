import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

export const titleSession = 'Component library fundamentals'

const StylingInReactSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>CSS-in-JS with Styled-components</Li>
      <Li>
        UI component libraries comparison: SemanticUI, MaterialUI, Rebass, and
        React-Bootstrap
      </Li>
      <Li>Storybook</Li>
      <Li>
        Context
        <Ul>
          <Li>Modals</Li>
          <Li>Themes</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default StylingInReactSession
