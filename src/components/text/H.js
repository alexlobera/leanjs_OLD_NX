import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../styles'

const REF = `
    :hover {
        a {
            visibility: visible;
            cursor: pointer;
        }
    }
    a {
        visibility: hidden;
}
`
export const H1 = styled.h1`
  ${FONT_FAMILY};
`

export const H1Ref = styled(H1)`
  ${REF};
`

export const H2 = styled.h2`
  ${FONT_FAMILY};
  font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  margin-bottom: 55px;
`

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3 = styled.h3`
  ${FONT_FAMILY} font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
`

export const H4 = styled.h4`
  ${FONT_FAMILY} font-size: 1.1em;
  line-height: 1.2;
  font-weight: 400;
`
