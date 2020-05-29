import React from 'react'

import { Td } from 'src/components/table'
import Ul from 'src/components/layout/Ul'

export const TdLearningExprience = ({ strong, children }) => (
  <Td verticalAlign="top">
    <strong style={{ marginTop: '8px', display: 'inline-block' }}>
      {strong}
    </strong>
    <br />
    {children}
  </Td>
)

export const UlLearningExperience = ({ children }) => (
  <Ul sx={{ textAlign: 'left', mt: 3 }}>{children}</Ul>
)
