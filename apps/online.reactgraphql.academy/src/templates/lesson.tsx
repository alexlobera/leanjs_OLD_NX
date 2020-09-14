import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { PlayMedia } from '@leanjs/ui-icons';
import { ThemeProvider } from '@leanjs/ui-core';
import { useMagic } from '@leanjs/magic-link';
import { useQuery } from '@leanjs/graphql-client';
// import { OkaidiaRGA } from '@leanjs/ui-academy';

import Markdown from '../components/display/Markdown';
import Layout from '../components/layout/Layout';
import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li } from '../components/layout';
import Link, { LinkButton } from '../components/navigation/Link';
import { H1, H2, H3, H4, H5, H6, P, Span, Image } from '../components/display';
// import Code from '../components/display/Code';
import { textBackgroundProps } from '../components/layout/Header';
import { Spinner } from '../components/display';

interface LessonPageProps {
  data: any;
  pageContext: any;
  location: any;
}

const RELATED_RESOURCES_FIELD_ID = '@RklFOjVmNTMyN2I2YTQzNWVlNjIyNjRiYzE1ZA==';
const GITHUB_COLOR = '#1B1F23';

const Icon = ({ comp: Comp }) => (
  <Comp sx={{ mb: '-7px', mr: 2 }} fill={GITHUB_COLOR} />
);

const LessonPage: FunctionComponent<LessonPageProps> = ({
  data,
  pageContext,
  location,
}) => {
  const { unitId, videoId } = pageContext;
  const { loggedIn, loading: logging } = useMagic();
  const skipQuery = !loggedIn;

  // TODO useMemo variables inside useQuery
  const options = React.useMemo(() => {
    return { variables: { videoId, unitId }, skip: skipQuery };
  }, [unitId, videoId, loggedIn]);

  const { loading, data: privateData } = useQuery(
    `
  query videoLesson($videoId: ID!, $unitId: ID!) {
    video(id:$videoId) {
      transcript
      asset {
        url
      }
    }
    trainingUnit(id: $unitId) {
        published {
          customFieldsValues {
            values
            fieldId
          }
        }
      }
  }
  `,
    options
  );

  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const relatedResources = privateData?.trainingUnit?.published?.customFieldsValues?.find(
    ({ fieldId }) => fieldId === RELATED_RESOURCES_FIELD_ID
  )?.values[0];
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
      {/* <OkaidiaRGA /> */}
      <Container>
        <Box sx={{ position: 'relative' }}>
          <VideoPlayer
            posterUrl={video.asset?.posterImageUrl}
            url={privateData?.video?.asset?.url}
          />

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
                  {(!skipQuery && loading) || logging ? (
                    <>
                      <Spinner sx={{ mb: '-4px', mr: 2 }} />
                      {loading ? 'loading data...' : 'logging in...'}
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
                              log in to
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
              <H2 as="h1" variant="h3" sx={{ mt: 2 }}>
                {trainingUnit.published.title} lessons
              </H2>
              <P>
                Completed 0 out of {trainingUnit.published.videos.length}{' '}
                lessons
              </P>
              <Ul variant="unstyled" sx={{ pl: 0 }}>
                {trainingUnit.published.videos.map(({ title, slug }) => {
                  const path = `${trainingPath}${slug}`;
                  return (
                    <Li key={slug}>
                      {location.pathname !== path ? (
                        <Link to={path}>
                          <Icon comp={PlayMedia} />
                          {title}
                        </Link>
                      ) : (
                        <>
                          <Icon comp={PlayMedia} />
                          {title}
                        </>
                      )}
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
        }
      }
      trainingUnit(id: $unitId) {
        published {
          title
          slug
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
