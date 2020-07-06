import React from 'react';
import { graphql } from 'gatsby';
import { VideoPlayer } from '@leanjs/ui-hls';

function LessonPage({ data, pageContext }) {
  return (
    <>
      <h1>
        Lesson {pageContext.videoIndex}: {data.upmentoring.video.title}
      </h1>
      <VideoPlayer url={data.upmentoring.video.asset.url} />
    </>
  );
}

export const query = graphql`
  query getVideo($videoId: ID!) {
    upmentoring {
      video(id: $videoId) {
        title
        asset {
          url
        }
      }
    }
  }
`;

export default LessonPage;
