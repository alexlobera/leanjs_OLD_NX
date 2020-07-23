import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';
import { PaymentSection } from '@leanjs/ui-academy';

import { FAQSection } from '../components/display/TrainingPage';
import Layout from '../components/layout/Layout';
import Sheet from '../components/layout/Sheet';
import Link, { LinkButton } from '../components/navigation/Link';
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

const metas = {
  title: 'Online React and GraphQL Courses | React GraphQL Academy',
  description:
    'Looking for React and GraphQL online courses? React GraphQL Academy Online offers online courses following our proven teaching method. Enrol now!',
  // image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

function CoursePage({ data, location }) {
  const training = data.upmentoring.trainingById;
  const trainingPath = `/${training.slug}-course`;
  const units = training.units || [];
  const title = `Online ${training.title} Course`;
  const trainingPreviewVideoUrl =
    training.previewVideo && training.previewVideo.asset
      ? training.previewVideo.asset.url
      : null;

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
          subtitle="Learn React online at your own pace with our proven teaching method and curriculum"
          height="100vh"
          bgColors={['rgba(196, 196, 196, 0.6)']}
          //bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
              text: 'Pricing',
              to: '#pricing',
            },
          ]}
          info={
            trainingPreviewVideoUrl && (
              <Box sx={{ gridColumn: ['1 / 3'], mb: 5 }}>
                <VideoPlayer url={trainingPreviewVideoUrl} />
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
                const unitPath = published.slug;
                const lessonsCount =
                  (published.videos && published.videos.length) || 0;
                const unitPreviewVideoUrl =
                  published.previewVideo && published.previewVideo.asset
                    ? published.previewVideo.asset.url
                    : null;

                acc.push(
                  <Grid columns={10}>
                    <Box sx={{ gridColumn: ['2/ -2', '1/ 4'], mb: 5 }}>
                      {unitPreviewVideoUrl && (
                        <VideoPlayer url={unitPreviewVideoUrl} />
                      )}
                    </Box>
                    <Box
                      sx={{
                        gridColumn: ['1/ -1', '5/ -1'],
                        mb: index < units.length - 1 ? 8 : 0,
                      }}
                    >
                      <H3>
                        <Link to={unitPath}>{published.title}</Link>
                      </H3>
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
      <Section>
        <PaymentSection />
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
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
        slug
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
    }
  }
`;

export default CoursePage;
