import React, { FunctionComponent } from 'react';
import { graphql, navigate } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { PlayMedia } from '@leanjs/ui-icons';
import { ThemeProvider } from '@leanjs/ui-core';
import { useMagic } from '@leanjs/magic-link';
import { useQuery, useClient } from '@leanjs/graphql-client';
// import { OkaidiaRGA } from '@leanjs/ui-academy';
import { useExpandCheckout } from '@leanjs/ui-academy';

import { DARK_GREY } from '../config/theme';
import ProgressBar from '../components/display/ProgressBar';
import Tick from '../components/icons/Tick';
import Markdown from '../components/display/Markdown';
import Layout from '../components/layout/Layout';
import { GatsbyVideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li, Flex } from '../components/layout';
import Link, { LinkButton } from '../components/navigation/Link';
import { H1, H3, H4, P } from '../components/display';

// import Code from '../components/display/Code';
import { textBackgroundProps } from '../components/layout/Header';
import { Spinner } from '../components/display';

interface LessonPageProps {
  data: any;
  pageContext: any;
  location: any;
}

const RELATED_RESOURCES_FIELD_ID = '@RklFOjVmMTgzYzVmNThlZjE1MGVhOGQ4OGUwZQ==';

const Icon = ({ comp: Comp, sx = {}, color }) => (
  <Comp sx={{ mb: '-7px', mr: 2, ...sx }} fill={color} />
);

function removeTrailingSlashes(url) {
  return url.replace(/\/+$/, '');
}

const LESSON_QUERY = `
  query videoLesson($videoId: ID!, $unitId: ID!, $trainingId: ID!) {
    viewer {
        purchasedTraining(trainingId: $trainingId) {
          id
        }
    }
    video(id: $videoId) {
      published {
        transcript
      }
      asset {
        url
      }
    }
    trainingById(id: $trainingId) {
        units {
          id
          published {
            videos {
              id
              viewer {
                completedAt
              }
            }
          }
        }
    }

    trainingUnit(id: $unitId) {
      published {
        #videos {
        #  id
        #  viewer {
        #    completedAt
        #  }
        #}
        customFieldsValues {
          values
          fieldId
        }
      }
    }
  }
`;

function getVideoPath({ slug, trainingPath }) {
  return `${trainingPath}${slug}`;
}

const COMPLETE_VIDEO_MUTATION = `
  mutation completeVideo($completed: Boolean!, $videoId: ID!) {
    completeVideo(completed: $completed, videoId: $videoId) {
      videoUser {
        completedAt
      }
    }
  }
`;

function getNextPrevious(list, id) {
  return (
    list?.reduce(
      (acc, item, index) => {
        const nextIndex = index + 1;
        if (item.id !== id) {
          return acc;
        }

        if (index === 0) {
          acc.next = nextIndex < list.length ? list[nextIndex] : null;
        } else if (index === list.length - 1) {
          acc.prev = list[index - 1];
        } else {
          acc.prev = list[index - 1];
          acc.next = list[index + 1];
        }

        return acc;
      },
      { next: null, prev: null }
    ) || {}
  );
}

function getCourseProgress(completedVideosInThisCourse) {
  return (
    completedVideosInThisCourse &&
    Object.keys(completedVideosInThisCourse).reduce(
      (acc, key) => {
        acc.total = acc.total + completedVideosInThisCourse[key].total;
        acc.completed =
          acc.completed + completedVideosInThisCourse[key].completed.size;

        return acc;
      },
      { total: 0, completed: 0 }
    )
  );
}

function getCompletedVideosInThisCourse(units) {
  return units?.reduce((set, { published, id }) => {
    set[id] = { completed: new Set(), total: 0 };
    published?.videos?.reduce((innerSet, { viewer, id: videoId }) => {
      if (viewer?.completedAt) {
        innerSet.completed.add(videoId);
      }
      innerSet.total++;

      return innerSet;
    }, set[id]);

    return set;
  }, {});
}

