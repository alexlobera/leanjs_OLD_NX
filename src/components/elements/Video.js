import React from 'react'
import styled from 'styled-components'
import { SCREEN_XS_MAX } from '../utils'

const Iframe = styled.iframe`
border: 0;
height: 390px;
// @media only screen and (max-width: ${SCREEN_XS_MAX})
//   margin-top: 30px;
//   height: 300px;
// }
`

const Video = props => (
  <Iframe
    width="100%"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    {...props}
  />
)

export default Video
