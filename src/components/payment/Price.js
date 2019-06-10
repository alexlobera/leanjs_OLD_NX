import styled from 'styled-components'
import { DARK_GREY, FONT_FAMILY } from '../../config/styles'

export const Price = styled.span`
  ${FONT_FAMILY} font-size: 2.05rem;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: ${DARK_GREY};
  display: inline-block;
  ${props =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : null};
`

export default Price
