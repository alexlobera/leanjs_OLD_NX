import styled from 'styled-components'

import {Box} from '@leanjs/academy-ui'
import { RED, WHITE } from '../../config/styles'

const Ribbon = styled(Box)`
  font-size: 1rem;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: ${WHITE};
  border: solid 3px ${RED};
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -6px;
  color: ${RED};
`

export default Ribbon
