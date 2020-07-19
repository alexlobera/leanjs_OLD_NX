import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import Layout from '../components/layout/Layout';
import PageCard from '../components/layout/PageCard';
import Link from '../components/navigation/Link';
import Header from '../components/layout/Header';
import { P, H2, H3, H4 } from '../components/display';
import ReactHeaderBg from '../components/layout/Header/ReactBg';
import { Container, Grid, Box } from '../components/layout';
import { VideoPlayer } from '../components/display/VideoPlayer';

const metas = {
  title: 'Online React and GraphQL Courses | React GraphQL Academy',
  description:
    'Looking for React and GraphQL online courses? React GraphQL Academy Online offers online courses following our proven teaching method. Enrol now!',
  // image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

function CoursePage({ data, location }) {
  const training = data.upmentoring.trainingById;
  const units = training.units || [];
  const title = `Online ${training.title} Course`;

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
              to: '#course-faqs',
            },
          ]}
          info={
            <Box sx={{ gridColumn: ['1 / 3'], mb: 5 }}>
              <VideoPlayer url={'https://demo-vod.streamroot.io/index.m3u8'} />
            </Box>
          }
        />
      </ReactHeaderBg>
      <Container sx={{ marginTop: '-50px' }}>
        <PageCard>
          <H2>
            <a id="course-modules" />
            {title} Modules
          </H2>

          {units.reduce((acc, unit) => {
            if (unit.published) {
              const unitPath = unit.published.slug;
              const lessonsCount =
                (unit.published.videos && unit.published.videos.length) || 0;
              acc.push(
                <Grid columns={10}>
                  <Box sx={{ gridColumn: ['1 / 3'], mb: 5 }}>
                    <VideoPlayer
                      url={'https://demo-vod.streamroot.io/index.m3u8'}
                    />
                  </Box>
                  <Box sx={{ gridColumn: ['4/ -1'] }}>
                    <H3>
                      <Link to={unitPath}>{unit.published.title}</Link>
                    </H3>
                    <P>
                      {lessonsCount} lessons{' '}
                      {lessonsCount > 0 ? (
                        <>
                          {' - '}
                          <Link
                            to={`${location.pathname}/${unit.published.videos[0].slug}`}
                          >
                            watch
                          </Link>
                        </>
                      ) : null}
                    </P>
                  </Box>
                </Grid>
              );

              return acc;
            }
          }, [])}
        </PageCard>
        <Grid columns={12}>
          <Box sx={{ gridColumn: ['1/ 12', '2  / -2'] }}>
            <H2>
              <a id="course-faqs" />
              FAQs
            </H2>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query getTraining($trainingId: ID!) {
    upmentoring {
      trainingById(id: $trainingId) {
        title
        units {
          published {
            title
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
