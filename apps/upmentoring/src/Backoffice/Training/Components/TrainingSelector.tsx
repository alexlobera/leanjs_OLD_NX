import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import Button from '../../../App/Components/Buttons/Button';
import { P } from '../../../App/Components/Text/P';
import ErrorMessage from '../../../App/Components/Forms/ErrorMessage';
import Box from '../../../App/Components/Layout/Box';
import FinalFormFocus from '../../../App/Components/Forms/FinalFormFocus';

const TrainingSelector = ({ onChange, meta, input }: any) => {
  const { fetchMore, data, loading, error } = useQuery(QUERY_TRAINING);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { trainings } = data;
    const { edges } = trainings || [];
    const selectTraining = (index: number) => {
      setClickedIndex(index);
      const { id } = edges[index].node;
      input && input.onChange(id);
      onChange && onChange(id);
    };

    return (
      <Box width={1} mt={5}>
        <FinalFormFocus name={input && input.name} />
        {data.loading ? (
          <P>Loading - please wait</P>
        ) : data.error ? (
          <P>Oops, there was a problem, no trainings could be loaded</P>
        ) : (
          <>
            {meta && meta.error && meta.touched && (
              <ErrorMessage>
                {meta.error}. Please select a training
              </ErrorMessage>
            )}
            <Table>
              <Tbody>
                {edges.length > 0 ? (
                  edges.map(({ node: training }: any, index: number) => (
                    <Tr key={training.id}>
                      <Td>{training.published.title}</Td>
                      <Td>
                        <Button
                          variant={
                            index === clickedIndex ? 'primary' : 'tertiary'
                          }
                          onClick={() => selectTraining(index)}
                        >
                          {index === clickedIndex
                            ? 'Course added'
                            : 'Add course'}
                        </Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <P>No trainings available</P>
                )}
              </Tbody>
            </Table>
            {trainings &&
            trainings.pageInfo &&
            trainings.pageInfo.hasNextPage &&
            !loading ? (
              <Box pb={3}>
                <Button
                  variant="tertiary"
                  onClick={() => {
                    fetchMore({
                      variables: {
                        cursor: trainings.pageInfo.endCursor,
                      },

                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                          return prev;
                        }

                        const { trainings: retrieved } = fetchMoreResult;

                        return {
                          trainings: {
                            ...retrieved,
                            edges: [
                              ...prev.trainings.edges,
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
          </>
        )}
      </Box>
    );
  }
};

const QUERY_TRAINING = gql`
  query training($cursor: String, $first: Int = 5) {
    trainings(
      first: $first
      after: $cursor
      orderBy: { sort: createdAt, direction: DESC }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          published {
            title
          }
        }
      }
    }
  }
`;

export default TrainingSelector;
