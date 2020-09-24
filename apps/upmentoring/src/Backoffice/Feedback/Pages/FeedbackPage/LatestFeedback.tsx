import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';

import { formatUTC } from '../../../../App/Utils';
import Link from '../../../../App/Components/Navigation/Link';
import { P } from '../../../../App/Components/Text/P';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import { Col } from '../../../../App';
import Heading from '../../../../App/Components/Text/Heading';
import Box from '../../../../App/Components/Layout/Box';
import Button from '../../../../App/Components/Buttons/Button';
import FeedbackRatingIcon from '../../Components/FeedbackRatingIcon';

const LatestFeedback = () => {
  const match = useRouteMatch();
  const { loading, error, data, fetchMore } = useQuery(
    QUERY_LATEST_FEEDBACK_LIST
  );

  if (error) {
    return <P>There's an error</P>;
  } else if (loading) {
    return <P>...loading</P>;
  } else {
    const { feedbacks } = data;
    const edges = (feedbacks && feedbacks.edges) || [];
    return (
      <Box width={1}>
        <Col>
          <Heading variant="h4">Your latest feedback</Heading>
        </Col>
        <Col>
          <Table>
            <Tbody>
              {edges.map(({ node: feedback }: any) => {
                const trainingInstance =
                  (feedback && feedback.trainingInstance) || {};

                return (
                  <Tr key={feedback.id}>
                    <Td>
                      <FeedbackRatingIcon rating={feedback.averageRating} />
                    </Td>
                    <Td>
                      <Link to={`${match.url}/${feedback.id}`}>
                        {formatUTC(
                          feedback.createdAt,
                          trainingInstance.utcOffset
                        )}
                      </Link>
                    </Td>
                    <Td>email</Td>
                    <Td>
                      {trainingInstance.title} -{' '}
                      {trainingInstance.startDate ? (
                        formatUTC(
                          trainingInstance.startDate,
                          trainingInstance.utcOffset
                        )
                      ) : (
                        <P>no date</P>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Col>
        {feedbacks &&
        feedbacks.pageInfo &&
        feedbacks.pageInfo.hasNextPage &&
        !loading ? (
          <Box pb={3}>
            <Button
              variant="tertiary"
              onClick={() => {
                fetchMore({
                  variables: {
                    cursor: feedbacks.pageInfo.endCursor,
                  },

                  updateQuery: (prev: any, { fetchMoreResult }: any) => {
                    if (!fetchMoreResult) {
                      return prev;
                    }

                    const { feedbacks: retrieved } = fetchMoreResult;

                    return {
                      feedbacks: {
                        ...retrieved,
                        edges: [...prev.feedbacks.edges, ...retrieved.edges],
                      },
                    };
                  },
                });
              }}
            >
              Load more
            </Button>
          </Box>
        ) : null}
      </Box>
    );
  }
};

const QUERY_LATEST_FEEDBACK_LIST = gql`
  query feedbackList($instanceId: ID, $cursor: String, $first: Int = 10) {
    feedbacks(
      filter: { trainingInstanceId: $instanceId }
      first: $first
      after: $cursor
      orderBy: { sort: createdAt, direction: DESC }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          createdAt
          trainingId
          trainingInstance {
            id
            startDate
            utcOffset
            title
          }
          averageRating
        }
      }
    }
  }
`;

export default LatestFeedback;
