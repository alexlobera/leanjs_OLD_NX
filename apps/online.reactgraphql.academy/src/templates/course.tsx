import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';
import { useMagic } from '@leanjs/magic-link';
import {
  PaymentSection,
  formatTraining,
  TrainingItem,
  getTrainingTimings,
  useExpandCheckout,
} from '@leanjs/ui-academy';
import { PlayMedia } from '@leanjs/ui-icons';
import { useQuery } from '@leanjs/graphql-client';

import ReactBgWithBorder from '../components/layout/Header/ReactBgWithBorder';
import Tick from '../components/icons/Tick';
import { FAQSection } from '../components/display/TrainingPage';
import Layout from '../components/layout/Layout';
import Sheet from '../components/layout/Sheet';
import Link, { LinkButton } from '../components/navigation/Link';
import Header from '../components/layout/Header';
import { P, H2, H3, Tag } from '../components/display';
import {
  Card,
  Container,
  Grid,
  Box,
  Tabs,
  TabList,
  TabItem,
  TabPanel,
  Ul,
  Li,
  Section,
} from '../components/layout';
import { GatsbyVideoPlayer } from '../components/display/VideoPlayer';
import Markdown from '../components/display/Markdown';

const metas = {
  title: 'Online React and GraphQL Courses | React GraphQL Academy',
  description:
    'Looking for React and GraphQL online courses? React GraphQL Academy Online offers online courses following our proven teaching method. Enrol now!',
  type: 'website',
};

const COURSE_QUERY = `
  query purchasedTraining($trainingId: ID!) {
    viewer {
      purchasedTraining(trainingId: $trainingId) {
        id
      }
    }
    trainingById(id: $trainingId) {
      published {
        standardPrice
        currency
      }
      discountPrice {
        currentPrice
        endsOn
      }
    }
  }
`;

