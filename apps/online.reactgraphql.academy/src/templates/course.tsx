import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';
import {
  PaymentSection,
  formatTraining,
  TrainingItem,
  getTrainingTimings,
  getVideoInfo,
} from '@leanjs/ui-academy';

import { FAQSection } from '../components/display/TrainingPage';
import Layout from '../components/layout/Layout';
import Sheet from '../components/layout/Sheet';
import Link from '../components/navigation/Link';
import Header from '../components/layout/Header';
import { P, H2, H3 } from '../components/display';
import ReactHeaderBg from '../components/layout/Header/ReactBg';
import {
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
  // image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

function CoursePage({ data }) {
  const training = data.upmentoring.trainingById;
  const trainingPath = `/${training.slug}-course`;
  const units = training.units || [];
  const title = `Online ${training.title} Course`;
  const {
    url: trainingPreviewVideoUrl,
    posterUrl: trainingPreviewVideoPoserUrl,
  } = getVideoInfo(training.previewVideo);

  const trainingInstances =
    data.upmentoring.trainingInstances &&
    data.upmentoring.trainingInstances.edges
      ? data.upmentoring.trainingInstances.edges
          .map(formatTraining())
          .slice(0, 3)
      : [];

  useQuery(`
    {
        viewer {
            id
            purchasedTrainings {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    }
  `);

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        { text: title },
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
              text: 'Modules',
              to: '#course-modules',
            },
            {
              text: 'FAQs',
              to: '#faqs',
            },
            {
              text: 'Price',
              to: '#pricing',
            },
          ]}
          info={
            trainingPreviewVideoUrl && (
              <Box sx={{ gridColumn: ['1 / 3'], mb: 5 }}>
                <VideoPlayer
                  poster={trainingPreviewVideoPoserUrl}
                  url={trainingPreviewVideoUrl}
                />
              </Box>
            )
          }
        />
      </ReactHeaderBg>
      <Section variant="top">
        <Container>
          <Sheet>
            <H2>
              <a id="course-modules" />
              {title} Modules
            </H2>

            {units.reduce((acc, unit, index) => {
              const { published } = unit;
              if (published) {
                const lessonsCount =
                  (published.videos && published.videos.length) || 0;
                const { previewVideo } = published;
                const { posterUrl, url: unitPreviewVideoUrl } = getVideoInfo(
                  previewVideo
                );

                acc.push(
                  <Grid columns={10}>
                    <Box sx={{ gridColumn: ['2/ -2', '1/ 4'], mb: 5 }}>
                      {unitPreviewVideoUrl && (
                        <VideoPlayer
                          posterUrl={posterUrl}
                          url={unitPreviewVideoUrl}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        gridColumn: ['1/ -1', '5/ -1'],
                        mb: index < units.length - 1 ? 8 : 0,
                      }}
                    >
                      <H3>{published.title}</H3>
                      <Ul variant="inline">
                        <Li sx={{ pl: 0 }}>
                          {lessonsCount} lessons
                          {lessonsCount > 0 ? (
                            <>
                              {', '}
                              <Link
                                to={`${trainingPath}/${published.videos[0].slug}`}
                              >
                                watch
                              </Link>
                            </>
                          ) : null}
                        </Li>
                        <Li>/</Li>
                        <Li>
                          See{' '}
                          <Link to="#pricing" sx={{ mt: 3 }}>
                            pricing
                          </Link>
                        </Li>
                      </Ul>
                      <Markdown>{published.description}</Markdown>
                      <Tabs defaultValue="learning">
                        <TabList>
                          <TabItem name="learning">Learning objectives</TabItem>
                          <TabItem name="curriculum">Curriculum</TabItem>
                        </TabList>
                        <TabPanel name="learning">
                          <Ul>
                            {published.objectives.map((objective) => (
                              <Li>{objective}</Li>
                            ))}
                          </Ul>
                        </TabPanel>
                        <TabPanel name="curriculum">
                          <Markdown>{published.syllabus}</Markdown>
                        </TabPanel>
                      </Tabs>
                    </Box>
                  </Grid>
                );
                return acc;
              }
            }, [])}
          </Sheet>
        </Container>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <Section variant="secondary">
        <Container>
          <Sheet variant="transparent">
            <Grid columns={10}>
              <Box sx={{ gridColumn: ['1/ -1', '1/ 6'] }}>
                <PaymentSection item={training} />
              </Box>
            </Grid>
          </Sheet>
        </Container>
      </Section>
      <Section>
        <Container>
          <Sheet variant="transparent">
            <H2>You can also attend this course live</H2>
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
        previewVideo {
          asset {
            url
            playback {
              id
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
                playback {
                  id
                }
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