const LessonPage: FunctionComponent<LessonPageProps> = ({
  data,
  pageContext,
  location,
}) => {
  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const trainingPath = `/${training.published.slug}-course/`;
  const fluidPoster = video?.asset?.posterImageFile?.childImageSharp?.fluid;
  const { unitId, videoId, trainingId } = pageContext;
  const { loggedIn, loading: loggingInUser } = useMagic();
  const skip = !loggedIn;
  const client = useClient();

  const { loading, data: clientRuntimeData, errors } = useQuery(LESSON_QUERY, {
    variables: { videoId, unitId, trainingId },
    skip,
  });
  const expandCheckout = useExpandCheckout();

  const published = clientRuntimeData?.trainingUnit?.published;
  const relatedResources = published?.customFieldsValues?.find(
    ({ fieldId }) => fieldId === RELATED_RESOURCES_FIELD_ID
  )?.values[0];
  const zIndexVideoPlayer = 9998;

  const viewerPurchasedTraining = !!clientRuntimeData?.viewer?.purchasedTraining
    ?.id;

  //   const completedVideoSet = React.useMemo(
  //     () =>
  //       published?.videos?.reduce((set, { viewer, id }) => {
  //         if (viewer?.completedAt) set.add(id);

  //         return set;
  //       }, new Set()),
  //     [published]
  //   );

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
        variables: { videoId, unitId, trainingId },
      };

      const data = client.readQuery(queryOptions);

      const newData = {
        ...queryOptions,
        data: {
          ...data,
          trainingById: {
            ...data?.trainingById,
            units: (data?.trainingById?.units || []).reduce(
              (accUnits, { ...unit }) => {
                if (unit.id === unitId) {
                  unit.published = {
                    ...unit.published,
                    videos: (unit?.published?.videos || []).reduce(
                      (accVideos, { ...reducedVideo }) => {
                        if (video.id === reducedVideo.id) {
                          reducedVideo.viewer = {
                            ...reducedVideo.viewer,
                            completedAt,
                          };
                        }
                        accVideos.push(reducedVideo);

                        return accVideos;
                      },
                      []
                    ),
                  };
                }

                accUnits.push(unit);
                return accUnits;
              },
              []
            ),
          },
        },
      };

      client.writeQuery(newData);
    }
  }

  const { next: nextVideo, prev: prevVideo } = getNextPrevious(
    trainingUnit.published?.videos,
    videoId
  );

  const { next: nextUnit, prev: prevUnit } = getNextPrevious(
    training.units,
    unitId
  );

  const completedVideosInThisCourse = React.useMemo(
    () =>
      getCompletedVideosInThisCourse(clientRuntimeData?.trainingById?.units),
    [clientRuntimeData?.trainingById?.units]
  );

  const courseProgress = React.useMemo(
    () => getCourseProgress(completedVideosInThisCourse),
    [completedVideosInThisCourse]
  );

  const completedVideosInThisModule = completedVideosInThisCourse
    ? completedVideosInThisCourse[unitId]
    : {};

  const totalCompletedVideosInThisModule =
    completedVideosInThisModule?.completed?.size || 0;

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
          text: training.published.title,
        },
        { text: video.published.title },
      ]}
    >
      {/* <OkaidiaRGA /> */}
      <Container>
        <GatsbyVideoPlayer
          fluidPoster={fluidPoster}
          onEnded={completeVideo}
          url={clientRuntimeData?.video?.asset?.url}
          sx={{ boxShadow: 'box' }}
          otherVideoElements={[
            { otherVideo: nextVideo, caption: 'Next lesson:' },
            { otherVideo: prevVideo, caption: 'Previous lesson:' },
          ]
            .filter((v) => v.otherVideo)
            .map(({ otherVideo, caption }) => (
              <Flex
                onClick={() => {
                  navigate(
                    getVideoPath({
                      slug: otherVideo.published.slug,
                      trainingPath,
                    })
                  );
                }}
                sx={{
                  alignItems: 'stretch',
                }}
              >
                <Box sx={{ flex: 2 }}>
                  <H4>{caption}</H4>
                  <H3>{otherVideo.published.title}</H3>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    backgroundPosition: 'center',
                    backgroundImage: `url(${otherVideo.asset?.posterImageFile?.childImageSharp?.fixed?.src})`,
                  }}
                />
              </Flex>
            ))}
          overlay={
            !clientRuntimeData?.video?.asset?.url ? (
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
                        <Box
                          sx={{
                            ...textBackgroundProps,
                            display: 'block',
                            fontSize: 4,
                            lineHeight: 1.4,
                            p: 4,
                            textAlign: 'center',
                          }}
                        >
                          {pageContext.isPublicVideo && !loggedIn ? (
                            <>
                              This video is free. You need to log in to watch it
                              <P>
                                <LinkButton
                                  to="/login"
                                  state={{ referrer: location.pathname }}
                                  sx={{ color: `${DARK_GREY} !important` }}
                                >
                                  Log in
                                </LinkButton>
                              </P>
                            </>
                          ) : !pageContext.isPublicVideo && !loggedIn ? (
                            <>
                              This lesson is not free. Buy this course or log in
                              to watch this video
                              <P>
                                <LinkButton
                                  to="/login"
                                  state={{ referrer: location.pathname }}
                                  sx={{ color: `${DARK_GREY} !important` }}
                                >
                                  Log in
                                </LinkButton>

                                <LinkButton
                                  sx={{ ml: 4 }}
                                  to={`${trainingPath}#pricing`}
                                  onClick={expandCheckout}
                                  variant="primary"
                                >
                                  Buy course
                                </LinkButton>
                              </P>
                            </>
                          ) : (
                            <>
                              This lesson is not free. You need to buy this
                              course to watch this video.
                              <P>
                                <LinkButton
                                  to={`${trainingPath}#pricing`}
                                  onClick={expandCheckout}
                                  variant="primary"
                                >
                                  Buy course
                                </LinkButton>
                              </P>
                            </>
                          )}
                        </Box>
                      </>
                    )}
                  </Box>
                </ThemeProvider>
              </Box>
            ) : null
          }
        />
        <Flex sx={{ pt: 2 }}>
          <Box sx={{ flex: 1 }}>
            {prevVideo && (
              <LinkButton
                to={getVideoPath({
                  slug: prevVideo.published.slug,
                  trainingPath,
                })}
              >
                Previous lesson
              </LinkButton>
            )}
          </Box>
          <div>
            {nextVideo && (
              <LinkButton
                to={getVideoPath({
                  slug: nextVideo.published.slug,
                  trainingPath,
                })}
              >
                Next lesson
              </LinkButton>
            )}
          </div>
        </Flex>
        <Grid columns={12} sx={{ mt: 7, px: [2, 0] }}>
          <Box sx={{ gridColumn: ['1/-1', '1/ 8'] }}>
            <H1 as="h1" variant="h2" sx={{ mt: 2 }}>
              {video.published.title}
            </H1>
            <H3>Related resources</H3>
            {relatedResources ? (
              <Markdown>{relatedResources}</Markdown>
            ) : loading || loggingInUser ? (
              <P>Loading data...</P>
            ) : !loggedIn ? (
              <>
                <P>
                  Related resources are only available for ticket holders. Buy
                  this course or{' '}
                  <Link to="/login" state={{ referrer: location.pathname }}>
                    log in
                  </Link>{' '}
                  if you already did.
                </P>
                <P sx={{ textAlign: 'center' }}>
                  <LinkButton
                    onClick={expandCheckout}
                    to={`${trainingPath}#pricing`}
                    variant="primary"
                  >
                    Buy course
                  </LinkButton>
                </P>
              </>
            ) : !relatedResources && loggedIn && !viewerPurchasedTraining ? (
              <>
                <P>Related resources are only available for ticket holders.</P>
                <P sx={{ textAlign: 'center' }}>
                  <LinkButton
                    onClick={expandCheckout}
                    to={`${trainingPath}#pricing`}
                    variant="primary"
                  >
                    Buy course
                  </LinkButton>
                </P>
              </>
            ) : (
              <P>There are no related resources</P>
            )}
            <H3>Transcript</H3>
            {clientRuntimeData?.video?.published?.transcript ? (
              <Markdown>
                {clientRuntimeData.video.published.transcript}
              </Markdown>
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
          <Box sx={{ gridColumn: ['1/-1', '9/ -1'] }}>
            <StickyBox offsetTop={0}>
              <H3 sx={{ mt: 2 }}>Module: {trainingUnit.published.title}</H3>
              <H4>Lessons in this module</H4>
              <P>
                Completed {totalCompletedVideosInThisModule} out of{' '}
                {trainingUnit?.published?.videos?.length} lessons in this module
              </P>

              <ProgressBar
                progress={
                  (100 * totalCompletedVideosInThisModule) /
                  trainingUnit?.published?.videos?.length
                }
              />

              <Ul variant="unstyled" sx={{ pl: 0 }}>
                {trainingUnit.published.videos.map(
                  ({ published: { title, slug }, id }) => {
                    const path = getVideoPath({ slug, trainingPath });

                    return (
                      <Li
                        key={id}
                        sx={{
                          position: 'relative',
                          listStyle: 'none',
                          display: 'flex',
                        }}
                      >
                        <Box sx={{ minWidth: '35px', display: 'inline-block' }}>
                          {completedVideosInThisModule.completed?.has(id) ? (
                            <Tick width={25} sx={{ mb: '-5px' }} />
                          ) : (
                            <Icon comp={PlayMedia} color="#d8d8d8" />
                          )}
                        </Box>
                        <Box>
                          {removeTrailingSlashes(location.pathname).indexOf(
                            removeTrailingSlashes(path)
                          ) > -1 ? (
                            title
                          ) : (
                            <Link to={path}>{title}</Link>
                          )}
                        </Box>
                      </Li>
                    );
                  }
                )}
              </Ul>
              <Box as="hr" sx={{ my: 5 }} />
              {courseProgress && (
                <>
                  <P>
                    Completed {courseProgress.completed} out of{' '}
                    {courseProgress.total} lessons in this course
                  </P>
                  <ProgressBar
                    progress={
                      (100 * courseProgress.completed) / courseProgress.total
                    }
                  />
                </>
              )}
              <Flex sx={{ pt: 6 }}>
                <Box sx={{ flex: 1 }}>
                  {prevUnit?.published?.videos?.length ? (
                    <Link
                      to={getVideoPath({
                        slug: prevUnit.published.videos[0].published.slug,
                        trainingPath,
                      })}
                    >
                      Previous module
                    </Link>
                  ) : null}
                </Box>
                <div>
                  {nextUnit?.published?.videos?.length ? (
                    <Link
                      to={getVideoPath({
                        slug: nextUnit.published.videos[0].published.slug,
                        trainingPath,
                      })}
                    >
                      Next module
                    </Link>
                  ) : null}
                </div>
              </Flex>
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
        published {
          title
        }
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
            published {
              title
              slug
            }
            asset {
              posterImageUrl
              posterImageFile {
                childImageSharp {
                  fixed(width: 400) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
      trainingById(id: $trainingId) {
        published {
          title
          slug
        }
        units {
          id
          published {
            videos {
              published {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default LessonPage;
