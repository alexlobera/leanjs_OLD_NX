import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { PlayMedia } from '@leanjs/ui-icons';
import { ThemeProvider } from '@leanjs/ui-core';
import { useMagic } from '@leanjs/magic-link';
import { useQuery, useClient } from '@leanjs/graphql-client';
// import { OkaidiaRGA } from '@leanjs/ui-academy';

import Tick from '../components/icons/Tick';
import Markdown from '../components/display/Markdown';
import Layout from '../components/layout/Layout';
import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li } from '../components/layout';
import Link, { LinkButton } from '../components/navigation/Link';
import { H1, H3, H4, P } from '../components/display';
import Img from '../components/display/Image';

// import Code from '../components/display/Code';
import { textBackgroundProps } from '../components/layout/Header';
import { Spinner } from '../components/display';

interface LessonPageProps {
  data: any;
  pageContext: any;
  location: any;
}

const RELATED_RESOURCES_FIELD_ID = '@RklFOjVmNTMyN2I2YTQzNWVlNjIyNjRiYzE1ZA==';

const Icon = ({ comp: Comp, sx = {}, color }) => (
  <Comp sx={{ mb: '-7px', mr: 2, ...sx }} fill={color} />
);

const LESSON_QUERY = `
  query videoLesson($videoId: ID!, $unitId: ID!) {
    video(id: $videoId) {
      transcript
      asset {
        url
      }
    }
    trainingUnit(id: $unitId) {
      published {
        videos {
          id
          viewer {
              completedAt
          }
        }
        customFieldsValues {
          values
          fieldId
        }
      }
    }
  }
`;

const COMPLETE_VIDEO_MUTATION = `
  mutation completeVideo($completed: Boolean!, $videoId: ID!) {
    completeVideo(completed: $completed, videoId: $videoId) {
      videoUser {
        completedAt
      }
    }
  }
`;

