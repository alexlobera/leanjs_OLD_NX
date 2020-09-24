import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import { formatUTC } from '../../../../App/Utils';
import Link from '../../../../App/Components/Navigation/Link';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import { Col } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import Box from '../../../../App/Components/Layout/Box';
import { mergeConnections, connectionFetcher } from '../../../utils';
import Button from '../../../../App/Components/Buttons/Button';

const TrainingDetailInstanceList = ({
  trainingId,
  endDate,
  direction,
  title,
  trainingInstances,
}: any) => {
  const [initialFetch, { data, loading, error, fetchMore }] = useLazyQuery(
    QUERY_TRAINING_DETAIL_INSTANCES,
    {
      variables: {
        cursor: trainingInstances?.pageInfo?.endCursor,
        trainingId,
        endDate,
        direction,
      },
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    },
  );

  const { allEdges, hasNextPage, endCursor } = mergeConnections(
    trainingInstances,
    data?.trainingInstances,
  );

  return (
    <>
      <Col>
        <Heading variant="h4">{title}</Heading>
      </Col>
      <Col>
        {allEdges?.length === 0 && (
          <Heading variant="h6">There are no course instances</Heading>
        )}
        <Table>
          <Tbody>
            {allEdges?.map(({ node: instance }: any) => (
              <Tr key={instance.id}>
                <Td>
                  <Link
                    to={`${appPaths.backoffice}${backofficePaths.training}/instances/${instance.id}`}
                  >
                    {instance.title}
                  </Link>
                </Td>
                <Td>{formatUTC(instance.startDate, instance.utcOffset)}</Td>
                <Td>{instance.city}</Td>
              </Tr>
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
    </>
  );
};

export const FRAGMENT_TRAINING_DETAIL_INSTANCE_LIST = gql`
  fragment trainingDetailInstanceListFragment on TrainingInstanceConnection {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        trainingId
        id
        city
        startDate
        utcOffset
        title
      }
    }
  }
`;

export const QUERY_TRAINING_DETAIL_INSTANCES = gql`
  query trainingDetailInstanceList(
    $cursor: String
    $first: Int = 10
    $endDate: TimeFilterEnum!
    $direction: OrderingDirectionEnum!
    $trainingId: ID!
  ) {
    trainingInstances(
      first: $first
      after: $cursor
      orderBy: { sort: endDate, direction: $direction }
      filter: { endDate: $endDate, trainingIds: [$trainingId] }
    ) {
      ...trainingDetailInstanceListFragment
    }
  }
  ${FRAGMENT_TRAINING_DETAIL_INSTANCE_LIST}
`;

export default TrainingDetailInstanceList;
