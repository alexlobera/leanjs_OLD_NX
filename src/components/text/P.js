import styled from 'styled-components'
import { FONT_FAMILY, TEXT_SIZE } from '../../config/styles'

export default styled.p`
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  text-align: ${props => props.align || 'left'};
  margin: 0;
  ${props => props.top && `padding-top:${props.top}px;`};
  padding-bottom: 18px;
  line-height: 1.5;
  ${props => props.small && `font-size 0.9rem`};
  > a {
    ${TEXT_SIZE({ lg: true })}
    ${props => props.small && `font-size 0.9rem`};
  }
`
