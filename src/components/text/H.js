import styled from 'styled-components'
import { fontSize } from 'styled-system'

import Box from '../layout/Box'

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

export const H1 = styled(Box)``
H1.defaultProps = {
  fontWeight: 'bold',
  fontSize: 7,
  box: 'h1',
}

export const H1Ref = styled(H1)`
  ${REF};
`

export const H2 = styled(Box)`
  :first-child {
    padding-top: 0;
  }
  a {
    ${fontSize({ fontSize: 5 })}
  }
`
H2.defaultProps = {
  fontWeight: 'bold',
  lineHeight: 6,
  fontSize: 5,
  mb: 5,
  pt: 5,
  box: 'h2',
}

export const H2Ref = styled(H2)`
  ${REF};
`

export const H3 = styled(Box)`
  a {
    ${fontSize({ fontSize: 4 })}
  }
  :first-child {
    padding-top: 0;
  }
`
H3.defaultProps = {
  fontSize: 4,
  pt: 4,
  lineHeight: 4,
  box: 'h3',
}

export const H3Ref = styled(H3)`
  ${REF};
`

export const H4 = styled(Box)``
H4.defaultProps = {
  fontSize: 3,
  lineHeight: 3,
  fontWeight: 'bold',
  box: 'h4',
}

export const H4Ref = styled(H4)`
  ${REF};
`

export const H5 = styled(Box)``
H5.defaultProps = {
  fontSize: 2,
  lineHeight: 1,
  fontWeight: 'bold',
  box: 'h5',
}

export const H5Ref = styled(H5)`
  ${REF};
`
