import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Link from '../components/navigation/Link';

function UnitPage({ data }) {
  const trainingUnit = data.upmentoring.trainingUnit;

  return (
    <>
      <h1>Course Unit: {trainingUnit.published.title}</h1>
      <h4>Lessons:</h4>
      <ul>
        {trainingUnit.published.videos &&
          trainingUnit.published.videos.map((video, index) => (
            <li>
              <Link to={`${index + 1}`}>{video.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export const query = graphql`
  query getTrainingUnit($trainingUnitId: ID!) {
    upmentoring {
      trainingUnit(id: $trainingUnitId) {
        published {
          title
          objectives
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
`;

export default UnitPage;
