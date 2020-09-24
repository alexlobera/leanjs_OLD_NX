import React, { useRef, useEffect, useState, useImperativeHandle } from "react";
import Hls from "hls.js";

function useHls({ url, autoplay = false, autoload = true, onClick, ref }) {
  const videoRef = useRef();
  const controllerRef = useRef({});
  const [error, setError] = useState(null);

  useEffect(() => {
    function initPlayer() {
      if (Hls.isSupported()) {
        const { player } = controllerRef.current;
        if (player) {
          player.destroy();
        }

        const hls = new Hls({ autoStartLoad: autoload });

        controllerRef.current = { player: hls, videoElement: videoRef };
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(url);
        });
        hls.on(Hls.Events.ERROR, function(event, data) {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                initPlayer(); // TODO should we try again or do setError?
                break;
            }
          }
        });
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = url;
        videoRef.current.addEventListener("error", () => {
          setError(
            `${videoRef.current.error.constructor.name} code ${videoRef.current.error.code}`
          );
        });
      }
    }

    initPlayer();

    return () => {
      const { player } = controllerRef.current;
      if (player) {
        player.destroy();
      }
    };
  }, [url, autoplay, autoload]);

  useImperativeHandle(
    ref && ref.hasOwnProperty("current") ? ref : null,
    () => ({
      get player() {
        return controllerRef.current.player;
      },
      get videoElement() {
        return controllerRef.current.videoElement;
      },
    })
  );

  function handleVideoClick(event) {
    const { player } = controllerRef.current;
    if (!autoload && player) {
      player.startLoad(0);
    }

    onClick && onClick(event);
  }

  return {
    handleVideoClick,
    error,
    videoRef,
  };
}

const VideoPlayer = (
  {
    url = "https://stream.mux.com/9VV6vDpDL8vczqwi00yiXcAoOc006qpL00c.m3u8",
    posterUrl = "https://image.mux.com/WB1tPYzkEl6g7HxPOf501Lz2sPTxIjKLa/thumbnail.png?width=640&amp;fit_mode=preserve&amp;time=1",
    autoplay = false,
    autoload = true,
    muted = true,
    showControls = true,
    ...rest
  },
  ref
) => {
  const { videoRef, error, handleVideoClick } = useHls({
    url,
    autoplay,
    autoload,
    ref,
  });

  return (
    <>
      <video
        onClick={handleVideoClick}
        controls={autoload && showControls}
        muted={autoplay || muted}
        autoPlay={autoplay}
        ref={videoRef}
        poster={posterUrl}
        {...rest}
      />
      {error && <p>There was an error loading this video ({error}).</p>}
    </>
  );
};

export default React.forwardRef(VideoPlayer);
