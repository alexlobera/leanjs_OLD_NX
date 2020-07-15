import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container } from '../components/layout';
import Layout from '../components/layout/Layout';
import { Heading, H1, H2, H3, H4, H5, H6, P } from '../components/display';
import { Form, Input } from '../components/form';

interface LessonPageProps {
  data: any;
  pageContext: any;
}

const LessonPage: FunctionComponent<LessonPageProps> = ({
  data,
  pageContext,
}) => (
  <Layout>
    <Container>
      <Grid columns={2}>
        <Box sx={{ bg: 'red' }}>Box</Box>
        <Box>Box</Box>
      </Grid>

      <VideoPlayer url={data.upmentoring.video.asset.url} />
    </Container>
  </Layout>
);

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
