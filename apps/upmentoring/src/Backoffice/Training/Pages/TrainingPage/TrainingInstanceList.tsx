import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { Table, Tbody } from '../../../../App/Components/Table';
import { Col } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import Box from '../../../../App/Components/Layout/Box';
import Button from '../../../../App/Components/Buttons/Button';
import TrainingRow from './TrainingRow';
import { mergeConnections, connectionFetcher } from '../../../utils';

function TrainingInstanceList({
  title,
  trainingInstances,
  endDate,
  direction,
}: any) {
  const [initialFetch, { data, loading, error, fetchMore }] = useLazyQuery(
    QUERY_UPCOMING_TRAINING_INSTANCES,
    {
      variables: {
        endDate,
        direction,
        cursor: trainingInstances?.pageInfo?.endCursor,
      },
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    }
  );

  const { allEdges, hasNextPage, endCursor } = mergeConnections(
    trainingInstances,
    data?.trainingInstances
  );

  return (
    <Box width={1}>
      <Col>
        <Heading variant="h4">{title}</Heading>
      </Col>
      <Col>
        <Table>
          <Tbody>
            {allEdges.map(({ node }: any) => (
              <TrainingRow key={node.id} trainingInstance={node} />
            ))}
          </Tbody>
        </Table>
        {loading
          ? 'loading...'
          : error
          ? error
          : hasNextPage && (
              <Box pb={3}>
                <Button
                  variant="tertiary"
                  onClick={connectionFetcher({
                    initialFetch,
                    fetchMore,
                    endCursor,
                    fieldName: 'trainingInstances',
                  })}
                >
                  Load More
                </Button>
              </Box>
            )}
      </Col>
    </Box>
  );
}

export const QUERY_TRAINING_INSTANCE_LIST_FRAGMENT = gql`
  fragment trainingInstanceListFragment on TrainingInstanceConnection {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        trainingId
        title
        published {
          city
          startDate
          utcOffset
        }
      }
    }
  }
`;

export const QUERY_UPCOMING_TRAINING_INSTANCES = gql`
  query trainingInstancesList(
    $cursor: String
    $first: Int = 10
    $endDate: TimeFilterEnum!
    $direction: OrderingDirectionEnum!
  ) {
    trainingInstances(
      filter: { endDate: $endDate }
      orderBy: { sort: startDate, direction: $direction }
      first: $first
      after: $cursor
    ) {
      ...trainingInstanceListFragment
    }
  }
  ${QUERY_TRAINING_INSTANCE_LIST_FRAGMENT}
`;

export default TrainingInstanceList;
