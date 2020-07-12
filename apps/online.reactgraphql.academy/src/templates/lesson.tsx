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

      <Input label="asdf" />

      <Heading variant="h1">Heading H1</Heading>
      <H1 variant="h2"> H1</H1>
      <H1 variant="h2"> H1</H1>
      <Heading variant="h3">Heading H3</Heading>
      <H2> H2</H2>
      <Heading>Heading default H2</Heading>
      <H3> H3</H3>
      <H4> H4</H4>
      <H5> H5</H5>
      <H1> H6</H1>
      <H1> H1</H1>
      <H3> H3</H3>
      <P>PPPPPPP</P>
      <Heading variant="h3">
        Lesson {pageContext.videoIndex}: {data.upmentoring.video.title}
      </Heading>
      <H3> H3</H3>
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