const LessonPage: FunctionComponent<LessonPageProps> = ({
  data,
  pageContext,
  location,
}) => {
  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const trainingPath = `/${training.slug}-course/`;
  const fuildPoster = video?.asset?.posterImageFile?.childImageSharp?.fluid;
  const { unitId, videoId } = pageContext;
  const { loggedIn, loading: loggingInUser } = useMagic();
  const skip = !loggedIn;
  const client = useClient();

  const { loading, data: privateData, errors } = useQuery(LESSON_QUERY, {
    variables: { videoId, unitId },
    skip,
  });

  const published = privateData?.trainingUnit?.published;
  const relatedResources = published?.customFieldsValues?.find(
    ({ fieldId }) => fieldId === RELATED_RESOURCES_FIELD_ID
  )?.values[0];
  const zIndexVideoPlayer = 9998;

  const completedVideoSet = React.useMemo(
    () =>
      published?.videos?.reduce((set, { viewer, id }) => {
        if (viewer?.completedAt) set.add(id);

        return set;
      }, new Set()),
    [published]
  );

  async function completeVideo() {
    const { data: completedVideoData } = await client.mutate({
      query: COMPLETE_VIDEO_MUTATION,
      variables: { videoId: video.id, completed: true },
    });

    const completedAt =
      completedVideoData?.completeVideo?.videoUser?.completedAt;

    if (completedAt) {
      const queryOptions = {
        query: LESSON_QUERY,
        variables: { videoId, unitId },
      };

      const data = client.readQuery(queryOptions);

      client.writeQuery({
        ...queryOptions,
        data: {
          ...data,
          trainingUnit: {
            ...data.trainingUnit,
            published: {
              ...data?.trainingUnit?.published,
              videos: [
                ...data?.trainingUnit?.published?.videos,
                { id: videoId, viewer: { completedAt } },
              ],
            },
          },
        },
      });
    }
  }

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
        <Box sx={{ position: 'relative' }}>
          {loggedIn && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: zIndexVideoPlayer,
              }}
            >
              <VideoPlayer
                posterUrl={fuildPoster.src}
                onEnded={completeVideo}
                url={privateData?.video?.asset?.url}
                autoload={true}
              />
            </Box>
          )}
          <Img fluid={fuildPoster} />

          {!privateData?.video?.asset?.url ? (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: zIndexVideoPlayer + 1,
              }}
            >
              <ThemeProvider
                theme={{
                  colors: {
                    text: '#fff',
                  },
                }}
              >
                <Box sx={{ maxWidth: '400px' }}>
                  {loading || loggingInUser ? (
                    <>
                      <Spinner sx={{ mb: '-4px', mr: 2 }} />
                      {loggingInUser ? 'logging in...' : 'loading data...'}
                    </>
                  ) : (
                    <>
                      <H3
                        sx={{
                          ...textBackgroundProps,
                          padding: 2,
                          lineHeight: 1.85,
                        }}
                      >
                        {pageContext.isPublicVideo && !loggedIn ? (
                          <>
                            You have to{' '}
                            <Link
                              to="/login"
                              state={{ referrer: location.pathname }}
                            >
                              log in
                            </Link>{' '}
                            to watch this video.
                          </>
                        ) : (
                          <>
                            You have to{' '}
                            <Link to={`${trainingPath}#pricing`}>
                              purchase this course
                            </Link>{' '}
                            to watch this video.
                          </>
                        )}
                      </H3>
                      <P sx={{ textAlign: 'center', mt: 6 }}>
                        {pageContext.isPublicVideo && !loggedIn ? (
                          <LinkButton
                            variant="primary"
                            to="/login"
                            state={{ referrer: location.pathname }}
                          >
                            Log in now
                          </LinkButton>
                        ) : (
                          <LinkButton
                            variant="primary"
                            to={`${trainingPath}#pricing`}
                          >
                            Buy now
                          </LinkButton>
                        )}
                      </P>
                    </>
                  )}
                </Box>
              </ThemeProvider>
            </Box>
          ) : null}
        </Box>
        <Grid columns={12} sx={{ mt: 7 }}>
          <Box sx={{ gridColumn: '1/ 8' }}>
            <H1 as="h1" variant="h2" sx={{ mt: 2 }}>
              {video.title}
            </H1>
            <H3>Related resources</H3>
            {relatedResources ? (
              <Markdown>{relatedResources}</Markdown>
            ) : loading ? (
              <P>Loading data...</P>
            ) : (
              <P>
                You have to{' '}
                <Link to={`${trainingPath}#pricing`}>purchase this course</Link>{' '}
                to see its related resources.
              </P>
            )}
            <H3>Transcript</H3>
            {privateData?.video?.transcript ? (
              <Markdown>{privateData.video.transcript}</Markdown>
            ) : (
              <Box sx={{ position: 'relative' }}>
                <Markdown>{pageContext.transcript}</Markdown>
                {!pageContext.isPublicVideo && (
                  <Box
                    sx={{
                      width: '100%',
                      height: '75px',
                      position: 'absolute',
                      bottom: 0,
                      backgroundImage:
                        'linear-gradient(to bottom, transparent, white)',
                    }}
                  />
                )}
              </Box>
            )}
          </Box>
          <Box sx={{ gridColumn: ' 9/ -1' }}>
            <StickyBox offsetTop={0}>
              <H3 sx={{ mt: 2 }}>Module: {trainingUnit.published.title}</H3>
              <H4>Lessons in this module:</H4>
              <P>
                Completed {completedVideoSet?.size || 0} out of{' '}
                {trainingUnit.published.videos.length} lessons
              </P>
              <Ul variant="unstyled" sx={{ pl: 0 }}>
                {trainingUnit.published.videos.map(({ title, slug, id }) => {
                  const path = `${trainingPath}${slug}`;

                  console.log('aaa', path, location.pathname);
                  return (
                    <Li
                      sx={{
                        position: 'relative',
                        listStyle: 'none',
                        display: 'flex',
                      }}
                    >
                      <Box sx={{ minWidth: '35px', display: 'inline-block' }}>
                        {completedVideoSet?.has(id) ? (
                          <Tick width={25} sx={{ mb: '-5px' }} />
                        ) : (
                          <Icon comp={PlayMedia} color="#d8d8d8" />
                        )}
                      </Box>
                      <Box>
                        {location.pathname.indexOf(path) > -1 ? (
                          title
                        ) : (
                          <Link to={path}>{title}</Link>
                        )}
                      </Box>
                    </Li>
                  );
                })}
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
        asset {
          posterImageUrl
          posterImageFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      trainingUnit(id: $unitId) {
        published {
          title
          slug
          videos {
            id
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
