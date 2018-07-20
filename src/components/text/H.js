import React from 'react'
import styled from 'styled-components'

const FONT_FAMILY = "font-family: 'Barlow', sans-serif;"
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
`

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3 = styled.h3`
  ${FONT_FAMILY} font-size: 1.2em;
  line-height: 1.2;
  font-weight: 400;
`

export const H4 = styled.h4`
  ${FONT_FAMILY} font-size: 1.1em;
  line-height: 1.2;
  font-weight: 400;
`
