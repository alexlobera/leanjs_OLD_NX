import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'

export const Ribbon = `
  ${FONT_FAMILY}
  font-size: 1rem;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: solid 3px #be6045;
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -6px;
  color: #be6045;
  }
`

export default styled.div`
  ${Ribbon};
`
