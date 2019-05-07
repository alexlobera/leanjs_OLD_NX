import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withLazyLoad from './withLazyLoad'

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

const Video = ({ youtubeId, time, description = '' }) => (
  <IframeWrapper>
    <iframe
      title="ReactJS Academy video"
      width="100%"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title={description}
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&showinfo=0&wmode=opaque${
        time ? `&start=${time}` : ''
      }`}
    />
    {description ? <div>{description}</div> : null}
  </IframeWrapper>
)

Video.propTypes = {
  youtubeId: PropTypes.string.isRequired,
}

export default withLazyLoad()(Video)
