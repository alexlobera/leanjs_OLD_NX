import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import { Col } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import Box from '../../../../App/Components/Layout/Box';
import Link from '../../../../App/Components/Navigation/Link';
import Flex from '../../../../App/Components/Layout/Flex';
import Button from '../../../../App/Components/Buttons/Button';
import { mergeConnections, connectionFetcher } from '../../../utils';

const TrainingList = ({ trainings }: any) => {
  const [initialFetch, { data, loading, error, fetchMore }] = useLazyQuery(
    QUERY_TRAININGS,
    {
      variables: {
        cursor: trainings?.pageInfo?.endCursor,
      },
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    }
  );

  const { allEdges, hasNextPage, endCursor } = mergeConnections(
    trainings,
    data?.trainings
  );

  return (
    <Box pr={5} mr={4} borderRight="1px solid">
      <Col>
        <Heading variant="h4">Your courses</Heading>
      </Col>
      <Col>
        <Table>
          <Tbody>
            {allEdges.map(({ node: training }: any) => (
              <Tr key={training.id}>
                <Td>
                  <Flex flexDirection="column">
                    <Link
                      fontSize={1}
                      to={`${appPaths.backoffice}${backofficePaths.training}/${training.id}`}
                    >
                      {training.published.title}
                    </Link>
                  </Flex>
                </Td>
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
                    fieldName: 'trainings',
                  })}
                >
                  Load More
                </Button>
              </Box>
            )}
      </Col>
    </Box>
  );
};

export const QUERY_TRAINING_LIST_FRAGMENT = gql`
  fragment queryTrainingListFragment on TrainingConnection {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        createdAt
        published {
          title
        }
      }
    }
  }
`;

export const QUERY_TRAININGS = gql`
  query trainings($cursor: String, $first: Int = 10) {
    trainings(
      first: $first
      after: $cursor
      orderBy: { sort: updatedAt, direction: DESC }
    ) {
      ...queryTrainingListFragment
    }
  }
  ${QUERY_TRAINING_LIST_FRAGMENT}
`;

export default TrainingList;
