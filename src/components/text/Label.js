import styled from 'styled-components'
import Box from '../layout/Box'

const Label = styled(Box)`
  ${props => props.flex && `display: flex;`}
`
Label.defaultProps = {
  box: 'label',
}

export default Label
