import React from 'react'
import styled from 'styled-components'

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
  font-size: 2em;
`

export const H1Ref = styled(H1)`
  ${REF};
`

export const H2 = styled.h2`
  font-size: 1.5em;
`

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3 = styled.h3`
  font-size: 1.2em;
`
