import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Link from '../components/navigation/Link';

function CoursePage({ data }) {
  const training = data.upmentoring.trainingById;
  const units = training.units || [];

  return (
    <Layout>
      <h1>Course: {training.title}</h1>
      <h2>Course units:</h2>
      <ul>
        {units.reduce((acc, unit) => {
          if (unit.published) {
            const unitPath = unit.published.slug;
            acc.push(
              <li>
                <h3>
                  <Link to={unitPath}>{unit.published.title}</Link>
                </h3>
                <h4>Lessons:</h4>
                <ul>
                  {unit.published.videos &&
                    unit.published.videos.map((video, index) => (
                      <li>
                        <Link to={`${unitPath}/${index + 1}`}>
                          {video.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            );

            return acc;
          }
        }, [])}
      </ul>
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
            slug
            videos {
              title
              asset {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default CoursePage;
