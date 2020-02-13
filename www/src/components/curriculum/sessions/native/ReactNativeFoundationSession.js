import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

export const titleSession = 'React Native Foundation'

const ReactNativeFoundationSession = ({ title = titleSession }) => (
  <Session title={title}>
    <Ul>
      <Li>Architecture & Project setup</Li>
      <Li>Layout</Li>
      <Li>Styling</Li>
      <Li>Using Lists</Li>
      <Li>Forms</Li>
    </Ul>
  </Session>
)

export default ReactNativeFoundationSession
