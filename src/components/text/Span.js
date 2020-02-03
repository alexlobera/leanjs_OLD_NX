import React from 'react'
import Box from '../layout/Box'

// const Span = styled(Box)`
//   ${props => props.lineThrough && `text-decoration: line-through`};
// `
const Span = props => <Box box="span" {...props} />

export default Span
