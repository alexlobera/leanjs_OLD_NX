import React from 'react'
import Box from '../layout/Box'

import withLazyLoad from './withLazyLoad'

const TedVideo = ({
  embedUrl,
  description,
  height = '480',
  width = '854',
  ...rest
}) => (
  <Box mb={4}>
    <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
        frameborder="0"
        scrolling="no"
        allowfullscreen
        {...rest}
      ></iframe>
    </div>
    {description ? <div>{description}</div> : null}
  </Box>
)

export default withLazyLoad()(TedVideo)
