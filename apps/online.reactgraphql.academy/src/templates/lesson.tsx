import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { GitHubIcon, PlayMedia } from '@leanjs/ui-icons';
// import BlockContent from '@sanity/block-content-to-react';
import Markdown from '../components/display/Markdown';
// import { OkaidiaRGA } from '@leanjs/ui-academy';
import {
  //   removeCarriageReturn,
  //   getImagePublicURLs,
  getVideoInfo,
} from '@leanjs/ui-academy';

import Layout from '../components/layout/Layout';
import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li } from '../components/layout';
import Link from '../components/navigation/Link';
import { H1, H2, H3, H4, H5, H6, P, Span, Image } from '../components/display';
// import Code from '../components/display/Code';

interface LessonPageProps {
  data: any;
  pageContext: any;
}

const RELATED_RESOURCES_FIELD_ID = '@RklFOjVmNTMyN2I2YTQzNWVlNjIyNjRiYzE1ZA==';
const GITHUB_COLOR = '#1B1F23';

const Icon = ({ comp: Comp }) => (
  <Comp sx={{ mb: '-7px', mr: 2 }} fill={GITHUB_COLOR} />
);

const LessonPage: FunctionComponent<LessonPageProps> = ({ data }) => {
  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const relatedResources = trainingUnit.published.customFieldsValues.find(
    ({ fieldId }) => fieldId === RELATED_RESOURCES_FIELD_ID
  ).values[0];

  const trainingPath = `/${training.slug}-course/`;
  const { url: videoUrl } = getVideoInfo(video);

  return (
    <Layout
      variant="stack"
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        {
          path: trainingPath,
          text: training.title,
        },
        { text: video.title },
      ]}
    >
      {/* <OkaidiaRGA /> */}
      <Container>
        <VideoPlayer
          posterUrl={video.asset?.posterImageUrl}
          url={video.asset?.url}
        />
        <Grid columns={12} sx={{ mt: 7 }}>
          <Box sx={{ gridColumn: '1/ 8' }}>
            <H1 as="h1" variant="h2">
              {video.title}
            </H1>
            <H3>Related resources</H3>
            <Markdown>{relatedResources}</Markdown>
            <H3>Transcript</H3>
            {/* TODO SHOW 1/3 IF THE USE IS NOT LOGGED IN */}
            <Markdown>{video.transcript}</Markdown>
          </Box>
          <Box sx={{ gridColumn: ' 9/ -1' }}>
            <StickyBox offsetTop={0}>
              <H2 as="h1" variant="h3" sx={{ pt: 2 }}>
                {trainingUnit.published.title} lessons
              </H2>
              <P>
                Completed 0 out of {trainingUnit.published.videos.length}{' '}
                lessons
              </P>
              <P>
                Where is the video <Link>autoplay?</Link>
              </P>
              <Ul variant="unstyled" sx={{ pl: 0 }}>
                {trainingUnit.published.videos.map(({ title, slug }) => (
                  <Li key={slug}>
                    <Link to={`${trainingPath}${slug}/`}>
                      <Icon comp={PlayMedia} />
                      {title}
                    </Link>
                  </Li>
                ))}
              </Ul>
            </StickyBox>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query getVideo($videoId: ID!, $unitId: ID!, $trainingId: ID!) {
    upmentoring {
      video(id: $videoId) {
        id
        title
        transcript
        asset {
          posterImageUrl
        }
      }
      trainingUnit(id: $unitId) {
        published {
          title
          slug
          customFieldsValues {
            values
            fieldId
          }
          videos {
            title
            slug
          }
        }
      }
      trainingById(id: $trainingId) {
        title
        slug
      }
    }
  }
`;

export default LessonPage;
