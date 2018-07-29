import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../config/styles'

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
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  margin-bottom: 40px;
  font-size: 36px;
  a {
    font-size: 36px; 
  }
`

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3 = styled.h3`
  ${FONT_FAMILY}
  line-height: 1.2;
  font-weight: 500;
  font-size: 24px;
  a {
    font-size: 24px; 
  }
`

export const H3Ref = styled(H3)`
  ${REF};
`

export const H4 = styled.h4`
  ${FONT_FAMILY} font-size: 1.1em;
  line-height: 1.2;
  font-weight: 500;
`

export const H4Ref = styled(H4)`
  ${REF};
`

export const H5 = styled.h5`
  ${FONT_FAMILY} font-size: 1em;
  line-height: 1.2;
  font-weight: 700;
`

export const H5Ref = styled(H5)`
  ${REF};
`
