import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { formatUTC } from '../../../App/Utils';
import Card from '../../../App/Components/Elements/Card';
import { P } from '../../../App/Components/Text/P';
import Link from '../../../App/Components/Navigation/Link';
import Flex from '../../../App/Components/Layout/Flex';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';

const TrainingCards = ({ trainingInstances }: any) => {
  const edges = trainingInstances?.edges || [];

  return (
    <>
      {edges?.map(({ node: trainingInstance }: any) => (
        <Card key={trainingInstance.id}>
          <Flex flexDirection="column">
            <Link
              to={`${appPaths.backoffice}${backofficePaths.training}/instances/${trainingInstance.id}`}
            >
              {trainingInstance.title} -{' '}
              {formatUTC(
                trainingInstance.startDate,
                trainingInstance.utcOffset,
                'HH:mm'
              )}
            </Link>
            <P>{trainingInstance.city}</P>
          </Flex>
        </Card>
      ))}
      <Link
        pb={3}
        button
        to={`${appPaths.backoffice}${backofficePaths.training}`}
      >
        See all courses
      </Link>
    </>
  );
};

export const FRAGMENT_TRAINING_INSTANCES_DASHBOARD = gql`
  fragment trainingInstancesDashboardFragment on TrainingInstanceConnection {
    edges {
      node {
        id
        startDate
        utcOffset
        city
        title
        trainingId
      }
    }
  }
`;
export default TrainingCards;
