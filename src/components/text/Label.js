import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'

export default styled.label`
  ${FONT_FAMILY}
  ${props => props.flex && `display: flex;`}
`
