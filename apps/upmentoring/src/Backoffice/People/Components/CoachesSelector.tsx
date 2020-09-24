import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import Button from '../../../App/Components/Buttons/Button';
import { P } from '../../../App/Components/Text/P';
import ErrorMessage from '../../../App/Components/Forms/ErrorMessage';
import Box from '../../../App/Components/Layout/Box';
import FinalFormFocus from '../../../App/Components/Forms/FinalFormFocus';
import { removeKeyFromObject } from '../../../App/Utils';

const CoachesSelector = ({
  meta,
  input: { onChange, name },
  initialValues = [],
}: any) => {
  const { loading, fetchMore, error, data } = useQuery(QUERY_COACHES_SELECTOR);

  const [selectedCoaches, setSelectedCoaches] = useState<any>({});

  useEffect(() => {
    initialValues.length &&
      setSelectedCoaches(
        initialValues.reduce((accumulated: any, coach: any = {}) => {
          accumulated[coach.userId] = coach;
          return accumulated;
        }, {})
      );
  }, [initialValues]);

  const toggleCoach = (user: any) => {
    const { id: userId, firstName, lastName } = user;
    const coach = {
      userId,
      firstName,
      lastName,
    };

    const newSelectedCoaches = selectedCoaches[userId]
      ? removeKeyFromObject(userId, selectedCoaches)
      : { ...selectedCoaches, [userId]: coach };

    setSelectedCoaches(newSelectedCoaches);
    onChange(Object.values(newSelectedCoaches));
  };

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { users } = data;
    const { edges } = users || [];

    return (
      <Box width={1} mt={5}>
        {loading ? (
          <P>Loading - please wait</P>
        ) : error ? (
          <P>
            Oops, there was a problem, no trainings instances could be loaded
          </P>
        ) : (
          <>
            <FinalFormFocus name={name} />

            {meta && meta.error && meta.touched && (
              <ErrorMessage>{meta.error}. Please select a teacher</ErrorMessage>
            )}

            <Table>
              <Tbody>
                {edges.length > 0 ? (
                  edges.map(({ node: user }: any) => (
                    <Tr key={user.id}>
                      <Td>{user.firstName}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>
                        <Button
                          variant={
                            selectedCoaches[user.id] ? 'primary' : 'tertiary'
                          }
                          onClick={() => toggleCoach(user)}
                        >
                          {selectedCoaches[user.id]
                            ? 'teacher added'
                            : 'Add teacher'}
                        </Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <P>No instances available</P>
                )}
              </Tbody>
            </Table>

            {users &&
            users.pageInfo &&
            users.pageInfo.hasNextPage &&
            !loading ? (
              <Box pb={3}>
                <Button
                  variant="tertiary"
                  onClick={() => {
                    fetchMore({
                      variables: {
                        cursor: users.pageInfo.endCursor,
                      },

                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                          return prev;
                        }

                        const { users: retrieved } = fetchMoreResult;

                        return {
                          users: {
                            ...retrieved,
                            edges: [...prev.users.edges, ...retrieved.edges],
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

const QUERY_COACHES_SELECTOR = gql`
  query coachesList($cursor: String, $first: Int = 50) {
    users(
      first: $first
      filter: {
        organizationId: "5aaa9b07f146e5cfafad189e"
        organizationRole: coach
      }
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
          firstName
          lastName
        }
      }
    }
  }
`;

export default CoachesSelector;
