import styled from 'styled-components'
import Box from '../layout/Box'

const Hr = styled(Box)``
Hr.defaultProps = {
  sx: {
    mt: 6,
    mb: 6,
  },
  box: 'hr',
}

export default Hr
