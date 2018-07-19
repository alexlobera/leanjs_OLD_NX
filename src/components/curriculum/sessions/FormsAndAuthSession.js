import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const FormsAndAuthSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>
        Forms management in React
        <Ul>
          <Li>Controlled Components</Li>
          <Li>Uncontrolled Components</Li>
        </Ul>
      </Li>
      <Li>
        Authentication
        <Ul>
          <Li>JWT</Li>
          <Li>Authorization, public and private pages</Li>
        </Ul>
      </Li>
    </Ul>
  </Session>
)

export default FormsAndAuthSession
