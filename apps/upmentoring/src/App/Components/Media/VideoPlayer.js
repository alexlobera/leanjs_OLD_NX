// import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
// import * as Hls from 'hls.js';
// import 'plyr/dist/plyr.css';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
// :root {
//     --plyr-color-main: rgba(97,218,251,1);
// }
// .plyr--video {
//     height: auto;
// }
// .plyr--video.plyr--stopped .plyr__controls {
//      display: none;
// }
// `;

// function useHls({ url, autoplay = false, autoload = true, onClick, ref }) {
//   const videoRef = useRef();
//   const controllerRef = useRef({});
//   const [error, setError] = useState(null);
//   // const [loadingStarted, setLoadingStarted] = useState(autoload)

//   function startLoad() {
//     const { player } = controllerRef.current;
//     if (!autoload && player) {
//       player.startLoad();
//       // setLoadingStarted(true)
//     }
//   }

//   useEffect(() => {
//     function initPlayer() {
//       if (!url) {
//         return;
//       }

//       if (Hls.isSupported()) {
//         // import Plyr from 'plyr' breaks on SSR, to we require it on the client
//         const { player } = controllerRef.current;

//         if (player) {
//           player.destroy();
//         }

//         if (controllerRef.current.plyr) {
//           controllerRef.current.plyr.destroy();
//         }

//         const Plyr = require('plyr');
//         const plyr = new Plyr(videoRef.current, {
//           autoplay,
//           controls: [
//             'play-large',
//             'play',
//             'progress',
//             'current-time',
//             'mute',
//             'volume',
//             'settings',
//             'airplay',
//             'fullscreen',
//           ],
//         });

//         plyr.on('play', startLoad);
//         const hls = new Hls({ autoStartLoad: autoload });

//         controllerRef.current = { player: hls, videoElement: videoRef, plyr };
//         hls.attachMedia(videoRef.current);
//         hls.on(Hls.Events.MEDIA_ATTACHED, () => {
//           hls.loadSource(url);
//         });
//         hls.on(Hls.Events.ERROR, function (event, data) {
//           if (data.fatal) {
//             switch (data.type) {
//               case Hls.ErrorTypes.NETWORK_ERROR:
//                 startLoad();
//                 break;
//               case Hls.ErrorTypes.MEDIA_ERROR:
//                 hls.recoverMediaError();
//                 break;
//               default:
//                 initPlayer(); // TODO should we try again or do setError?
//                 break;
//             }
//           }
//         });
//       } else if (
//         videoRef.current.canPlayType('application/vnd.apple.mpegurl')
//       ) {
//         videoRef.current.src = url;
//         videoRef.current.addEventListener('error', () => {
//           setError(
//             `${videoRef.current.error.constructor.name} code ${videoRef.current.error.code}`
//           );
//         });
//       }
//     }

//     initPlayer();

//     return () => {
//       const { player, plyr } = controllerRef.current;
//       if (plyr) {
//         plyr.destroy();
//       }
//       if (player) {
//         player.destroy();
//       }
//     };
//   }, [url, autoplay, autoload]);

//   useImperativeHandle(
//     /* eslint-disable no-prototype-builtins */
//     ref && ref.hasOwnProperty('current') ? ref : null,
//     () => ({
//       get player() {
//         return controllerRef.current.player;
//       },
//       get videoElement() {
//         return controllerRef.current.videoElement;
//       },
//     })
//   );

//   function handleVideoClick(event) {
//     startLoad();
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//     onClick && onClick(event);
//   }

//   return {
//     handleVideoClick,
//     error,
//     videoRef,
//     // loadingStarted,
//   };
// }

// const VideoPlayer = (
//   {
//     url,
//     // playbackId,
//     // token,
//     thumbnailSecond = 1,
//     thumbnailWidth = 640,
//     startSecond = 1,
//     autoplay = false,
//     autoload = false,
//     muted = true,
//     showControls = true,
//     sx = {},
//     posterUrl,
//     ...rest
//   },
//   ref
// ) => {
//   // TODO implement startSecond in useHls
//   //   const signedUrl = `https://stream.mux.com/${playbackId}.m3u8${
//   //     token ? `?token=${token}` : ""
//   //   }`;
//   // const posterUrl = `https://image.mux.com/${playbackId}/thumbnail.png?width=${thumbnailWidth}&amp;fit_mode=preserve&amp;time=${thumbnailSecond}`;
//   const { videoRef, error, handleVideoClick, loadingStarted } = useHls({
//     url,
//     autoplay,
//     autoload,
//     ref,
//   });

//   return (
//     <>
//       <GlobalStyle />
//       <video
//         // TODO add forward ref to Box so we can add the sx prop to this <video> using <Box> instead
//         // sx={{ width: '100%', cursor: "pointer", ...sx }}
//         style={{ width: '100%', display: url ? 'block' : 'none' }}
//         onClick={handleVideoClick}
//         controls={loadingStarted}
//         muted={autoplay || muted}
//         autoPlay={autoplay}
//         ref={videoRef}
//         poster={posterUrl}
//         {...rest}
//       />
//       {error && <p>There was an error loading this video ({error}).</p>}
//     </>
//   );
// };

// export default React.forwardRef(VideoPlayer);
