import React from 'react'
import Ul, { Li } from '../../../layout/Ul'
import Session from '../Session'

const ReactNativeAnimationsSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Basic Animations</Li>
      <Li>Animated API</Li>
      <Li>Interpolations, Linear animations, and Easings</Li>
      <Li>Composing animations</Li>
    </Ul>
  </Session>
)

export default ReactNativeAnimationsSession
