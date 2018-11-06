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

export const H2_STYLE = `
  ${FONT_FAMILY};
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  margin-bottom: 1.5rem;
  font-size: 36px;
  padding-top: 2rem;
  :first-child {
    padding-top: 0;
  }
  a {
    font-size: 36px;
}
`

export const H2 = styled.h2`
  ${H2_STYLE}
`

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3_STYLE = `
  ${FONT_FAMILY} line-height: 1.5;
  font-weight: 500;
  padding-top: 1.5rem;
  :first-child {
    padding-top: 0;
  }
  font-size: 24px;
  a {
    font-size: 24px;
  }
`

export const H3 = styled.h3`
  ${H3_STYLE}
`

export const H3Ref = styled(H3)`
  ${REF};
`

export const H4_STYLE = `
  ${FONT_FAMILY} font-size: 1.1em;
  line-height: 1.3;
  font-weight: 600;
`

export const H4 = styled.h4`
  ${H4_STYLE}
`

export const H4Ref = styled(H4)`
  ${REF};
`

export const H5_STYLE = `
  ${FONT_FAMILY} font-size: 1em;
  line-height: 1.2;
  font-weight: 700;
`
export const H5 = styled.h5`
  ${H5_STYLE}
`

export const H5Ref = styled(H5)`
  ${REF};
`
