import React from 'react';
import { VideoPlayer } from '@leanjs/ui-hls';
import { ThemeProvider } from '@leanjs/ui-core';

import Img from './Image';
import { Box, Flex } from '../layout';
import { H3, H4 } from '../display';

export { VideoPlayer };

export function GatsbyVideoPlayer({
  fluidPoster,
  url,
  autoload = false,
  overlay = null,
  sx = {},
  otherVideoElements = [],
  ...rest
}) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [end, setEnd] = React.useState(false);
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
      sx={{ position: 'relative', ...sx }}
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
          <>
            <VideoPlayer
              posterUrl={poster?.src}
              url={url}
              autoload={derivedAutoload}
              {...rest}
              onPlay={() => {
                setEnd(false);
              }}
              onEnded={(e) => {
                if (rest.onEnded) rest.onEnded(e);
                setEnd(true);
              }}
            />
            {end && otherVideoElements?.length && (
              <ThemeProvider
                theme={{
                  colors: {
                    text: '#fff',
                  },
                }}
              >
                <Flex
                  sx={{
                    display: ['none', 'none', 'inherit'],
                    width: '100%',
                    position: 'absolute',
                    alignItems: 'stretch',
                    top: '55%',
                    left: 0,
                    backgroundColor: 'inverseBackgroundOpacity',
                  }}
                >
                  {otherVideoElements.map((videoElement) => (
                    <Box
                      sx={{
                        flex: 1,
                        p: 4,
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: 'inverseBackground' },
                      }}
                    >
                      {videoElement}
                    </Box>
                  ))}
                </Flex>
              </ThemeProvider>
            )}
          </>
        )}
      </Box>
      <Img fluid={fluidPoster} />
      {overlay}
    </Box>
  );
}
