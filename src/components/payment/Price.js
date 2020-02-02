import styled from 'styled-components'
import Box from '../layout/Box'
import { DARK_GREY } from '../../config/styles'

export const Price = styled(Box)``
Price.defaultProps = {
  sx: {
    fontWeight: 'bold',
    color: DARK_GREY,
    display: 'inline-block',
    fontSize: 6,
  },
  box: 'span',
}

export default Price
