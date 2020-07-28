interface Video {
  sanityVideo?: {
    thumbnailImage?: {
      asset?: {
        localFile?: {
          publicURL: string;
        };
      };
    };
  };
  asset?: {
    url?: string;
    playback?: {
      id: string;
    };
  };
}

export function getVideoInfo(video: Video) {
  let posterUrl =
    video?.sanityVideo?.thumbnailImage?.asset?.localFile?.publicURL;
  const playbackId = video?.asset?.playback?.id;
  if (!posterUrl && playbackId) {
    posterUrl = `https://image.mux.com/${playbackId}/thumbnail.png?width=600&amp;fit_mode=preserve&amp;time=1`;
  }

  const url = video?.asset?.url;

  return { posterUrl, url };
}
