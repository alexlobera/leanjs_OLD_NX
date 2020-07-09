import React from 'react';
import { graphql } from 'gatsby';

import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box } from '../components/layout/Box';
import { Grid } from '../components/layout/Grid';
import { Container } from '../components/layout/Container';

function LessonPage({ data, pageContext }) {
  return (
    <Container>
      <Grid columns={{ minWidth: 600 }}>
        <Box sx={{ bg: 'red' }}>Box</Box>
        <Box bg="muted">Box</Box>
      </Grid>
      <h1>
        Lesson {pageContext.videoIndex}: {data.upmentoring.video.title}
      </h1>
      <VideoPlayer url={data.upmentoring.video.asset.url} />
    </Container>
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
