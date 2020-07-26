import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { GitHubIcon, PlayMedia } from '@leanjs/ui-icons';

import Layout from '../components/layout/Layout';
import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li } from '../components/layout';
import Link from '../components/navigation/Link';
import { H1, H2, H3, P } from '../components/display';

interface LessonPageProps {
  data: any;
  pageContext: any;
}

const SOLUTION_FIELD_ID = '@RklFOjVmMTgzYzVmNThlZjE1MGVhOGQ4OGUwZQ==';
const EXERCISE_FIELD_ID = '@RklFOjVmMTgzY2ViNThlZjE1MGVhOGQ4OGUwZg==';
const GITHUB_COLOR = '#1B1F23';

const Icon = ({ comp: Comp }) => (
  <Comp sx={{ mb: '-7px', mr: 2 }} fill={GITHUB_COLOR} />
);

const LessonPage: FunctionComponent<LessonPageProps> = ({ data }) => {
  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const linkToSolution = trainingUnit.published.customFieldsValues.find(
    ({ fieldId }) => fieldId === SOLUTION_FIELD_ID
  ).values[0];
  const linkToExercise = trainingUnit.published.customFieldsValues.find(
    ({ fieldId }) => fieldId === EXERCISE_FIELD_ID
  ).values[0];
  const trainingPath = `/${training.slug}-course/`;

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
      <Container>
        <VideoPlayer url={video.asset.url} />
        <Grid columns={12} sx={{ mt: 7 }}>
          <Box sx={{ gridColumn: '1/ 8' }}>
            <H1 as="h1" variant="h2">
              {video.title}
            </H1>
            <H3>Code</H3>
            <Ul variant="unstyled" sx={{ mb: 7 }}>
              <Li>
                <Icon comp={GitHubIcon} />
                <Link to={linkToExercise}>Link to EXERCISE</Link>
              </Li>
              <Li>
                <Icon comp={GitHubIcon} />
                <Link to={linkToSolution}>Link to SOLUTION</Link>
              </Li>
            </Ul>
            <H3>Transcript</H3>
          </Box>
          <Box sx={{ gridColumn: ' 9/ -1' }}>
            <StickyBox offsetTop={0}>
              <H2 as="h1" variant="h3">
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
                  <Li>
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
        title
        asset {
          url
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
