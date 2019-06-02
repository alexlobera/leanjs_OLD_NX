import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const ReusableComponentsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Compound Components, dynamically flow data between components</Li>
      <Li>
        Good and bad practices using "context" to make components more reusable
      </Li>
      <Li>Creating components with a minimal API surface area</Li>
    </Ul>
  </Session>
)

export default ReusableComponentsSession
