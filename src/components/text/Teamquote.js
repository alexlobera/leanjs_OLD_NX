/* eslint no-undef: 0 */
import React from 'react'

import Blockquote from './Blockquote'
import Card from '../elements/Card'
import { GREY } from '../../config/styles.js'

const Teamquote = ({ children, blockquote, ...rest }) => (
  <Card variant="primary" borderColor={GREY} pl={4} {...rest}>
    <Blockquote>{blockquote}</Blockquote>
    {children}
  </Card>
)

export default Teamquote
