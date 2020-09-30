import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';

import { formatUTC } from '../../../App/Utils';
import { paths as backofficePaths } from '../../../Backoffice';
import Link from '../../../App/Components/Navigation/Link';
import Header from '../../../App/Components/Layout/Header';
import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import { P } from '../../../App/Components/Text/P';
import Button from '../../../App/Components/Buttons/Button';
import Box from '../../../App/Components/Layout/Box';
import { connectionFetcher } from '../../utils';

const EventsPage = () => {
  const { loading, error, data, fetchMore } = useQuery(QUERY_EVENTS, {
    fetchPolicy: 'cache-first',
  });
  const match = useRouteMatch();
  const edges = data?.events?.edges || [];
  const pageInfo = data?.events?.pageInfo;
  const endCursor = pageInfo?.endCursor;
  const hasNextPage = pageInfo?.hasNextPage;

  return (
    <>
      <Header
        title="Events"
        actions={
          <Link button={true} to={`${match.url}${backofficePaths.createEvent}`}>
            Create new event
          </Link>
        }
      />
      <Table>
        <Tbody>
          {edges.map(({ node: event }: any) => (
            <Tr key={event.id}>
              <Td>
                <Link to={`${match.url}/${event.id}`}>
                  {event.published.title}
                </Link>
              </Td>
              <Td>{event.published.city}</Td>
              {/* <Td>
                {event.meetup && event.meetup.id && event.meetup.id
                  ? 'Meetup'
                  : 'Mini Conf'}
              </Td> */}
              <Td>
                {formatUTC(
                  event.published.startDate,
                  event.published.utcOffset,
                  "D MMM 'YYYY HH:mm"
                )}
              </Td>
              <Td>
                {event.published.currency} {event.published.standardPrice}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {loading ? (
        <P>...Loading</P>
      ) : error ? (
        <P>There's an error</P>
      ) : (
        hasNextPage && (
          <Box pb={3}>
            <Button
              variant="tertiary"
              onClick={connectionFetcher({
                fetchMore,
                endCursor,
                fieldName: 'events',
              })}
            >
              Load More
            </Button>
          </Box>
        )
      )}
    </>
  );
};

export const QUERY_EVENTS = gql`
  query events($cursor: String, $first: Int = 10) {
    events(
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
          published {
            # meetup {
            #   id
            # }
            title
            city
            startDate
            utcOffset
            standardPrice
            currency
          }
        }
      }
    }
  }
`;

export default EventsPage;
