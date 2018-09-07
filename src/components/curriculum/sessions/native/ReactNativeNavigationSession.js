import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const ReactNativeNavigationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Types of navigations</Li>
      <Li>react-navigation</Li>
    </Ul>
  </Session>
)

export default ReactNativeNavigationSession
