import styled from 'styled-components'
import Box from '../layout/Box'
import Flex from '../layout/Flex'

const defaultProps = {
  box: 'label',
}

const Label = styled(Box)``
Label.defaultProps = defaultProps

export const FlexLabel = styled(Flex)``
FlexLabel.defaultProps = defaultProps

export default Label
