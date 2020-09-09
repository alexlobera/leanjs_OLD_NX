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
} from '@leanjs/ui-academy';
import { PlayMedia } from '@leanjs/ui-icons';

import Tick from '../components/icons/Tick';
import { FAQSection } from '../components/display/TrainingPage';
import Layout from '../components/layout/Layout';
import Sheet from '../components/layout/Sheet';
import Link from '../components/navigation/Link';
import Header from '../components/layout/Header';
import { P, H2, H3, H4 } from '../components/display';
import ReactHeaderBg from '../components/layout/Header/ReactBg';
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
import { VideoPlayer } from '../components/display/VideoPlayer';
import Markdown from '../components/display/Markdown';
import { useQuery } from '../api/graphql/Provider';

const metas = {
  title: 'Online React and GraphQL Courses | React GraphQL Academy',
  description:
    'Looking for React and GraphQL online courses? React GraphQL Academy Online offers online courses following our proven teaching method. Enrol now!',
  type: 'website',
};

function CoursePage({ data, pageContext: { trainingId } }) {
  const { loggedIn } = useMagic();
  const training = data.upmentoring.trainingById;
  const trainingPath = `/${training.slug}-course`;
  const units = training.units || [];
  const title = `Online ${training.title} Course`;

  const trainingInstances =
    data.upmentoring.trainingInstances &&
    data.upmentoring.trainingInstances.edges
      ? data.upmentoring.trainingInstances.edges
          .map(formatTraining())
          .slice(0, 3)
      : [];

  // TODO useMemo variables inside useQuery
  const options = React.useMemo(() => {
    return { variables: { trainingId }, skip: !loggedIn };
  }, [trainingId, loggedIn]);

  const { data: privateData } = useQuery(
    `
      query purchasedTraining($trainingId: ID!) {
          viewer {
              purchasedTraining(trainingId: $trainingId ) { 
                id
              }
          }
      }
    `,
    options
  );

  const purchased = privateData?.viewer?.purchasedTraining?.id === trainingId;

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        { text: training.title },
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
      <ReactHeaderBg bottom="-300px">
        <Header
          title={title}
          subtitle={training.subtitle}
          height="100vh"
          bgColors={['rgba(196, 196, 196, 0.6)']}
          bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
            training.previewVideo && (
              <Box sx={{ gridColumn: ['1 / 3'], mb: 5 }}>
                <VideoPlayer
                  poster={training.previewVideo.asset?.posterImageUrl}
                  url={training.previewVideo.asset?.url}
                />
              </Box>
            )
          }
        />
      </ReactHeaderBg>
      <Section variant="top">
        <Container>
          <Sheet>
            <H2 sx={{ mt: 0 }}>
              <a id="course-modules" />
              {training.title} Modules
            </H2>

            <Grid columns={10}>
              {units.reduce((acc, unit, index) => {
                const { published } = unit;
                if (published) {
                  const lessonsCount =
                    (published.videos && published.videos.length) || 0;
                  const { previewVideo } = published;
                  acc.push(
                    <>
                      <Box sx={{ gridColumn: ['2/ -2', '1/ 4'], mb: 5 }}>
                        {previewVideo && (
                          <VideoPlayer
                            posterUrl={previewVideo.asset?.posterImageUrl}
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
                        <Ul variant="inline" sx={{ mb: 4 }}>
                          <Li sx={{ pl: 0 }}>{lessonsCount} lessons</Li>
                          <Li>|</Li>
                          <Li>
                            {' '}
                            {lessonsCount > 0 ? (
                              <>
                                <Link
                                  to={`${trainingPath}/${published.videos[0].slug}`}
                                >
                                  <PlayMedia
                                    fill="#1B1F23"
                                    sx={{ mb: '-7px', mx: 1, width: '16px' }}
                                  />{' '}
                                  Start watching
                                </Link>
                              </>
                            ) : null}
                          </Li>
                          {!purchased && (
                            <>
                              <Li>|</Li>
                              <Li>
                                <Link to="#pricing" sx={{ mt: 3 }}>
                                  Buy
                                </Link>
                              </Li>
                            </>
                          )}
                        </Ul>
                        <Markdown>{published.description}</Markdown>
                        {published.objectives && published.syllabus ? (
                          <Tabs defaultValue="learning" sx={{ mt: 6 }}>
                            <TabList>
                              <TabItem name="learning">
                                Learning objectives
                              </TabItem>
                              <TabItem name="curriculum">Curriculum</TabItem>
                            </TabList>
                            <TabPanel name="learning"></TabPanel>
                            <TabPanel name="curriculum">
                              <Markdown>{published.syllabus}</Markdown>
                            </TabPanel>
                          </Tabs>
                        ) : (
                          <>
                            <H4>Learning objectives</H4>
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
                          </>
                        )}
                      </Box>
                    </>
                  );
                  return acc;
                }
              }, [])}
            </Grid>
            <H2>{training.title} Curriculum</H2>
            <Card variant="secondary">
              <Markdown>{training?.description?.syllabus}</Markdown>
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
                  <PaymentSection item={training} />
                ) : (
                  <H2 sx={{ color: 'inverseText' }}>
                    <a id="pricing" />
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
                const { dayMonth, duration } = getTrainingTimings({ training });
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
  query getTraining($trainingId: ID!, $path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
    upmentoring {
      trainingById(id: $trainingId) {
        title
        subtitle
        standardPrice
        currency
        slug
        id
        onDemand
        description {
          objectives
          syllabus
        }
        previewVideo {
          asset {
            url
            posterImageUrl
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
              }
            }
            videos {
              title
              slug
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
            title
            training {
              id
              slug
              customFieldsValues {
                values
                fieldId
              }
            }
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
`;

export default CoursePage;
