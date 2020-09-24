import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import Heading from '../../../App/Components/Text/Heading';
import Box from '../../../App/Components/Layout/Box';
import Button from '../../../App/Components/Buttons/Button';
import Link from '../../../App/Components/Navigation/Link';
import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import { formatUTC } from '../../../App/Utils';
import { priceFormat } from '../../../App/Utils/';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { getPaymentItemData } from '../Utils';
import { mergeConnections, connectionFetcher } from '../../utils';

const PaymentList = ({
  payments,
  trainingInstanceId,
  trainingId,
  eventId,
}: any) => {
  const [initialFetch, { data, loading, error, fetchMore }] = useLazyQuery(
    QUERY_PAYMENT_LIST,
    {
      variables: {
        cursor: payments?.pageInfo?.endCursor,
        trainingInstanceId,
        trainingId,
        eventId,
      },
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    },
  );

  const { allEdges, hasNextPage, endCursor } = mergeConnections(
    payments,
    data?.payments,
  );

  return (
    <>
      <Heading variant="h4" mb={3}>
        Payments
      </Heading>
      {allEdges?.length === 0 && (
        <Heading variant="h6">There are no payments</Heading>
      )}
      <Table>
        <Tbody>
          {allEdges.map(({ node: payment }: any) => {
            const { utcOffset } = getPaymentItemData(payment.item);

            return (
              <Tr key={payment.id}>
                <Td>
                  <Link
                    to={`${appPaths.backoffice}${backofficePaths.payment}/${payment.id}`}
                  >
                    {formatUTC(payment.createdAt, utcOffset)}
                  </Link>
                </Td>
                <Td>{payment.email}</Td>
                <Td>{payment.title || payment.trainingInstance?.title}</Td>
                <Td>
                  {priceFormat({
                    currency: payment.currency,
                    amount: payment.amount,
                  })}
                </Td>
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

export const FRAGMENT_ANY_PAYMENTS_LIST = gql`
  fragment anyPaymentListFragment on PaymentConnection {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        __typename
        id
        amount
        currency
        email
        createdAt
        item {
          ... on TrainingPayment {
            trainingId
            training {
              title
            }
          }
          ... on TrainingInstancePayment {
            trainingInstanceId
            trainingInstance {
              title
            }
          }
          ... on EventPayment {
            eventId
            event {
              title
            }
          }
        }
      }
    }
  }
`;

const QUERY_PAYMENT_LIST = gql`
  query anyPaymentList(
    $trainingInstanceId: ID
    $eventId: ID
    $trainingId: ID
    $cursor: String
    $first: Int = 10
  ) {
    payments(
      filter: {
        trainingId: $trainingId
        trainingInstanceId: $trainingInstanceId
        eventId: $eventId
      }
      first: $first
      after: $cursor
      orderBy: { sort: createdAt, direction: DESC }
    ) {
      ...anyPaymentListFragment
    }
  }
  ${FRAGMENT_ANY_PAYMENTS_LIST}
`;

export default PaymentList;
