import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IframeWrapper = styled.div`
  > iframe {
    border: 0;
    height: 390px;
  }
  > div {
    margin-top: -15px;
    margin-bottom: 20px;
  }
`

const Video = ({ youtubeID, description = null }) => (
  <IframeWrapper>
    <iframe
      width="100%"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/${youtubeID}?rel=0&showinfo=0&wmode=opaque`}
    />
    {description ? <div>{description}</div> : null}
  </IframeWrapper>
)

Video.propTypes = {
  youtubeID: PropTypes.string.isRequired,
}

export default Video
