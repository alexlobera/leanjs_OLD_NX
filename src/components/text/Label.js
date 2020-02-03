import React from 'react'
import Box from '../layout/Box'
import Flex from '../layout/Flex'

// const Label = styled(Box)``
const Label = props => <Box box="label" {...props} />

export const FlexLabel = props => <Flex box="label" {...props} />

export default Label
