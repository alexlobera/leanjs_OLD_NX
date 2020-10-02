import React from 'react';
import { VideoPlayer } from '@leanjs/ui-hls';

import Img from './Image';
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
  const [derivedAutoload, setDerivedAutoload] = React.useState(autoload);
  let poster: HTMLImageElement;
  if (typeof Image !== 'undefined') {
    poster = new Image();
    poster.src = fluidPoster?.src;
    poster.onload = () => {
      setImageLoaded(true);
    };
  }

  return (
    <Box
      onMouseOver={() => setDerivedAutoload(true)}
      sx={{ position: 'relative' }}
    >
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
            posterUrl={poster?.src}
            url={url}
            autoload={derivedAutoload}
            {...rest}
          />
        )}
      </Box>
      <Img fluid={fluidPoster} />
      {overlay}
    </Box>
  );
}
