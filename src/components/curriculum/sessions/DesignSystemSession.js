import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const DesignSystemSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Design principles for developers:
        <Ul>
          <Li>Design system tokens: spacing, fonts, and colors</Li>
          <Li>
            Atomic design: Atoms, Molecules, Organisms, Templates, and Pages
          </Li>
        </Ul>
      </Li>
      <Li>
        Styled System
        <Ul>
          <Li>Build a box</Li>
          <Li>
            Design System based on props
            <Ul>
              <Li>Array props</Li>
              <Li>Variant prop</Li>
            </Ul>
          </Li>
          <Li>
            Responsive design
            <Ul>
              <Li>Using props instead of writting media queries by hand</Li>
              <Li>Array scales</Li>
            </Ul>
          </Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default DesignSystemSession
