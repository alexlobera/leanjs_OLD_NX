import React from 'react';
import { VideoPlayer } from '@leanjs/ui-hls';

import Image from './Image';
import { Box } from '../layout';

export { VideoPlayer };

export function GatsbyVideoPlayer({
  fluidPoster,
  url,
  autoload = false,
  overlay = null,
  ...rest
}) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9998,
        }}
      >
        {imageLoaded && (
          <VideoPlayer
            posterUrl={fluidPoster?.src}
            url={url}
            autoload={autoload}
            {...rest}
          />
        )}
      </Box>
      <Image onLoad={() => setImageLoaded(true)} fluid={fluidPoster} />
      {overlay}
    </Box>
  );
}
