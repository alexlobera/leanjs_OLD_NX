import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import Heading from '../../../../../App/Components/Text/Heading';
import Box from '../../../../../App/Components/Layout/Box';
import Button from '../../../../../App/Components/Buttons/Button';
import Link from '../../../../../App/Components/Navigation/Link';
import { Table, Tbody, Tr, Td } from '../../../../../App/Components/Table';
import { formatUTC } from '../../../../../App/Utils';
import { paths as appPaths } from '../../../../../App';
import { paths as backofficePaths } from '../../../../../Backoffice';
import { mergeConnections, connectionFetcher } from '../../../../utils';
import FeedbackRatingIcon from '../../../../../Backoffice/Feedback/Components/FeedbackRatingIcon';

const TrainingInstanceFeedbackList = ({
  feedbacks,
  trainingInstanceId,
}: any) => {
  const [initialFetch, { data, loading, error, fetchMore }] = useLazyQuery(
    QUERY_TRAINING_INSTANCE_FEEDBACKS,
    {
      variables: {
        cursor: feedbacks?.pageInfo?.endCursor,
        trainingInstanceId,
      },
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    }
  );

  const { allEdges, hasNextPage, endCursor } = mergeConnections(
    feedbacks,
    data?.payments
  );

  return (
    <>
      <Heading variant="h3" mb={3}>
        Feedbacks
      </Heading>
      <Table>
        <Tbody>
          {allEdges.map(({ node: feedback }: any) => {
            const trainingInstance = feedback?.trainingInstance || {};
            return (
              <Tr key={feedback.id}>
                <Td>
                  <FeedbackRatingIcon rating={feedback.averageRating} />
                </Td>
                <Td>
                  <Link
                    to={`${appPaths.backoffice}${backofficePaths.feedback}/${feedback.id}`}
                  >
                    {formatUTC(
                      feedback.createdAt,
                      trainingInstance.published.utcOffset
                    )}
                  </Link>
                </Td>
                <Td>email</Td>
              </Tr>
            );
          })}
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
                  fieldName: 'payments',
                })}
              >
                Load More
              </Button>
            </Box>
          )}
    </>
  );
};

export const FRAGMENT_TRAINING_INSTANCE_FEEDBACKS = gql`
  fragment trainingInstanceFeedbacksFragment on FeedbackConnection {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        createdAt
        trainingInstance {
          id
          published {
            startDate
            utcOffset
          }
        }
        averageRating
      }
    }
  }
`;

export const QUERY_TRAINING_INSTANCE_FEEDBACKS = gql`
  query feedbacksByTrainingInstanceId(
    $trainingInstanceId: ID
    $cursor: String
    $first: Int = 10
  ) {
    feedbacks(
      filter: { trainingInstanceId: $trainingInstanceId }
      first: $first
      after: $cursor
    ) {
      ...trainingInstanceFeedbacksFragment
    }
  }
  ${FRAGMENT_TRAINING_INSTANCE_FEEDBACKS}
`;

export default TrainingInstanceFeedbackList;
