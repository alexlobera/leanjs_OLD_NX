import React from 'react'
import Ul, { Li } from '../../layout/Ul'
import Session from './Session'

const ReactNativeAnimationsSession = ({ title }) => (
    <Session title={title}>
        <Ul>
            <Li>Basic Animations</Li>
            <Li>Animated API</Li>
            <Li>Linear animations, Interpolations, Easings, sequence animations</Li>
            <Li>Event Drivers</Li>
            <Li>Animated API limitations</Li>
        </Ul>
    </Session>
)

export default ReactNativeAnimationsSession
