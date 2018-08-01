import React from 'react'
import PropTypes from 'prop-types'
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

const Video = ({ youtubeID }) => (
  <Iframe
    width="100%"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    src={`https://www.youtube-nocookie.com/embed/${youtubeID}?rel=0&controls=0&showinfo=0&wmode=opaque`}
  />
)

Video.propTypes = {
  youtubeID: PropTypes.string.isRequired,
}

export default Video
