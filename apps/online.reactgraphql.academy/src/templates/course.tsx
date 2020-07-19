import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Link from '../components/navigation/Link';
import Header from '../components/layout/Header';
import { Container } from '../components/layout';

function CoursePage({ data, location }) {
  const training = data.upmentoring.trainingById;
  const units = training.units || [];

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '',
          text: 'asfd',
        },
      ]}
    >
      <Header />

      <Container>
        <h1>Course: {training.title}</h1>
        <h2>Course modules:</h2>

        {units.reduce((acc, unit) => {
          if (unit.published) {
            const unitPath = unit.published.slug;
            const lessonsCount =
              (unit.published.videos && unit.published.videos.length) || 0;
            acc.push(
              <>
                <h3>
                  <Link to={unitPath}>{unit.published.title}</Link>
                </h3>
                <h4>
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
                </h4>

                {/* <ul>
                {unit.published.videos &&
                  unit.published.videos.map((video, index) => (
                    <li>
                      <Link to={`${unitPath}/${index + 1}`}>{video.title}</Link>
                    </li>
                  ))}
              </ul> */}
              </>
            );

            return acc;
          }
        }, [])}
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