function CoursePage({ data, pageContext: { trainingId } }) {
  const { loading: loggingInUser } = useMagic();
  const training = data.upmentoring.trainingById;
  const trainingPath = `/${training.published.slug}-course`;
  const units = training.units || [];
  const title = `Online ${training.published.title} Course`;
  const trainingInstances =
    data.upmentoring.trainingInstances &&
    data.upmentoring.trainingInstances.edges
      ? data.upmentoring.trainingInstances.edges
          .map(formatTraining())
          .filter((t) => t)
          .slice(0, 3)
      : [];

  const expandCheckout = useExpandCheckout();

  const { data: runTimeData, loading } = useQuery(COURSE_QUERY, {
    variables: { trainingId },
    skip: loggingInUser,
  });

  const loadingData = loggingInUser || loading;
  const purchased = runTimeData?.viewer?.purchasedTraining?.id === trainingId;
  const coverImageNode = data.courseThumbnailImage;
  const coverImage =
    coverImageNode.extension === 'svg'
      ? coverImageNode.publicURL
      : coverImageNode.childImageSharp.fluid.src;

  const discountPrice = runTimeData?.trainingById?.discountPrice;
  const standardPrice = runTimeData?.trainingById?.published.standardPrice;
  const currency = runTimeData?.trainingById?.published.currency;
  const BgLogo = ReactBgWithBorder;

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        { text: training.published.title },
      ]}
    >
      <Helmet
        title={metas.title}
        meta={[
          {
            name: 'description',
            content: metas.description,
          },
        ]}
      >
        {createMetas(metas)}
      </Helmet>
      <BgLogo bgColor="#44B0C5" right={-50}>
        <Header
          title={title}
          subtitle={training.published.subtitle}
          bgColors={['#44B0C5']}
          bgImageOpacity={1}
          bgImage={coverImage}
          bgRepeat="repeat"
          bgSize="auto"
          links={[
            {
              text: 'Course layout',
              to: '#course-modules',
            },
            // {
            //   text: 'Is it right for me?',
            //   to: '#target-audience',
            // },
            {
              text: 'FAQs',
              to: '#faqs',
            },
            {
              text: purchased ? 'Thanks' : 'Price',
              to: '#pricing',
            },
          ]}
          info={
            training.published.previewVideo && (
              <Box sx={{ mb: 5 }}>
                <GatsbyVideoPlayer
                  fluidPoster={
                    training.published.previewVideo.asset?.posterImageFile
                      ?.childImageSharp?.fluid
                  }
                  url={training.published.previewVideo.asset?.url}
                />
                <P sx={{ textAlign: 'center' }}>
                  <LinkButton onClick={expandCheckout} to="#pricing">
                    Buy
                  </LinkButton>
                </P>
              </Box>
            )
          }
        />
      </BgLogo>
      <Section variant="top">
        <Container>
          <Sheet>
            <H2 sx={{ mt: 0 }}>
              <Link id="course-modules" />
              {training.published.title} Modules
            </H2>

            <Grid columns={10}>
              {units.reduce((acc, unit, index) => {
                const { published } = unit;
                if (published) {
                  const lessonsCount =
                    (published.videos && published.videos.length) || 0;

                  const containsFreeVideos = !published.videos?.find(
                    ({ asset }) => asset.isPrivate
                  );
                  const { previewVideo } = published;
                  acc.push(
                    <>
                      <Box
                        sx={{
                          gridColumn: ['1/ -1', '1/ 4'],
                          mb: 5,
                        }}
                      >
                        {previewVideo && (
                          <GatsbyVideoPlayer
                            fluidPoster={
                              previewVideo.asset?.posterImageFile
                                ?.childImageSharp?.fluid
                            }
                            url={previewVideo.asset?.url}
                          />
                        )}
                      </Box>
                      <Box
                        sx={{
                          gridColumn: ['1/ -1', '5/ -1'],
                          mb: index < units.length - 1 ? 8 : 0,
                        }}
                      >
                        <H3 sx={{ mt: 0 }}>{published.title}</H3>
                        {lessonsCount > 0 && (
                          <Ul variant="inline" sx={{ mb: 6 }}>
                            <Li>
                              <LinkButton
                                to={`${trainingPath}/${published.videos[0].published.slug}`}
                              >
                                <PlayMedia sx={{ mr: 2 }} fill="#d8d8d8" />{' '}
                                Watch
                              </LinkButton>
                            </Li>
                            {containsFreeVideos && (
                              <Li>
                                <Tag sx={{ ml: 3 }}>Contains free videos</Tag>
                              </Li>
                            )}
                          </Ul>
                        )}
                        <Markdown>{published.description}</Markdown>
                        <Tabs defaultValue="learning" sx={{ mt: 6 }}>
                          <TabList>
                            <TabItem name="learning">
                              Learning objectives
                            </TabItem>
                            {lessonsCount > 0 && (
                              <TabItem name="lessons">
                                {lessonsCount} lessons
                              </TabItem>
                            )}
                            {published.syllabus && (
                              <TabItem name="curriculum">Curriculum</TabItem>
                            )}
                          </TabList>
                          <TabPanel name="learning">
                            <Markdown
                              li={({ children = null }) => (
                                <Li
                                  sx={{
                                    position: 'relative',
                                    listStyle: 'none',
                                  }}
                                >
                                  <Tick
                                    width={20}
                                    sx={{
                                      position: 'absolute',
                                      left: '-30px',
                                      top: '8px',
                                    }}
                                  />
                                  {children}
                                </Li>
                              )}
                            >
                              {published.objectives}
                            </Markdown>
                          </TabPanel>
                          {published.syllabus && (
                            <TabPanel name="curriculum">
                              <Markdown>{published.syllabus}</Markdown>
                            </TabPanel>
                          )}
                          {lessonsCount > 0 && (
                            <TabPanel name="lessons">
                              <Ul variant="unstyled" sx={{ pl: 0 }}>
                                {published.videos.map(
                                  ({ published: { title, slug }, id }) => {
                                    const path = `${trainingPath}/${slug}`;

                                    return (
                                      <Li
                                        sx={{
                                          position: 'relative',
                                          listStyle: 'none',
                                          display: 'flex',
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            minWidth: '35px',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <PlayMedia
                                            sx={{ mb: '-7px', mr: 2 }}
                                            fill="#d8d8d8"
                                          />
                                        </Box>
                                        <Box>
                                          <Link to={path}>{title}</Link>
                                        </Box>
                                      </Li>
                                    );
                                  }
                                )}
                              </Ul>
                            </TabPanel>
                          )}
                        </Tabs>
                      </Box>
                    </>
                  );
                  return acc;
                }
              }, [])}
            </Grid>
            <H2>What you'll learn</H2>
            <Card variant="secondary">
              <Markdown>{training?.published?.description?.syllabus}</Markdown>
            </Card>
            {/* <H2>
              <a id="target-audience" />
              Is this {training.title} course right for me?
            </H2> */}
          </Sheet>
        </Container>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />

      <Section variant="secondary">
        <Container>
          <Sheet variant="transparent">
            <Grid columns={10}>
              <Box sx={{ gridColumn: ['1/ -1', '1/ 6'] }}>
                {!purchased ? (
                  <PaymentSection
                    standardPrice={standardPrice}
                    currency={currency}
                    itemId={training.id}
                    type={'Training'}
                    endDate={undefined}
                    onDemand={training.published?.onDemand}
                    loading={loadingData}
                    discountPrice={discountPrice}
                  />
                ) : (
                  <H2 sx={{ color: 'inverseText' }}>
                    <Link id="pricing" />
                    Thank you for purchasing this course :)
                  </H2>
                )}
              </Box>
            </Grid>
          </Sheet>
        </Container>
      </Section>

      <Section>
        <Container>
          <Sheet variant="transparent">
            <H2 sx={{ mt: 0 }}>
              You can also learn this curriculum in a live training
            </H2>
            <P>
              Alternatively to this online course, you can also join a cohort
              and attend a React Redux Fundamentals live training. Discuss
              real-world problems with experts and work with other devs in any
              of the following training:
            </P>
            <Grid columns={{ minWidth: '300px' }} sx={{ mt: 7 }}>
              {trainingInstances.map((training) => {
                const { dayMonth, duration } = getTrainingTimings({
                  training,
                });
                return (
                  <TrainingItem
                    key={training.id}
                    isOnline={training.isOnline}
                    cityCountry={training.cityCountry}
                    startDay={dayMonth[0]}
                    startMonth={dayMonth[1]}
                    duration={duration}
                    tech={training.tech}
                    trainingType={training.trainingType}
                    title={training.title}
                    path={training.toPath}
                    className={'alternative-live-training'}
                  />
                );
              })}
            </Grid>
          </Sheet>
        </Container>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query getTraining(
    $trainingId: ID!
    $path: String!
    $coverImageRegex: String!
  ) {
    courseThumbnailImage: file(
      absolutePath: { regex: $coverImageRegex }
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)|(svg)/" }
    ) {
      publicURL
      extension
      name
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
    upmentoring {
      trainingById(id: $trainingId) {
        id
        published {
          title
          subtitle
          slug
          onDemand
          description {
            objectives
            syllabus
          }
          previewVideo {
            asset {
              url
              posterImageUrl
              posterImageFile {
                childImageSharp {
                  fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        units {
          published {
            title
            objectives
            syllabus
            description
            previewVideo {
              asset {
                url
                posterImageUrl
                posterImageFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            videos {
              published {
                title
                slug
              }
              asset {
                isPrivate
              }
            }
          }
        }
      }
      trainingInstances(
        filter: {
          ownerId: "5aaa9b07f146e5cfafad189e"
          startDate: future
          trainingIds: [
            "@VFJBOjVkMDExNGI3MDYwNTFiN2QzYmNiMGNmOQ"
            "@VFJBOjVlMzg1NGQ2NmJmZDIzMDAwMjM4NjQ3Zg=="
          ]
        }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            __typename
            id
            title
            training {
              id
              published {
                slug
                customFieldsValues {
                  values
                  fieldId
                }
              }
            }
            published {
              startDate
              utcOffset
              endDate
              isOnline
              city
              cityCountry
              daysOfTheWeek
              address
              venueName
              mapUrl
              standardPrice
              currency
              trainingInstanceType {
                name
                title
                id
              }
            }
          }
        }
      }
    }
  }
`;

export default CoursePage;
