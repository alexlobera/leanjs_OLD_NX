import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { formatUTC } from '../../../../App/Utils';
import Box from '../../../../App/Components/Layout/Box';
import Link from '../../../../App/Components/Navigation/Link';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import { P } from '../../../../App/Components/Text/P';
import { Col } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import Button from '../../../../App/Components/Buttons/Button';

const YourTrainingInstances = () => {
  const { data, loading, error, fetchMore } = useQuery(
    QUERY_TRAINING_INSTANCES
  );

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { trainingInstances } = data;
    const edges = (trainingInstances && trainingInstances.edges) || [];

    return (
      <Box pr={5} mr={4} borderRight="1px solid">
        <Col>
          <Heading variant="h4">Your courses</Heading>
        </Col>
        <Col>
          <Table>
            <Tbody>
              {edges.map(({ node: instance }: any) => {
                return (
                  <Tr key={instance.id}>
                    <Td>
                      {instance.title},{' '}
                      {formatUTC(instance.startDate, instance.utcOffset)},{' '}
                      {instance.city}
                    </Td>
                    <Td>
                      <Link fontSize={1}>View feedback</Link>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          {data.error ? (
            <P>There's an error</P>
          ) : data.loading ? (
            <P>...loading</P>
          ) : trainingInstances &&
            trainingInstances.pageInfo &&
            trainingInstances.pageInfo.hasNextPage &&
            !loading ? (
            <Box pb={3}>
              <Button
                variant="tertiary"
                onClick={() => {
                  fetchMore({
                    variables: {
                      cursor: trainingInstances.pageInfo.endCursor,
                    },

                    updateQuery: (prev: any, { fetchMoreResult }: any) => {
                      if (!fetchMoreResult) {
                        return prev;
                      }

                      const { trainingInstances: retrieved } = fetchMoreResult;

                      return {
                        trainingInstances: {
                          ...retrieved,
                          edges: [
                            ...prev.trainingInstances.edges,
                            ...retrieved.edges,
                          ],
                        },
                      };
                    },
                  });
                }}
              >
                Load More
              </Button>
            </Box>
          ) : null}
        </Col>
      </Box>
    );
  }
};

export const QUERY_TRAINING_INSTANCES = gql`
  query trainingInstances($cursor: String, $first: Int = 5) {
    trainingInstances(
      first: $first
      after: $cursor
      orderBy: { sort: startDate, direction: DESC }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          city
          startDate
          utcOffset
          title
          trainingId
        }
      }
    }
  }
`;

export default YourTrainingInstances;
