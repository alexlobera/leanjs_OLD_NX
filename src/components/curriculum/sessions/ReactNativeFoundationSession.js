import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactNativeFoundationSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Architecture</Li>
      <Li>Project setup</Li>
      <Li>Layout</Li>
      <Li>Styling</Li>
      <Li>Navigations with react-navigation</Li>
    </Ul>
  </Session>
)

export default ReactNativeFoundationSession
