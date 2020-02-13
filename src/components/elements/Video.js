import React from 'react'
import styled from 'styled-components'

import Box from '../layout/Box'
import withLazyLoad from './withLazyLoad'

const IframeWrapper = styled(Box)`
  > iframe {
    border: 0;
    margin-bottom: 0;
    ${props => `height: ${props.height}px;`}
  }
`

const Video = ({ youtubeId, time, description, height = '390', ...rest }) => (
  <IframeWrapper height={height} {...rest}>
    <iframe
      title={description}
      width="100%"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/${youtubeId ||
        rest['youtube-id']}?rel=0&showinfo=0&wmode=opaque${
        time ? `&start=${time}` : ''
      }`}
    />
    {description ? <div>{description}</div> : null}
  </IframeWrapper>
)

export default withLazyLoad()(Video)
